import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUserByCPF, getUserByEmail, registerUser } from '../../../controllers/userController';
import './index.scss';
import axios from 'axios';

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
        aceitaTermos: false,
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: type === 'checkbox' ? checked : value,
        }));
    };

    // Validação de CPF
    const validarCPF = (cpf) => {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

        let soma = 0;
        for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
        let resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.charAt(9))) return false;

        soma = 0;
        for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.charAt(10))) return false;

        return true;
    };

    // Validação de Senha
    const validarSenha = (senha) => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(senha);
    };

    // Validação de E-mail
    const validarEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Consultar CEP
    const consultarCEP = async (cep) => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (response.data.erro) {
                setError('CEP inválido.');
                return;
            }
            setFormData((prevData) => ({
                ...prevData,
                endereco: response.data.logradouro,
                cidade: response.data.localidade,
                estado: response.data.uf,
            }));
        } catch (error) {
            setError('Erro ao buscar CEP.');
        }
    };

    const handleSubmit = async () => {
        setError('');
        setSuccess('');

        if (!validarCPF(formData.cpf)) {
            setError('CPF inválido.');
            return;
        }

        if (!validarEmail(formData.email)) {
            setError('E-mail inválido.');
            return;
        }

        if (!validarSenha(formData.senha)) {
            setError('A senha deve ter pelo menos 8 caracteres, incluindo letras, números e um caractere especial.');
            return;
        }

        if (!formData.aceitaTermos) {
            setError('Você deve aceitar os Termos de Uso e a Política de Privacidade.');
            return;
        }

        if (formData.senha !== formData.confirmarSenha) {
            setError('As senhas não coincidem.');
            return;
        }

        try {
            await registerUser(formData);
            setSuccess('Cadastro realizado com sucesso!');
            navigate('/login');
        } catch (err) {
            setError('Erro ao realizar cadastro.');
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
                        <div className="input-group">
                            <label htmlFor="cep">CEP</label>
                            <input
                                type="text"
                                id="cep"
                                value={formData.cep}
                                onChange={(e) => {
                                    handleChange(e);
                                    if (e.target.value.length === 8) consultarCEP(e.target.value);
                                }}
                                placeholder="Digite seu CEP"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="endereco">Endereço</label>
                            <input
                                type="text"
                                id="endereco"
                                value={formData.endereco}
                                onChange={handleChange}
                                placeholder="Endereço será preenchido automaticamente"
                                readOnly
                            />
                        </div>
                        <div className="input-row">
                            <div className="input-group">
                                <label htmlFor="estado">Estado</label>
                                <input
                                    type="text"
                                    id="estado"
                                    value={formData.estado}
                                    onChange={handleChange}
                                    placeholder="Estado será preenchido automaticamente"
                                    readOnly
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="cidade">Cidade</label>
                                <input
                                    type="text"
                                    id="cidade"
                                    value={formData.cidade}
                                    onChange={handleChange}
                                    placeholder="Cidade será preenchida automaticamente"
                                    readOnly
                                />
                            </div>
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
                        <div className="input-group">
                            <label>
                                <input
                                    type="checkbox"
                                    id="aceitaTermos"
                                    checked={formData.aceitaTermos}
                                    onChange={handleChange}
                                />
                                Aceito os <Link to="/termos">Termos de Uso</Link> e a <Link to="/politica">Política de Privacidade</Link>.
                            </label>
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
                    <Link to="/">
                        <img src="/assets/images/SportMatch-removebg-preview.png" alt="Login" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
