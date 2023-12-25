import axios from 'axios';

import { BASE_URL } from '../constants/api';

// axios.defaults.withCredentials = true

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});

export default instance;
