import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import "./index.css"
import Recipe from './Recipe';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </Router>    
      
  </React.StrictMode>
);

