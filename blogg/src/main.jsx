import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css';
import { UserProvider } from './context/UserContext';
import { AuthProvider } from './context/AuthContext.jsx';
import { ArticleProvider } from './context/ArticleContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ArticleProvider>
        <App />
      </ArticleProvider>
    </AuthProvider>
  </React.StrictMode>
);
