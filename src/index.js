import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthhContext } from './components/context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthhContext>
      <App />
    </AuthhContext>
  </React.StrictMode>
);

