import React, { useEffect, useState } from 'react';
import './index.scss';
import { API_ADDRESS } from '../../../api/constants'; // Certifique-se de usar o endereço base correto
import { listQuadraImages } from '../../../controllers/quadraController';

const AdminCardQuadra = ({ quadra, onEdit, onDelete }) => {
    const [imagens, setImagens] = useState([]);

    // Fetch imagens da quadra
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await listQuadraImages(quadra.id_quadra);
                setImagens(response);
            } catch (error) {
                console.error(`Erro ao buscar imagens para a quadra ${quadra.nome}:`, error.message);
            }
        };

        fetchImages();
    }, [quadra.id_quadra]);

    return (
        <div className="AdminCardQuadra">
            <div className="quadra-info">
                <h3>{quadra.nome}</h3>
                <p><strong>Endereço:</strong> {quadra.endereco}, {quadra.cidade} - {quadra.estado}</p>
                <p><strong>Modalidades:</strong> {quadra.modalidades}</p>
                <p><strong>Descrição:</strong> {quadra.descricao || 'N/A'}</p>
            </div>
            <div className="quadra-images">
                {imagens.length > 0 ? (
                    imagens.map((imagem) => (
                        <img
                            key={imagem.id_imagem}
                            src={`${API_ADDRESS}/${imagem.url_imagem}`}
                            alt={`Imagem da quadra ${quadra.nome}`}
                            className="quadra-image"
                        />
                    ))
                ) : (
                    <p className="no-images">Nenhuma imagem disponível</p>
                )}
            </div>
            <div className="card-actions">
                <button onClick={() => onEdit(quadra)}>Editar</button>
                <button onClick={() => onDelete(quadra.id_quadra)}>Excluir</button>
            </div>
        </div>
    );
};

export default AdminCardQuadra;
