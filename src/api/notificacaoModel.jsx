import axios from 'axios';
import { API_ADDRESS } from './constants';
import { getErrorMessage } from './messageError';

// Criar notificação
export const createNotificacao = async (notificacao) => {
    try {
        const response = await axios.post(`${API_ADDRESS}/notificacoes`, notificacao);
        return response.data;
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao criar notificação');
    }
};

// Marcar notificação como lida
export const markNotificacaoAsRead = async (id) => {
    try {
        await axios.put(`${API_ADDRESS}/notificacoes/${id}`);
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao marcar notificação como lida');
    }
};

// Excluir notificação
export const deleteNotificacao = async (id) => {
    try {
        await axios.delete(`${API_ADDRESS}/notificacoes/${id}`);
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao excluir notificação');
    }
};

// Listar notificações de um usuário
export const listNotificacoes = async (id_usuario) => {
    try {
        const response = await axios.get(`${API_ADDRESS}/notificacoes`, { params: { id_usuario } });
        return response.data;
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao listar notificações');
    }
};
