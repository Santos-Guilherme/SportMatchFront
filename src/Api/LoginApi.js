import axios from 'axios';
import { API_ADDRESS } from './constant';
import { mensageError } from './mensageError';

// Função de login para diferentes tipos de usuário
export async function realizarLogin(credenciais) {
  try {
    const response = await axios.post(`${API_ADDRESS}/login`, credenciais);
    return response.data;
  } catch (error) {
    mensageError(error, 'Erro ao realizar login');
    throw error;
  }
}

// Configuração do interceptor de requisição para adicionar token
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor de resposta para tratar erros de autenticação
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
