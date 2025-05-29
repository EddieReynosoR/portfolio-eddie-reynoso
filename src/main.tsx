import ReactDOM from 'react-dom/client';
import type { Container } from 'react-dom/client';

import App from './App.tsx';
import './index.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SectionsProvider } from './contexts/sections.js';
import { Details } from './pages/Details/Details.jsx';

let rootElement = document.getElementById('root') as Container;

ReactDOM.createRoot(rootElement).render(
  <SectionsProvider>
    <Router>
      <Routes>
        <Route path='/'  element={<App/>}/>
        <Route path= '/project/:projectname' element={<Details/>}/>
      </Routes>
    </Router>
  </SectionsProvider>    
)
