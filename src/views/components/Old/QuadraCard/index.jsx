import React from 'react';
import './index.scss';

function QuadraCard({ imagem, nome, localizacao, preco, descricao, tipo }) {
    return (
        <div className="QuadraCard">
            <img src={imagem} alt={`Imagem da ${nome}`} className="imagem-quadra" />
            <div className="info-quadra">
                <h2>{nome}</h2>
                <p className="tipo-quadra">{tipo}</p>
                <p className="descricao-quadra">{descricao}</p>
                <p className="localizacao-quadra">Localização: {localizacao}</p>
                <p className="preco-quadra">R$ {preco} / hora</p>
                <button className="botao-alugar">Alugar</button>
            </div>
        </div>
    );
}

export default QuadraCard;