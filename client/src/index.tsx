import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';

import App from './App';
import { store } from './app/store';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <App />
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
