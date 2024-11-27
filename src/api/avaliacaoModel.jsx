import axios from 'axios';
import { API_ADDRESS } from './constants';
import { getErrorMessage } from './messageError';

// Criar avaliação
export const addAvaliacao = async (avaliacao) => {
    try {
        const response = await axios.post(`${API_ADDRESS}/avaliacoes`, avaliacao);
        return response.data;
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao adicionar avaliação');
    }
};

// Atualizar avaliação
/*
export const updateAvaliacao = async (id, nota, comentario) => {
    try {
        await axios.put(`${API_ADDRESS}/avaliacoes/${id}`, { nota, comentario });
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao atualizar avaliação');
    }
};
*/

export const updateAvaliacao = async (id, avaliacao) => {
    try {
        await axios.put(`${API_ADDRESS}/avaliacoes/${id}`, avaliacao);
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao atualizar avaliação');
    }
};

// Excluir avaliação
export const deleteAvaliacao = async (id) => {
    try {
        await axios.delete(`${API_ADDRESS}/avaliacoes/${id}`);
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao excluir avaliação');
    }
};

// Listar avaliações de uma quadra
export const listAvaliacoes = async (id_quadra) => {
    try {
        const response = await axios.get(`${API_ADDRESS}/avaliacoes`, { params: { id_quadra } });
        return response.data;
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao listar avaliações');
    }
};
