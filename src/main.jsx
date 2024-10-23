import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Filter from './Filter.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Filter />
    <App />
  </StrictMode>,
)
