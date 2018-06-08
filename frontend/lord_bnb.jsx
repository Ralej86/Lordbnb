import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'

import { fetchLocations, fetchLocation, createLocation } from './actions/location_actions.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser}
      },
      session: { id: window.currentUser.id}
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.fetchLocations = fetchLocations;
  window.fetchLocation = fetchLocation;
  window.createLocation = createLocation;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store}/>, root);
});
