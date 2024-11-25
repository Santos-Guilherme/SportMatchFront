import React, { useState, useEffect } from 'react';
import './index.scss';

const QuadraForm = ({ onSubmit, initialValues, onCancel }) => {
    const [formData, setFormData] = useState({
        id_quadra: null, // Inclui o ID para edição
        nome: '',
        cep: '',
        endereco: '',
        cidade: '',
        estado: '',
        descricao: '',
        modalidades: '',
    });

    // Atualiza os valores iniciais ao carregar o componente
    useEffect(() => {
        if (initialValues) {
            setFormData({
                id_quadra: initialValues.id_quadra || null,
                nome: initialValues.nome || '',
                cep: initialValues.cep || '',
                endereco: initialValues.endereco || '',
                cidade: initialValues.cidade || '',
                estado: initialValues.estado || '',
                descricao: initialValues.descricao || '',
                modalidades: initialValues.modalidades || '',
            });
        }
    }, [initialValues]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData); // Envia os dados ao componente pai
    };

    return (
        <form className="quadra-form" onSubmit={handleSubmit}>
            <label>
                Nome da Quadra:
                <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                CEP:
                <input
                    type="text"
                    name="cep"
                    value={formData.cep}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Endereço:
                <input
                    type="text"
                    name="endereco"
                    value={formData.endereco}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Cidade:
                <input
                    type="text"
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Estado:
                <input
                    type="text"
                    name="estado"
                    value={formData.estado}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Descrição:
                <textarea
                    name="descricao"
                    value={formData.descricao}
                    onChange={handleChange}
                />
            </label>
            <label>
                Modalidades:
                <input
                    type="text"
                    name="modalidades"
                    value={formData.modalidades}
                    onChange={handleChange}
                    required
                />
            </label>
            <div className="form-actions">
                <button type="submit">Salvar</button>
                {onCancel && (
                    <button type="button" onClick={onCancel}>
                        Cancelar
                    </button>
                )}
            </div>
        </form>
    );
};

export default QuadraForm;
