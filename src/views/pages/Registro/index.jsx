import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { registerUser } from '../../../controllers/userController'; // Função de registro de usuário

export default function Registro() {
    const [formData, setFormData] = useState({
        usuario: '',
        senha: '',
        confirmarSenha: '',
        tipoUsuario: '',
        nome: '',
        cpf: '',
        dataNascimento: '',
        estado: '',
        cidade: '',
        email: '',
        endereco: '',
        esportesFavoritos: '',
        fotoPerfil: '',
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

        const {
            usuario,
            senha,
            confirmarSenha,
            tipoUsuario,
            nome,
            cpf,
            dataNascimento,
            estado,
            cidade,
            email,
            endereco,
            esportesFavoritos,
            fotoPerfil,
        } = formData;

        if (senha !== confirmarSenha) {
            setError('As senhas não coincidem.');
            return;
        }

        try {
            const userPayload = {
                nome,
                email,
                senha,
                data_nascimento: dataNascimento,
                cpf,
                celular: null, // Ajuste conforme necessário
                cep: null, // Ajuste conforme necessário
                endereco,
                cidade,
                estado,
                foto_perfil: fotoPerfil || null,
                tipo: tipoUsuario, // 'jogador' ou 'administrador'
            };

            await registerUser(userPayload); // Envia os dados para registro
            setSuccess('Cadastro realizado com sucesso!');
            console.log('Cadastro bem-sucedido:', userPayload);

            // Redireciona para a página de login após o registro
            navigate('/login');
        } catch (err) {
            setError('Erro ao registrar. Verifique os dados informados.');
            console.error('Erro ao registrar usuário:', err.message);
        }
    };

    return (
        <div className="Registro">
            <div className="container">
                <div className="form-image">
                    <img src="/assets/images/SportMatch-removebg-preview.png" alt="Imagem de Registro" />
                </div>
                <div className="form">
                    <form className="registro-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-header">
                            <h1 className="title">Cadastre-se</h1>
                            <Link to="/login" className="login-button">Entrar</Link>
                        </div>
                        <div className="input-group">
                            {[
                                { id: 'usuario', type: 'text', label: 'Usuário', placeholder: 'Digite seu usuário' },
                                { id: 'senha', type: 'password', label: 'Senha', placeholder: 'Digite sua senha' },
                                { id: 'confirmarSenha', type: 'password', label: 'Confirmar Senha', placeholder: 'Confirme sua senha' },
                                { id: 'nome', type: 'text', label: 'Nome Completo', placeholder: 'Digite seu nome completo' },
                                { id: 'cpf', type: 'text', label: 'CPF', placeholder: 'Digite seu CPF' },
                                { id: 'dataNascimento', type: 'date', label: 'Data de Nascimento' },
                                { id: 'estado', type: 'text', label: 'Estado', placeholder: 'Digite seu estado' },
                                { id: 'cidade', type: 'text', label: 'Cidade', placeholder: 'Digite sua cidade' },
                                { id: 'email', type: 'email', label: 'E-mail', placeholder: 'Digite seu e-mail' },
                                { id: 'endereco', type: 'text', label: 'Endereço', placeholder: 'Digite seu endereço' },
                                { id: 'esportesFavoritos', type: 'text', label: 'Esportes Favoritos', placeholder: 'Ex.: Futebol, Basquete' },
                                { id: 'fotoPerfil', type: 'text', label: 'Foto de Perfil (URL)', placeholder: 'Cole o link da imagem' },
                            ].map((input) => (
                                <div key={input.id} className="input-box">
                                    <label htmlFor={input.id}>{input.label}</label>
                                    <input
                                        id={input.id}
                                        type={input.type}
                                        placeholder={input.placeholder}
                                        value={formData[input.id]}
                                        onChange={handleChange}
                                        required={input.id !== 'fotoPerfil'} // Foto de perfil não é obrigatória
                                    />
                                </div>
                            ))}
                            <div className="input-box">
                                <label htmlFor="tipoUsuario">Tipo de Usuário</label>
                                <select
                                    id="tipoUsuario"
                                    value={formData.tipoUsuario}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Selecione o tipo de usuário</option>
                                    <option value="jogador">Jogador</option>
                                    <option value="administrador">Administrador de Quadra</option>
                                </select>
                            </div>
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        {success && <p className="success-message">{success}</p>}
                        <button
                            type="button"
                            className="continue-button"
                            onClick={handleSubmit}
                        >
                            Registrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
