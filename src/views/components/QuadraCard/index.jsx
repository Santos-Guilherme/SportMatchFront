import React from "react";
import "./index.scss";

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
