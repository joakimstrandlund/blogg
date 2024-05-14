import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css';
import { UserProvider } from './context/UserContext';
import { AuthProvider } from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>
);
