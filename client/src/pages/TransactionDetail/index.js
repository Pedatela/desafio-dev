import React, {useEffect, useState} from 'react';

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
  ValueTotal } from './styles';

// Icon
import { BsCreditCardFill } from "react-icons/bs";
import { AiOutlineBarcode } from "react-icons/ai";
import { BiTransferAlt } from "react-icons/bi";
import { ImBarcode } from "react-icons/im";
import { FaReceipt } from "react-icons/fa"

// API
import TransactionApi from '../../services/transaction';

function TransactionDetail({match: router}) {
  const [transactions, setTransactions] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    TransactionApi.getOneByStoreName(router.params.store_name)
    .then(({ data }) => {
      const total = data.data.reduce((sum, {value, business_transaction_type}) => business_transaction_type === "Saída" ? sum - value : sum + value, 0)
      setTotal(parseFloat(total).toFixed(2))
      setTransactions(data.data)
    })
  }, [router.params.store_name])


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
          <CardHeader>Gráfico</CardHeader>
        </Card>
      </Chart>
       
      <LastFinancialTransactions>
        <Card>
          <CardHeader>Últimas transações</CardHeader>
          <CardContent>
            <ul>
              {transactions.map((transaction) => (
                <TransactionList length={transactions.length}>
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

    </Container>
  );
}

export default TransactionDetail;