import React from 'react';
import './index.scss';

const CardPartida = ({ partida }) => {
    return (
        <div className="card-partida">
            <p><strong>Partida {partida.id_partida}</strong></p>
            <p>Data e Horário: {new Date(partida.data_horario).toLocaleString()}</p>
            <p>Status: {partida.status}</p>
            <p>Máximo de Jogadores: {partida.max_jogadores}</p>
        </div>
    );
};

export default CardPartida;
