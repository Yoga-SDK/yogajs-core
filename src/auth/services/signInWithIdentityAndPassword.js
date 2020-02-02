import server from './../../server';
import { authTypes } from './../../store';

export default (identity, password, provider = 'email') => {
  return (dispatch) => {
    return server()
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
      dispatch({ type: authTypes.SIGN_IN_WITH_IDENTITY, payload })
      return payload;
    }, err => err )
  }
}
