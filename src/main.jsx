import React from 'react';
import ReactDOM from 'react-dom/client';

import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserAuthContextProvider } from './context/UserAuthContext';

import { Provider } from 'react-redux';
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <UserAuthContextProvider>
          <App />
        </UserAuthContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);