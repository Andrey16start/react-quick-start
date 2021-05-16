import axios from 'axios';

import { Env } from '../models/global';


const host = window.location.hostname;
const prodHosts = ['some-domain.com'];

export const ENV: Env = prodHosts.includes(host)
  ? 'PROD'
  : 'DEV';

const baseURL = {
  PROD: 'https://some-domain.com/api/',
  DEV: 'https://some-domain.com/api/',
}

axios.defaults.baseURL = baseURL[ENV];
axios.defaults.withCredentials = true;

// axios.interceptors.response.use(
//   res => Promise.resolve(res),
//   err => Promise.reject(err)
// );