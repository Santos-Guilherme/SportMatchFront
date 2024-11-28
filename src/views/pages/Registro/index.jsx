import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../../controllers/userController';
import './index.scss';

export default function Registro() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: '',
        data_nascimento: '',
        cpf: '',
        celular: '',
        cep: '',
        endereco: '',
        cidade: '',
        estado: '',
        tipo: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = async () => {
        setError('');
        setSuccess('');

        if (formData.senha !== formData.confirmarSenha) {
            setError('As senhas não coincidem.');
            return;
        }

        try {
            await registerUser(formData);
            setSuccess('Cadastro realizado com sucesso!');
            navigate('/login');
        } catch (err) {
            setError('Erro ao registrar. Verifique os dados.');
        }
    };

    return (
        <div className="Registro">
            <div className="container">
                <div className="form">
                    <h1>Cadastre-se</h1>
                    <p>Preencha os campos abaixo para criar sua conta</p>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="input-group">
                            <label htmlFor="nome">Nome Completo</label>
                            <input
                                type="text"
                                id="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                placeholder="Digite seu nome completo"
                                required
                            />
                        </div>
                        <div className="input-row">
                            <div className="input-group">
                                <label htmlFor="cpf">CPF</label>
                                <input
                                    type="text"
                                    id="cpf"
                                    value={formData.cpf}
                                    onChange={handleChange}
                                    placeholder="Digite seu CPF"
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="data_nascimento">Data de Nascimento</label>
                                <input
                                    type="date"
                                    id="data_nascimento"
                                    value={formData.data_nascimento}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="input-row">
                            <div className="input-group">
                                <label htmlFor="estado">Estado</label>
                                <input
                                    type="text"
                                    id="estado"
                                    value={formData.estado}
                                    onChange={handleChange}
                                    placeholder="Digite seu estado"
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="cidade">Cidade</label>
                                <input
                                    type="text"
                                    id="cidade"
                                    value={formData.cidade}
                                    onChange={handleChange}
                                    placeholder="Digite sua cidade"
                                    required
                                />
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="endereco">Endereço</label>
                            <input
                                type="text"
                                id="endereco"
                                value={formData.endereco}
                                onChange={handleChange}
                                placeholder="Digite seu endereço"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="celular">Celular</label>
                            <input
                                type="text"
                                id="celular"
                                value={formData.celular}
                                onChange={handleChange}
                                placeholder="Digite seu celular (opcional)"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Digite seu e-mail"
                                required
                            />
                        </div>
                        <div className="input-row">
                            <div className="input-group">
                                <label htmlFor="senha">Senha</label>
                                <input
                                    type="password"
                                    id="senha"
                                    value={formData.senha}
                                    onChange={handleChange}
                                    placeholder="Digite sua senha"
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="confirmarSenha">Confirmar Senha</label>
                                <input
                                    type="password"
                                    id="confirmarSenha"
                                    value={formData.confirmarSenha}
                                    onChange={handleChange}
                                    placeholder="Confirme sua senha"
                                    required
                                />
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="tipo">Tipo de Usuário</label>
                            <select
                                id="tipo"
                                value={formData.tipo}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Selecione...</option>
                                <option value="jogador">Jogador</option>
                                <option value="administrador">Administrador</option>
                            </select>
                        </div>
                        {error && <p className="error">{error}</p>}
                        {success && <p className="success">{success}</p>}
                        <button type="button" className="submit-btn" onClick={handleSubmit}>
                            Cadastrar
                        </button>
                    </form>
                    <p>
                        Já tem uma conta? <Link to="/login">Entre aqui</Link>
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
}
