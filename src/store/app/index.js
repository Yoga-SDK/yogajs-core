import { createReducer } from 'reduxsauce';
import Types from './types';

export const INITIAL_STATE = {};

export const initializeApp = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    ...action.payload
  }
}

export const HANDLERS = {
  [Types.INITIALIZE_APP]: initializeApp
} 

export default createReducer(INITIAL_STATE, HANDLERS);
