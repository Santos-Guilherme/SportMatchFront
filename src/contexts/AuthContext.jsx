import React, { createContext, useState, useContext, useEffect } from 'react';
import { setAuthToken } from '../api/constants';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('token');

        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
            } catch (err) {
                console.error('Erro ao parsear usuário armazenado:', err);
                localStorage.removeItem('user'); // Limpa valores inválidos
            }
        }

        if (storedToken) {
            setToken(storedToken);
            setAuthToken(storedToken); // Configura o token no Axios
        }
    }, []);

    const login = (userData, authToken) => {
        if (!userData || !authToken) {
            console.error('Dados de login inválidos.');
            return;
        }

        setUser(userData);
        setToken(authToken);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('token', authToken);
        setAuthToken(authToken); // Configura o token no Axios
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setAuthToken(null); // Remove o token do Axios
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
