import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './css/mainPage.css'
import './firebase'
import React from 'react';
import ReactDOM from 'react-dom/client';
import oldBooks from './data/example-books.json';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
