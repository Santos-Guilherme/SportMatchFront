// src/components/QuadraCard/index.jsx
import React from 'react';
import './index.scss';

export default function QuadraCard({ id, nomeQuadra, localizacao, tipo, onDelete }) {
    return (
        <div className='QuadraCard'>
            <div className='detalhes'>
                <h3>{nomeQuadra}</h3>
                <div className='informacoes'>
                    <p><strong>Localização:</strong> {localizacao}</p>
                    <p><strong>Tipo:</strong> {tipo}</p>
                </div>
                <button onClick={() => onDelete(id)} className='deletar-btn'>
                    Excluir
                </button>
            </div>
        </div>
    );
}
