
import Axios, { InternalAxiosRequestConfig } from 'axios';
import { env } from '../config/env';


async function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = localStorage.getItem("_auth") ?? ""
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  config.headers.Accept = 'application/json';
  return config;
}

export const axios = Axios.create({
  baseURL: env.VITE_BASE_API_URL
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // const message = error.response?.data?.message || error.message;
    // debugger
    if (error.data?.status === 401) {
      // TODO: clear storages and move to login
    }
    // useNotificationStore.getState().addNotification({
    //   type: 'error',
    //   title: 'Error',
    //   message,
    // });
    return Promise.reject(error);
  }
);
