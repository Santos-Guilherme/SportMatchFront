import axios from 'axios';
import { API_ADDRESS } from './constants';
import { getErrorMessage } from './messageError';

// Adicionar participante
export const addParticipante = async (participante) => {
    try {
        const response = await axios.post(`${API_ADDRESS}/participantes`, participante);
        return response.data;
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao adicionar participante');
    }
};

// Atualizar participante
export const updateParticipante = async (id, status) => {
    try {
        await axios.put(`${API_ADDRESS}/participantes/${id}`, { status });
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao atualizar participante');
    }
};

// Remover participante
export const removeParticipante = async (id) => {
    try {
        await axios.delete(`${API_ADDRESS}/participantes/${id}`);
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao remover participante');
    }
};

// Listar participantes por partida
export const listParticipantes = async (id_partida) => {
    try {
        const response = await axios.get(`${API_ADDRESS}/participantes`, {
            params: { id_partida }
        });
        return response.data;
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao listar participantes');
    }
};
