import { appTypes } from './store';
import store from './store';
import server from './server';
import auth from './auth';

const initializeApp = (payload) => {
  store.dispatch({ type: appTypes.INITIALIZE_APP, payload });
}

export default {
  initializeApp,
  store,
  server,
  auth
}
