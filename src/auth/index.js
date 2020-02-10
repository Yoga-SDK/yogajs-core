import store, { authTypes } from './../store';
import {
  signInWithIdentityAndPassword,
  onAuthStateChanged,
  getCurrentUser,
  createUser,
  updateProfile
} from './services';

export default () => {
  return {
    signInWithIdentityAndPassword(identity, password, provider) {
      return signInWithIdentityAndPassword(
        identity,
        password,
        provider
      );
    },
    onAuthStateChanged(callback) {
      this.getCurrentUser().then(user => callback(user), () => this.logout());
      onAuthStateChanged(callback);
    },
    getCurrentUser() {
      return store.dispatch(getCurrentUser)
    },
    logout() {
      return store.dispatch({ type: authTypes.LOGOUT });
    },
    createUser(data) {
      return createUser(data);
    },
    updateProfile(data) {
      return updateProfile(data);
    }
    
  }
}
