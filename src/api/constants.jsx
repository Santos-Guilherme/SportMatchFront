import axios from 'axios';

export const API_ADDRESS = 'http://localhost:5000';

// Configuração de instância Axios
export const apiClient = axios.create({
    baseURL: API_ADDRESS,
});

// Função para configurar o token dinamicamente
export const setAuthToken = (token) => {
    if (token) {
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete apiClient.defaults.headers.common['Authorization'];
    }
};
