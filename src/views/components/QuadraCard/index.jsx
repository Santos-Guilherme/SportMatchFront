import React, { useEffect, useState } from "react";
import "./index.scss";
import { listQuadraImages } from "../../../controllers/quadraController";
import { API_ADDRESS } from "../../../api/constants";

export default function QuadraCard({ quadra, abrirModal }) {
    const [imagens, setImagens] = useState([]);
    const [imagemAtualIndex, setImagemAtualIndex] = useState(0);

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

    // Funções para navegar pelas imagens
    const proximaImagem = () => {
        setImagemAtualIndex((prevIndex) =>
            prevIndex + 1 < imagens.length ? prevIndex + 1 : 0
        );
    };

    const imagemAnterior = () => {
        setImagemAtualIndex((prevIndex) =>
            prevIndex - 1 >= 0 ? prevIndex - 1 : imagens.length - 1
        );
    };

    return (
        <div className="QuadraCard">
            <div className="imagem-container">
                {imagens.length > 0 ? (
                    <img
                        src={`${API_ADDRESS}/${imagens[imagemAtualIndex]?.url_imagem}`}
                        alt={`Imagem da quadra ${quadra.nome}`}
                        className="quadra-imagem"
                    />
                ) : (
                    <img
                        src="/assets/images/default-court.png"
                        alt="Quadra padrão"
                        className="quadra-imagem"
                    />
                )}
                {imagens.length > 1 && (
                    <>
                        <button className="seta-esquerda" onClick={imagemAnterior}>
                            &#10094;
                        </button>
                        <button className="seta-direita" onClick={proximaImagem}>
                            &#10095;
                        </button>
                    </>
                )}
            </div>
            <div className="quadra-detalhes">
                <h3>{quadra.nome}</h3>
                <p>{quadra.endereco}</p>
                <p>{quadra.cidade}, {quadra.estado}</p>
                <p>Modalidades: {quadra.modalidades}</p>
                <button className="criar-partida-btn" onClick={() => abrirModal(quadra)}>
                    Criar Partida
                </button>
            </div>
        </div>
    );
}
