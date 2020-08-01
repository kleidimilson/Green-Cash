import axios from 'axios';

const api = axios.create({
  baseURL: 'http://b2eff543e890.ngrok.io/v1/greentree'
});

export default api;