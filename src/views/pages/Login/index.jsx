import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { authenticateUser } from '../../../api/userModel';
import './index.scss';

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

            if(response.tipo == "administrador"){
                //navigate('/dashboard');
                navigate('/');
            }
            
            else{
                navigate('/');
            }
            
        } catch (err) {
            console.error('Erro durante o login:', err.message);
            setError('Credenciais inválidas. Tente novamente.');
        }
    };

    return (
        <div className="Login">
            <div className="container">
                <div className="form">
                    <h1>Entrar</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Digite seu e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="senha">Senha</label>
                            <input
                                type="password"
                                id="senha"
                                placeholder="Digite sua senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <a href="/esqueceu_senha">Esqueceu a senha?</a>
                        </div>
                        {error && <p className="error">{error}</p>}
                        <button type="submit" className="submit-btn">
                            Entrar
                        </button>
                    </form>
                    <p>
                        Não tem uma conta?{' '}
                        <a href="/cadastro" className="register-link">
                            Cadastre-se
                        </a>
                    </p>
                </div>
                <div className="form-image">
                    <Link to='/'><img
                        src="/assets/images/SportMatch-removebg-preview.png"
                        alt="Login"
                    />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
