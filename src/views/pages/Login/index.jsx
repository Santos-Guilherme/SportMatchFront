import React, { useState } from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from '../../../api/userModel'; // Certifique-se de que esta função está correta
import { useAuth } from '../../../contexts/AuthContext';

const Login = () => {
    const { login } = useAuth(); // Obtém o método login do contexto
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await authenticateUser(email, senha);

            if (!response || !response.token || !response.id_usuario) {
                throw new Error('Resposta inválida da API.');
            }

            login(
                {
                    id_usuario: response.id_usuario,
                    nome: response.nome,
                    email: response.email,
                    tipo: response.tipo,
                    foto_perfil: response.foto_perfil,
                },
                response.token
            );

            navigate('/');
        } catch (err) {
            console.error('Erro durante o login:', err.message);
            setError('Credenciais inválidas. Tente novamente.');
        }
    };

    return (
        <div className="Login">
            <div className="container">
                <div className="form">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-header">
                            <h1 className="title">Login</h1>
                            <p>
                                Não tem uma conta?{' '}
                                <a href="/registro" className="register-link">
                                    Registrar
                                </a>
                            </p>
                        </div>
                        <div className="input-group">
                            <div className="input-box">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <input
                                    type="password"
                                    placeholder="Senha"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <a href="/esqueceu_senha">Esqueceu a senha?</a>
                            </div>
                            {error && <p className="error-message">{error}</p>}
                        </div>
                        <button type="submit" className="continue-button">
                            Entrar
                        </button>
                    </form>
                </div>
                <div className="form-image">
                    <img
                        src="/assets/images/SportMatch-removebg-preview.png"
                        alt="Logo"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
