import axios from 'axios';
import store from './../store';

export const responseErrorHandler = err => {
  if (err.response) {
    return Promise.reject(err.response.data.data);
  }
  return Promise.reject(err);
}

export const responseHandler = ({ data: { data }}) => {
  return data;
}

export default () => {
  const { app: { appUrl: baseURL }, auth: { access_token, token_type } } = store.getState();
  const client = axios.create({
    baseURL,
  })
  if (access_token && token_type) {
    client.defaults.headers.common['Authorization'] = `${token_type} ${access_token}`;
  }
  client.interceptors.response.use(responseHandler, responseErrorHandler);
  return client;
}
