import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Route from './Route'

import Transactions from '../pages/Transactions'
import TransactionsDetail from '../pages/TransactionDetail'

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Transactions}  />
      <Route path='/transactions' exact component={Transactions} />
      <Route path='/transaction/details/:store_name' exact component={TransactionsDetail}  />
    </BrowserRouter>
  )
}