// src/components/QuadraCadastro/index.jsx
import React, { useState } from 'react';
import './index.scss';

export default function QuadraCadastro({ isOpen, onClose, updateParent }) {
    const [nome, setNome] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [tipo, setTipo] = useState('');

    const handleSave = () => {
        if (nome && localizacao && tipo) {
            const newQuadra = {
                id: Date.now(), // gerando um ID simples
                nome,
                localizacao,
                tipo,
            };
            updateParent(prevState => [...prevState, newQuadra]);
            onClose();
        } else {
            alert('Preencha todos os campos!');
        }
    };

    if (!isOpen) return null;

    return (
        <div className='QuadraCadastro'>
            <div className='modal'>
                <h2>Cadastrar Nova Quadra</h2>
                <input
                    type="text"
                    placeholder="Nome da Quadra"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Localização"
                    value={localizacao}
                    onChange={(e) => setLocalizacao(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Tipo de Quadra"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                />
                <button onClick={handleSave}>Salvar</button>
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
}
