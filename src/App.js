import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';


import './config/ReactotronConfig';

import GlobalStyle from './styles/global';
import Header from './components/Header/index';
import Routes from './routes';


import store from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </BrowserRouter >
    </Provider>
  );
}

