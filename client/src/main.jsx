import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { TransactionsProvider } from './context/TransactionContext';

ReactDOM.render(
    <TransactionsProvider>
      
    <App />
  </TransactionsProvider>, 
  document.getElementById('root')
  );
  

