import { create } from 'apisauce';

const api = create({
  baseURL: 'http://localhost:3005', //process.env.API_BASE_URL,
  timeout: 5000
});

export default api;
