import { createReducer } from 'reduxsauce';
import Types from './types';
import { signInWithIdentityAndPassoword, getCurrentUser, logout } from './actions';

export const INITIAL_STATE = {};

export const HANDLERS = {
  [Types.SIGN_IN_WITH_IDENTITY]: signInWithIdentityAndPassoword(INITIAL_STATE),
  [Types.GET_CURRENT_USER]: getCurrentUser(INITIAL_STATE),
  [Types.LOGOUT]: logout(INITIAL_STATE)
} 

export default createReducer(INITIAL_STATE, HANDLERS);
