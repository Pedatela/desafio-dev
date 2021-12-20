import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'


import 
  { Container, 
  Chart, 
  LastFinancialTransactions, 
  Card, CardHeader, 
  CardContent, 
  TransactionList, 
  Icon, 
  Description, 
  Value, 
  ValueTotal, 
  Route } from './styles';

// Icon
import { BsCreditCardFill } from "react-icons/bs";
import { AiOutlineBarcode } from "react-icons/ai";
import { BiTransferAlt } from "react-icons/bi";
import { ImBarcode } from "react-icons/im";
import { FaReceipt } from "react-icons/fa"

// API
import TransactionApi from '../../services/transaction';

// Charts
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function TransactionDetail({match: router}) {
  const [transactions, setTransactions] = useState([])
  let [totalPositive, setTotalPositive] = useState(0)
  let [totalNegative, setTotalNegative] = useState(0)
  const [total, setTotal] = useState(0)


  useEffect(() => {
    TransactionApi.getOneByStoreName(router.params.store_name)
    .then(({ data }) => {
      const total = data.data.reduce((sum, {value, business_transaction_type}) => {
      if( business_transaction_type === "Saída"){
          setTotalNegative(totalNegative+=value)
          return sum - value
        }else{
          setTotalPositive(totalPositive+=value)
          return sum + value
        }
      },0)
      setTotal(parseFloat(total).toFixed(2))
      setTransactions(data.data)
    })
  }, [router.params.store_name])


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Balanço',
      },
    }
  }

  const labels = ['Total'];


  const data = {
    labels,
    datasets: [
      {
        label: 'Saída',
        data: [totalNegative],
        backgroundColor: '#F43A68',
      },
      {
        label: 'Entrada',
        data: [totalPositive],
        backgroundColor: '#84C77A',
      },
    ],
  };


  const ChangeIcon = (business_transaction_type) =>{
    switch (business_transaction_type) {
      case "Débito":
      case "Credito":
        return <BsCreditCardFill />

      case "Boleto":
        return <AiOutlineBarcode />

      case "Recebimento TED":
      case "Recebimento DOC":
      case "Recebimento Emprestimo":
      case "Aluguel":
      case "Vendas":
        return <BiTransferAlt />

      case "Financiamento":
        return <ImBarcode />

    }
  }

  return (
    <Container>
      <Chart>
        <Card>
          <CardHeader>
            <Bar options={options} data={data} />
          </CardHeader>
        </Card>
      </Chart>
       
      <LastFinancialTransactions>
        <Card>
          <CardHeader>Últimas transações</CardHeader>
          <CardContent>
            <ul>
              {transactions.map((transaction, index) => (
                <TransactionList key={index} length={transactions.length}>
                  <Icon>
                    <span>{ChangeIcon(transaction.description)}</span>
                    </Icon>
                  <Description>
                    <div>{transaction.description}</div>
                    <span>{transaction.occurrence_date}</span>
                  </Description>
                  <Value type={transaction.business_transaction_type}>
                    <span>R${transaction.value}</span>
                  </Value>
              </TransactionList>
              ))}
               <TransactionList>
                 <Icon>
                   <span><FaReceipt/></span>
                   </Icon>
                  <Description>
                    <div>Total</div>
                  </Description>
                  <ValueTotal total={total}>
                    <span>R${total}</span>
                  </ValueTotal>
              </TransactionList>
            </ul>
          </CardContent>
        </Card>
      </LastFinancialTransactions>
      <Route>
        <Link to={ {pathname: `/transactions`}}>
          Voltar para a tela de transação
        </Link>
      </Route>
    </Container>
  );
}

export default TransactionDetail;