import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // your backend base URL
});

// Attach token to every request if available
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');  // get token from localStorage
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;  // add Authorization header
  }
  return config;
});

export default api;
