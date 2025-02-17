import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'


import Routes from './routes';
import history from './services/history';

import GlobalStyle from './styles/global'

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
      <ToastContainer theme="dark" autoClose={3000} />
  </Router>
  );
}

export default App;
