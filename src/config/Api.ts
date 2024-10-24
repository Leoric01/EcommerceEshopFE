import axios from "axios";
import { TokenService } from '../State/interceptors/TokenService';

const tokenService = new TokenService();

const API_URL = "http://localhost:8080";
const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
  (config) => {
    const token = tokenService.getToken();
    if (token) {
      console.log('Adding Authorization header:', token);
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Interceptor request error:', error);
    return Promise.reject(error);
  }
);

export { api };