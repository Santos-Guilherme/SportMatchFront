import axios from 'axios';
import { API_ADDRESS } from './constant';
import { getErrorMessage } from './messageError';

export const criarPartida = async (dadosPartida) => {
  try {
    const response = await axios.post(`${API_ADDRESS}/partidas`, dadosPartida);
    return response.data;
  } catch (error) {
    getErrorMessage(error, 'Erro ao criar a partida');
  }
};

export const participarPartida = async (idPartida, idJogador) => {
  try {
    const response = await axios.post(`${API_ADDRESS}/partidas/participar`, { idPartida, idJogador });
    return response.data;
  } catch (error) {
    getErrorMessage(error, 'Erro ao participar da partida');
  }
};

export const sairPartida = async (idPartida, idJogador) => {
  try {
    const response = await axios.post(`${API_ADDRESS}/partidas/sair`, { idPartida, idJogador });
    return response.data;
  } catch (error) {
    getErrorMessage(error, 'Erro ao sair da partida');
  }
};

export const buscarPartidasDisponiveis = async () => {
  try {
    const response = await axios.get(`${API_ADDRESS}/partidas/disponiveis`);
    return response.data;
  } catch (error) {
    getErrorMessage(error, 'Erro ao buscar partidas disponíveis');
  }
};

export const buscarPartidasPorJogador = async (idJogador, status) => {
  try {
    const response = await axios.get(`${API_ADDRESS}/partidas/jogador`, { params: { idJogador, status } });
    return response.data;
  } catch (error) {
    getErrorMessage(error, 'Erro ao buscar partidas do jogador');
  }
};
