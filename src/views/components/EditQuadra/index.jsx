import React, { useEffect, useState } from 'react';
import './index.scss';
import {
    updateQuadra,
    deleteQuadraImage,
    addQuadraImage,
    listQuadraImages,
} from '../../../controllers/quadraController';
import { useAuth } from '../../../contexts/AuthContext';
import { API_ADDRESS } from '../../../api/constants'; // Importando o endereço base da API

const EditQuadra = ({ quadra, onClose }) => {
    const { user } = useAuth();
    const [quadraData, setQuadraData] = useState(quadra);
    const [images, setImages] = useState([]);
    const [newImage, setNewImage] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await listQuadraImages(quadra.id_quadra);
                setImages(response);
            } catch (error) {
                console.error('Erro ao carregar imagens:', error.message);
            }
        };
        fetchImages();
    }, [quadra.id_quadra]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setQuadraData({ ...quadraData, [name]: value });
    };

    const handleImageChange = (e) => {
        setNewImage(e.target.files[0]);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateQuadra(quadra.id_quadra, quadraData);
            alert('Quadra atualizada com sucesso!');
            onClose();
        } catch (error) {
            console.error('Erro ao atualizar quadra:', error.message);
            alert('Erro ao atualizar quadra.');
        }
    };

    const handleAddImage = async () => {
        if (!newImage) {
            alert('Selecione uma imagem para adicionar.');
            return;
        }

        const formData = new FormData();
        formData.append('id_quadra', quadra.id_quadra);
        formData.append('imagem', newImage);

        try {
            await addQuadraImage(quadra.id_quadra, formData);
            const updatedImages = await listQuadraImages(quadra.id_quadra);
            setImages(updatedImages);
            setNewImage(null);
            alert('Imagem adicionada com sucesso!');
        } catch (error) {
            console.error('Erro ao adicionar imagem:', error.message);
            alert('Erro ao adicionar imagem.');
        }
    };

    const handleDeleteImage = async (id_imagem) => {
        try {
            await deleteQuadraImage(id_imagem);
            const updatedImages = images.filter((img) => img.id_imagem !== id_imagem);
            setImages(updatedImages);
            alert('Imagem excluída com sucesso!');
        } catch (error) {
            console.error('Erro ao excluir imagem:', error.message);
            alert('Erro ao excluir imagem.');
        }
    };

    return (
        <div className="edit-quadra">
            <h1>Editar Quadra</h1>
            <form onSubmit={handleUpdate} className="quadra-form">
                <label>
                    Nome:
                    <input
                        type="text"
                        name="nome"
                        value={quadraData.nome}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    CEP:
                    <input
                        type="text"
                        name="cep"
                        value={quadraData.cep}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Endereço:
                    <input
                        type="text"
                        name="endereco"
                        value={quadraData.endereco}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Cidade:
                    <input
                        type="text"
                        name="cidade"
                        value={quadraData.cidade}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Estado:
                    <input
                        type="text"
                        name="estado"
                        value={quadraData.estado}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Descrição:
                    <textarea
                        name="descricao"
                        value={quadraData.descricao}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Modalidades:
                    <input
                        type="text"
                        name="modalidades"
                        value={quadraData.modalidades}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Salvar Alterações</button>
            </form>

            <div className="image-management">
                <h2>Gerenciar Imagens</h2>
                <div className="current-images">
                    {images.length > 0 ? (
                        images.map((image) => (
                            <div key={image.id_imagem} className="image-item">
                                <img
                                    src={`${API_ADDRESS}/${image.url_imagem}`}
                                    alt="Quadra"
                                />
                                <button onClick={() => handleDeleteImage(image.id_imagem)}>
                                    Excluir
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>Nenhuma imagem disponível</p>
                    )}
                </div>
                {images.length < 3 && (
                    <div className="add-image">
                        <input type="file" onChange={handleImageChange} />
                        <button onClick={handleAddImage}>Adicionar Imagem</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EditQuadra;
