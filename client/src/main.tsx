import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { songApi } from './services/songApi';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider api={songApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
)
