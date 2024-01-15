import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SectionsProvider } from './context/sections.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SectionsProvider>
    <App />
  </SectionsProvider>
    
)
