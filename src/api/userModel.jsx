import axios from 'axios';
import { API_ADDRESS, apiClient } from './constants';
import { getErrorMessage } from './messageError';

// Registro de usuário
export const registerUser = async (usuario) => {
  try {
    const response = await axios.post(`${API_ADDRESS}/usuarios`, usuario);
    return response.data;
  } catch (error) {
    throw getErrorMessage(error, 'Erro ao cadastrar usuário');
  }
};

// Atualizar usuário
export const updateUser = async (id, usuario) => {
  try {
    await axios.put(`${API_ADDRESS}/usuarios/${id}`, usuario);
  } catch (error) {
    throw getErrorMessage(error, 'Erro ao atualizar usuário');
  }
};

// Buscar usuário por email
export const getUserByEmail = async (email) => {
  try {
    const response = await axios.get(`${API_ADDRESS}/usuarios/email`, { params: { email } });
    return response.data;
  } catch (error) {
    throw getErrorMessage(error, 'Erro ao buscar usuário');
  }
};

// Autenticar usuário (Login)
export const authenticateUser = async (email, senha) => {
  try {
    const response = await apiClient.post('/usuarios/auth', { email, senha });
    return response.data; // Inclui o token retornado pela API
  } catch (error) {
    throw new Error('Erro ao autenticar usuário.');
  }
};