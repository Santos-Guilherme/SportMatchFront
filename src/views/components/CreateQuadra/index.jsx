import React, { useState } from 'react';
import './index.scss';
import { createQuadra } from '../../../controllers/quadraController';
import { useAuth } from '../../../contexts/AuthContext';

const CreateQuadra = () => {
    const { user } = useAuth();
    const [quadraData, setQuadraData] = useState({
        nome: '',
        cep: '',
        endereco: '',
        cidade: '',
        estado: '',
        descricao: '',
        modalidades: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setQuadraData({ ...quadraData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createQuadra({ ...quadraData, id_administrador: user.id_usuario });
            alert('Quadra criada com sucesso!');
            setQuadraData({
                nome: '',
                cep: '',
                endereco: '',
                cidade: '',
                estado: '',
                descricao: '',
                modalidades: '',
            });
        } catch (error) {
            console.error('Erro ao criar quadra:', error.message);
            alert('Erro ao criar quadra.');
        }
    };

    return (
        <div className="create-quadra">
            <h1>Criar Quadra</h1>
            <form onSubmit={handleSubmit} className="quadra-form">
                <label>
                    Nome:
                    <input
                        type="text"
                        name="nome"
                        value={quadraData.nome}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    CEP:
                    <input
                        type="text"
                        name="cep"
                        value={quadraData.cep}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Endereço:
                    <input
                        type="text"
                        name="endereco"
                        value={quadraData.endereco}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Cidade:
                    <input
                        type="text"
                        name="cidade"
                        value={quadraData.cidade}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Estado:
                    <input
                        type="text"
                        name="estado"
                        value={quadraData.estado}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Descrição:
                    <textarea
                        name="descricao"
                        value={quadraData.descricao}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Modalidades:
                    <input
                        type="text"
                        name="modalidades"
                        value={quadraData.modalidades}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Criar Quadra</button>
            </form>
        </div>
    );
};

export default CreateQuadra;
