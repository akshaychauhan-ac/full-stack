import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBBxFzRO7rm5ar9RW8_tsuJwYAz_gmreLc",
  authDomain: "full-stack-8bf8d.firebaseapp.com",
  projectId: "full-stack-8bf8d",
  storageBucket: "full-stack-8bf8d.appspot.com",
  messagingSenderId: "360589568855",
  appId: "1:360589568855:web:940e5f26b59c213ca1ac12",
  measurementId: "G-404WVD7VJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
