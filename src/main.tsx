import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.tsx'
import { AuthProvider } from './context/AuthContext';
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css'
 

 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>         {/* ✅ Make sure this wraps <App /> */}
      <App />
    </AuthProvider>
  </React.StrictMode>,
);