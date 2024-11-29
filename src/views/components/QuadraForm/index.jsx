import React, { useState, useEffect } from 'react';
import './index.scss';

const QuadraForm = ({ onSubmit, initialValues, onCancel, onUploadImage }) => {
    const [formData, setFormData] = useState({
        id_quadra: null,
        nome: '',
        cep: '',
        endereco: '',
        cidade: '',
        estado: '',
        descricao: '',
        modalidades: '',
    });
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (initialValues) {
            setFormData({
                ...initialValues,
                id_quadra: initialValues.id_quadra || null,
            });
        }
    }, [initialValues]);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onSubmit(formData);

        if (formData.id_quadra && images.length > 0) {
            for (const image of images) {
                await onUploadImage(formData.id_quadra, image);
            }
        }
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
            <label>
                Imagens da Quadra (máximo 3):
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                />
            </label>
            <div className="form-actions">
                <button type="submit">Salvar</button>
                {onCancel && <button type="button" onClick={onCancel}>Cancelar</button>}
            </div>
        </form>
    );
};

export default QuadraForm;
