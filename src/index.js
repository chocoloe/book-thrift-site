import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './css/mainPage.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import oldBooks from './data/example-books.json';
import App from './components/App';

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyC3kvmqRhONPvMShfZSyGgxrXuRPr_wWGY",
  authDomain: "info340-final-project-9e780.firebaseapp.com",
  projectId: "info340-final-project-9e780",
  storageBucket: "info340-final-project-9e780.appspot.com",
  messagingSenderId: "918307765387",
  appId: "1:918307765387:web:f06d273338e89ae9db288e"
};
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App books={oldBooks} />
  </React.StrictMode>
);
