import React, { useState, useEffect } from 'react';
import './index.scss';
import { useAuth } from '../../../contexts/AuthContext';
import { updateUserFields, updateUserPhoto, getUserById } from '../../../controllers/userController';
import { API_ADDRESS } from '../../../api/constants';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Profile() {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        nome: '',
        data_nascimento: '',
        email: '',
        celular: '',
        endereco: '',
        cep: '',
        cidade: '',
        estado: '',
        foto_perfil: '/default-avatar.png',
    });
    const [isLoading, setIsLoading] = useState(true);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        if (!user || !user.id_usuario) {
            console.error('Usuário não encontrado no contexto.');
            return;
        }

        const fetchUserData = async () => {
            try {
                const userData = await getUserById(user.id_usuario);
                setFormData({
                    nome: userData.nome,
                    data_nascimento: new Date(userData.data_nascimento).toLocaleDateString(),
                    email: userData.email,
                    celular: userData.celular,
                    endereco: userData.endereco,
                    cep: userData.cep,
                    cidade: userData.cidade,
                    estado: userData.estado,
                    foto_perfil: userData.foto_perfil || '/default-avatar.png',
                });
                setIsLoading(false);
            } catch (error) {
                console.error('Erro ao buscar informações do usuário:', error.message);
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleFieldUpdate = async (e) => {
        e.preventDefault();
        if (!user || !user.id_usuario) {
            alert('Usuário não encontrado para atualização.');
            return;
        }

        try {
            await updateUserFields(user.id_usuario, {
                celular: formData.celular,
                endereco: formData.endereco,
                cep: formData.cep,
            });
            alert('Informações atualizadas com sucesso!');
        } catch (error) {
            console.error('Erro ao atualizar informações:', error.message);
            alert('Erro ao atualizar informações.');
        }
    };

    const handlePhotoUpdate = async (e) => {
        e.preventDefault();
        if (!user || !user.id_usuario) {
            alert('Usuário não encontrado para atualização.');
            return;
        }

        if (!selectedFile) {
            alert('Selecione uma foto para atualizar.');
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('foto_perfil', selectedFile);

        try {
            await updateUserPhoto(user.id_usuario, formDataToSend);
            alert('Foto de perfil atualizada com sucesso!');
            updateUserContext(); // Atualiza o contexto de autenticação
        } catch (error) {
            console.error('Erro ao atualizar foto de perfil:', error.message);
            alert('Erro ao atualizar foto de perfil.');
        }
    };

    if (isLoading) {
        return <p>Carregando informações do perfil...</p>;
    }

    if (!user || !user.id_usuario) {
        return <p>Erro: Usuário não encontrado.</p>;
    }

    return (
        <div className="Profile">
            <div className="profile-container">
                <div className="profile-image">
                    <img src={`${API_ADDRESS}/${formData.foto_perfil}`} alt="Perfil" />
                    <form onSubmit={handlePhotoUpdate}>
                        <label htmlFor="file-upload" className="file-upload-label">
                            Alterar Foto
                            <input
                                type="file"
                                id="file-upload"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </label>
                        <button type="submit" className="submit-btn">
                            Salvar Foto
                        </button>
                    </form>
                </div>
                <form className="profile-form" onSubmit={handleFieldUpdate}>
                    <div className="form-group">
                        <label>Nome:</label>
                        <input
                            type="text"
                            name="nome"
                            value={formData.nome}
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label>Data de Nascimento:</label>
                        <input
                            type="text"
                            name="data_nascimento"
                            value={formData.data_nascimento}
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label>Celular:</label>
                        <input
                            type="text"
                            name="celular"
                            value={formData.celular}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Endereço:</label>
                        <input
                            type="text"
                            name="endereco"
                            value={formData.endereco}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>CEP:</label>
                        <input
                            type="text"
                            name="cep"
                            value={formData.cep}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Cidade:</label>
                        <input
                            type="text"
                            name="cidade"
                            value={formData.cidade}
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label>Estado:</label>
                        <input
                            type="text"
                            name="estado"
                            value={formData.estado}
                            disabled
                        />
                    </div>
                    <button type="submit" className="submit-btn">
                        Salvar Alterações
                    </button>
                </form>
            </div>
        </div>
    );
}
