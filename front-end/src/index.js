import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/styles.css'
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux'
import { store } from './store/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    <ToastContainer />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
