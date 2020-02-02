import { appTypes } from './store';
import store from './store';
import server from './server';
import auth from './auth';
import db from './database';

const initializeApp = (payload) => {
  store.dispatch({ type: appTypes.INITIALIZE_APP, payload });
  const authToken = JSON.parse(localStorage.getItem('yoga-auth')) || null;
  if (authToken) {
    store.dispatch(authToken);
  }
}

export default {
  initializeApp,
  store,
  server,
  auth,
  db
}
