import store, { authTypes } from './../store';
import {
  signInWithIdentityAndPassword,
  onAuthStateChanged,
  getCurrentUser
} from './services';

export default () => {
  return {
    signInWithIdentityAndPassword(identity, password, provider) {
      return store.dispatch(
        signInWithIdentityAndPassword(
          identity,
          password,
          provider
        )
      );
    },
    onAuthStateChanged(callback) {
      this.getCurrentUser().then(user => callback(user), () => {
        this.logout();
        callback(null)
      });
      onAuthStateChanged(callback);
    },
    getCurrentUser() {
      return store.dispatch(getCurrentUser)
    },
    logout() {
      return store.dispatch({ type: authTypes.LOGOUT });
    }
  }
}
