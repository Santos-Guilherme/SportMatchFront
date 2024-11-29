import React from "react";
import "./index.scss";

export default function QuadraCard({ quadra, abrirModal, adicionarImagem, excluirImagem }) {
    const [imagens, setImagens] = useState(quadra.imagens || []); // Inicializa com as imagens da quadra

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            try {
                const novaImagem = await adicionarImagem(quadra.id_quadra, file);
                setImagens([...imagens, novaImagem]);
            } catch (err) {
                alert("Erro ao adicionar imagem: " + err.message);
            }
        }
    };

    const handleDeleteImage = async (id_imagem) => {
        try {
            await excluirImagem(id_imagem);
            setImagens(imagens.filter(img => img.id_imagem !== id_imagem));
        } catch (err) {
            alert("Erro ao excluir imagem: " + err.message);
        }
    };

    return (
        <div className="QuadraCard">
            <div className="quadra-galeria">
                {imagens.length > 0 ? (
                    imagens.map((img) => (
                        <div key={img.id_imagem} className="imagem-container">
                            <img src={img.url_imagem} alt={`Imagem ${quadra.nome}`} className="quadra-imagem" />
                            <button
                                className="excluir-imagem-btn"
                                onClick={() => handleDeleteImage(img.id_imagem)}
                            >
                                Excluir
                            </button>
                        </div>
                    ))
                ) : (
                    <img
                        src="/assets/images/default-court.png"
                        alt={quadra.nome}
                        className="quadra-imagem"
                    />
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
                <div className="upload-container">
                    <label className="upload-label" htmlFor={`upload-${quadra.id_quadra}`}>
                        Adicionar Imagem
                    </label>
                    <input
                        id={`upload-${quadra.id_quadra}`}
                        type="file"
                        accept="image/*"
                        className="upload-input"
                        onChange={handleFileUpload}
                    />
                </div>
            </div>
        </div>
    );
}

/*
export default function QuadraCard({ quadra, abrirModal }) {
    return (
        <div className="QuadraCard">
            <img
                src={quadra.imagem || "/assets/images/default-court.png"}
                alt={quadra.nome}
                className="quadra-imagem"
            />
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
*/