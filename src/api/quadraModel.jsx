import axios from 'axios';
import { API_ADDRESS } from './constants';
import { getErrorMessage } from './messageError';

// Criar quadra
export const createQuadra = async (quadra) => {
    try {
        const response = await axios.post(`${API_ADDRESS}/quadras`, quadra);
        return response.data;
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao criar quadra');
    }
};

// Atualizar quadra
export const updateQuadra = async (id, quadra) => {
    try {
        await axios.put(`${API_ADDRESS}/quadras/${id}`, quadra);
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao atualizar quadra');
    }
};

// Excluir quadra
export const deleteQuadra = async (id, id_administrador) => {
    try {
        await axios.delete(`${API_ADDRESS}/quadras/${id}`, {
            data: { id_administrador },
        });
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao excluir quadra');
    }
};

// Listar quadras de um administrador
export const listQuadrasByAdmin = async (id_administrador) => {
    try {
        const response = await axios.get(`${API_ADDRESS}/quadras/admin`, {
            params: { id_administrador },
        });
        return response.data;
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao listar quadras do administrador');
    }
};

// Listar todas as quadras
export const listAllQuadras = async () => {
    try {
        const response = await axios.get(`${API_ADDRESS}/quadras`);
        return response.data;
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao listar todas as quadras');
    }
};

// Verificar disponibilidade de quadra
export const checkQuadraAvailability = async (id_quadra, data) => {
    try {
        const response = await axios.get(`${API_ADDRESS}/quadras/disponibilidade`, {
            params: { id_quadra, data },
        });
        return response.data;
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao verificar disponibilidade da quadra');
    }
};

// Adicionar imagem à quadra
export const addQuadraImage = async (id_quadra, file) => {
    try {
        const response = await axios.post(`${API_ADDRESS}/quadras/imagens/${id_quadra}`, file, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data;
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao adicionar imagem à quadra');
    }
};


// Listar imagens de uma quadra
export const listQuadraImages = async (id_quadra) => {
    try {
        const response = await axios.get(`${API_ADDRESS}/quadras/${id_quadra}/imagens`);
        return response.data;
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao listar imagens da quadra');
    }
};

// Excluir imagem de uma quadra
export const deleteQuadraImage = async (id_imagem) => {
    try {
        await axios.delete(`${API_ADDRESS}/quadras/imagens/${id_imagem}`);
    } catch (error) {
        throw getErrorMessage(error, 'Erro ao excluir imagem da quadra');
    }
};