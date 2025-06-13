import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/index.css'; // ✅ Make sure this file exists at src/style/index.css

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
