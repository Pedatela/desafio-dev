import React, {useEffect, useState} from 'react';

// Styles
import { Container } from './styles';
// API
import TransactionApi from '../../services/transaction';

// Components
import DataTable from 'react-data-table-component'

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
      cell: (store) => (
          <div style={{ minWidth: 50, justifyContent: 'space-around', display: 'flex', flexDirection: 'row' }}>
              <BsEye title={`Edit store ${store.store_name}`}  />
          </div>
      )
  }

  ]


  const [transactions, setTransactions] = useState([])
  const [loadingTable, setLoadingTable] = useState(true);
  useEffect(() => {
    TransactionApi.getAll()
      .then(({ data }) => {
        console.log(data)
        setTransactions(data.data)
        setLoadingTable(false)
      })
  }, [])


  return (
      <Container>
          <h2>Lista de Lojas</h2>
          <DataTable
            noHeader
            pointerOnHover
            highlightOnHover
            data={transactions}
            columns={tableColumns}
            progressPending={loadingTable}
            noDataComponent="Não tem dados"
        />

      </Container>
  );
}

export default Transactions;