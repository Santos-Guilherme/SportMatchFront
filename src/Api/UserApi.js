import axios from 'axios';
import { API_ADDRESS } from './constant';
import { getErrorMessage } from './messageError';

// Cadastro de usuário
export const registerUser = async (usuario) => {
  try {
    const response = await axios.post(`${API_ADDRESS}/usuario`, usuario);
    return response.data;
  } catch (error) {
    throw getErrorMessage(error, 'Erro ao cadastrar usuário');
  }
};

// Login do usuário
export const loginUser = async (credenciais) => {
  try {
    const response = await axios.post(`${API_ADDRESS}/login`, credenciais);
    return response.data;
  } catch (error) {
    throw getErrorMessage(error, 'Erro ao fazer login');
  }
};

// Edição de conta
export const editUser = async (idUsuario, dados) => {
  try {
    const response = await axios.put(`${API_ADDRESS}/usuario/${idUsuario}`, dados);
    return response.data;
  } catch (error) {
    throw getErrorMessage(error, 'Erro ao editar informações do usuário');
  }
};

export const alterarSenhaApi = async (idUsuario, senhaAntiga, novaSenha) => {
  try {
    const response = await axios.put(`${API_ADDRESS}/usuario/senha`, {
      idUsuario,
      senhaAntiga,
      novaSenha,
    });
    return response.data;
  } catch (error) {
    getErrorMessage(error, 'Erro ao alterar a senha');
  }
};