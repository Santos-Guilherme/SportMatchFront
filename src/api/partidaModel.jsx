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

// Criar partida
export const createPartida = async (partida) => {
    try {
        const response = await apiClient.post('/partidas', partida);
        return response.data;
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao criar partida');
    }
};

// Atualizar partida
export const updatePartida = async (id, partida) => {
    try {
        await apiClient.put(`/partidas/${id}`, partida);
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao atualizar partida');
    }
};

// Excluir partida
export const deletePartida = async (id) => {
    try {
        await apiClient.delete(`/partidas/${id}`);
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao excluir partida');
    }
};

// Listar todas as partidas
export const listPartidas = async () => {
    try {
        const response = await apiClient.get('/partidas');
        return response.data;
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao listar partidas');
    }
};

// Listar partidas de um criador específico
export const listPartidasByCriador = async (id_criador) => {
    try {
        const response = await apiClient.get(`/partidas/criador/${id_criador}`);
        return response.data;
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao listar partidas do criador');
    }
};

// Adicionar participante à partida
export const addParticipante = async (id_partida, id_usuario) => {
    try {
        const response = await apiClient.post(`/partidas/${id_partida}/participantes`, {
            id_usuario,
        });
        return response.data;
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao adicionar participante à partida');
    }
};

// Listar participantes de uma partida
export const listParticipantesByPartida = async (id_partida) => {
    try {
        const response = await apiClient.get(`/partidas/${id_partida}/participantes`);
        return response.data;
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao listar participantes da partida');
    }
};


export const listPartidasByAdmin = async (id_administrador) => {
    try {
        const response = await apiClient.get(`/partidas/admin`, {
            params: { id_administrador },
        });
        return response.data;
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao listar partidas do administrador');
    }
};

// Atualizar status da partida
export const updatePartidaStatus = async (id_partida, status) => {
    try {
        await apiClient.put(`/partidas/status`, {id_partida, status });
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao atualizar status da partida');
    }
};

// Listar partidas participadas por um usuário
export const listPartidasParticipadasByUser = async (id_usuario) => {
    try {
        const response = await apiClient.get(`/partidas/participadas/${id_usuario}`);
        return response.data;
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao listar partidas participadas pelo usuário');
    }
};
