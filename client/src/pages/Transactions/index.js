import React, {useEffect, useState} from 'react';

import { Link } from 'react-router-dom'
// Styles
import { Container, TableContainer, Header } from './styles';
// API
import TransactionApi from '../../services/transaction';

// Components
import DataTable from 'react-data-table-component'
import InputFile from '../../components/InputFile';

// Icons
import { BsEye } from "react-icons/bs";



function Transactions() {
  const tableColumns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Nome da Loja',
      selector: row => row.store_name,
      sortable: true
    },
    {
      name: 'Nome do Dono',
      selector: row => row.store_owner,
      sortable: true
    },
    {
      name: "Visualizar",
      selector: row => "Visualizar",
      sortable: false,
      cell: ({store_name}) => (
        <Link to={ {pathname: `/transaction/details/${store_name}`}}>
          <div style={{ minWidth: 50, justifyContent: 'space-around', display: 'flex', flexDirection: 'row' }}>
            <BsEye title={`Visualizar loja ${store_name}`}  />
          </div>
        </Link>
      )
  }

  ]

  const [transactions, setTransactions] = useState([])
  const [loadingTable, setLoadingTable] = useState(true);

  useEffect(() => {
    TransactionApi.getAll()
      .then(({ data }) => {
        setTransactions(data.data)
        setLoadingTable(false)
      })
  }, [])


  return (
      <Container>
          <Header>
            <h2>Lista de Lojas</h2>
            <InputFile />
          </Header>
          <TableContainer >
            <DataTable
              noHeader
              pointerOnHover
              highlightOnHover
              data={transactions}
              columns={tableColumns}
              progressPending={loadingTable}
              noDataComponent="Não tem dados"
          />
          </TableContainer>
      </Container>
  );
}

export default Transactions;