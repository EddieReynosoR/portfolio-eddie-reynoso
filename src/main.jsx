import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { SectionsProvider } from './context/sections.jsx'
import { Details } from './pages/Details/Details.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SectionsProvider>
    <Router>
      <Routes>
        <Route path='/'  element={<App/>}/>
        <Route path= '/project/:projectname' element={<Details/>}/>
      </Routes>

    </Router>
  </SectionsProvider>
    
)
