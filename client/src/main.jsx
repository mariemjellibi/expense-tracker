import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TransactionsProvider } from './contexts/TransactionContext.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <TransactionsProvider>
        <App />
    </TransactionsProvider>
    </ThemeProvider>
    
  
  </StrictMode>,
)
