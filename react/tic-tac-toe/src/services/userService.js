import api from '../config/api';

export default {
  login: (data) => api.post('/login',data)
};
