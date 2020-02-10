import server from './../../server';
import store, { authTypes } from './../../store';

export default (identity, password, provider = 'email') => {
  return new Promise(( resolve, reject) => {
    server()
    .post('/auth/login', {
      provider: 'identityAndPassword',
      credentials: {
        identity: {
          field: provider,
          value: identity
        },
        password
      } 
    })
    .then( payload => {
      store.dispatch({ type: authTypes.SIGN_IN_WITH_IDENTITY, payload })
      return resolve(payload);
    })
    .catch (err => reject(err));
  });
}
