import store, { authTypes } from './../../store';
import auth from './../index';

export default (callback) => {
  store.subscribe(() => {
    const { lastAction: { type }} = store.getState();
    switch (type) {
      case authTypes.SIGN_IN_WITH_IDENTITY:
        auth().getCurrentUser().then( user => {
          callback(user)
        }, err => callback(null));
      break;
      case authTypes.LOGOUT:
        callback(null);
      break;
    }
  });
}
