import store, { authTypes } from './../../store';


export default (callback) => {
  store.subscribe(() => {
    const { lastAction: { type }} = store.getState();
    switch (type) {
      case authTypes.SIGN_IN_WITH_IDENTITY:
        callback(true)
      break;
      case authTypes.LOGOUT:
        callback(false);
      break;
    }
  });
}
