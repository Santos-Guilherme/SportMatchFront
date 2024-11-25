import React from 'react';
import './index.scss';

const CardQuadra = ({ quadra, onCreatePartida }) => {
    return (
        <div className="card-quadra">
            <h3>{quadra.nome}</h3>
            <p>{quadra.endereco}, {quadra.cidade} - {quadra.estado}</p>
            <p><strong>Modalidades:</strong> {quadra.modalidades}</p>
            {quadra.descricao && <p>{quadra.descricao}</p>}
            <button onClick={() => onCreatePartida(quadra)}>Criar Partida</button>
        </div>
    );
};

export default CardQuadra;
