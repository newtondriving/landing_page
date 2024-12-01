// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Path to your App component
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';

// Make sure the app is wrapped in Router at the entry point
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
