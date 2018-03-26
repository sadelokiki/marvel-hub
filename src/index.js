import React from 'react';
import { Provider } from 'react-redux';
import store, { history } from './redux/store';
import ReactDOM from 'react-dom';
import App from './containers/app';
import { BrowserRouter, Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
