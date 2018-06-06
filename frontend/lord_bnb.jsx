import React from 'react';
import ReactDOM from 'react-dom';

import { signup, login, logout } from './actions/session_actions.js';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<h1>Welcome to Lord BnB</h1>, root);
});
