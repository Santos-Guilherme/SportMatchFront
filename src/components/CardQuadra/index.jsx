import React from 'react';
import './index.scss';

function CardQuadra({ imagem, nome, localizacao, preco }) {
    return (
        <div className="card-quadra">
            <img src={imagem} alt={`Imagem da ${nome}`} />
            <div className="info-quadra">
                <h2>{nome}</h2>
                <p>Localização: {localizacao}</p>
                <p className="preco">R$ {preco} / hora</p>
                <button className="botao-alugar">Alugar</button>
            </div>
        </div>
    );
}

export default CardQuadra;
