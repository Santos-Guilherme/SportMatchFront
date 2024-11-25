import React from 'react';
import './index.scss';

const AdminCardQuadra = ({ quadra, onEdit, onDelete }) => {
    return (
        <div className="AdminCardQuadra">
            <h3>{quadra.nome}</h3>
            <p><strong>Endereço:</strong> {quadra.endereco}, {quadra.cidade} - {quadra.estado}</p>
            <p><strong>Modalidades:</strong> {quadra.modalidades}</p>
            <p><strong>Descrição:</strong> {quadra.descricao || 'N/A'}</p>
            <div className="card-actions">
                <button onClick={() => onEdit(quadra)}>Editar</button>
                <button onClick={() => onDelete(quadra.id_quadra)}>Excluir</button>
            </div>
        </div>
    );
};

export default AdminCardQuadra;
