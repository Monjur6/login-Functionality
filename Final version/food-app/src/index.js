import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* render the App component with the GoogleOAuthProvider component as a parent */}
    <GoogleOAuthProvider clientId="96384931447-ni484afarfecl7b3bvpdjd1iuh4hhqbd.apps.googleusercontent.com"><App /></GoogleOAuthProvider>;
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
