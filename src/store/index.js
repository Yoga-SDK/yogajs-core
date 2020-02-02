import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import appReducer from './app';
import authReducer from './auth';
export { default as appTypes } from './app/types';
export { default as authTypes } from './auth/types';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  lastAction: (state, action) => action
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const authToken = JSON.parse(localStorage.getItem('yoga-auth')) || null;
if (authToken) {
  store.dispatch(authToken);
}

export default store;
