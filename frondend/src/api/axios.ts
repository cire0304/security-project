import axios from 'axios';

import { BASE_URL } from '../constants/api';

// axios.defaults.withCredentials = true

const instance = axios.create({
  baseURL: BASE_URL,
  // httpsAgent: new https.Agent({  
  //   rejectUnauthorized: false
  // })
});

export default instance;
