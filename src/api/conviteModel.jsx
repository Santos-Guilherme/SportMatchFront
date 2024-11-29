import axios from 'axios';
import { API_ADDRESS } from './constants';
import { getErrorMessage } from './messageError';

const apiClient = axios.create({
    baseURL: API_ADDRESS,
});

// Interceptor para adicionar o token JWT ao cabeçalho
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Criar convite
export const createConvite = async (convite) => {
    try {
        const response = await apiClient.post('/convites', convite);
        return response.data;
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao criar convite');
    }
};

// Buscar convites por jogador
export const getConvitesByJogador = async (id_jogador) => {
    try {
        const response = await apiClient.get(`/convites/${id_jogador}`);
        return response.data;
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao buscar convites do jogador');
    }
};

// Atualizar status do convite
export const updateConviteStatus = async (id_convite, status) => {
    try {
        await apiClient.put(`/convites/${id_convite}`, { status });
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao atualizar status do convite');
    }
};

// Excluir convite
export const deleteConvite = async (id_convite) => {
    try {
        await apiClient.delete(`/convites/${id_convite}`);
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao excluir convite');
    }
};
