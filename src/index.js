import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UseAuthContext } from './components/context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseAuthContext>
      <App />
    </UseAuthContext>
  </React.StrictMode>
);

