import React, { useState, useEffect } from 'react';
import './index.scss';
import {
    createQuadra,
    deleteQuadra,
    listQuadrasByAdmin,
    updateQuadra,
} from '../../../controllers/quadraController.jsx';
import QuadraForm from '../../components/QuadraForm/index.jsx';
import AdminCardQuadra from '../../components/AdminCardQuadra/index.jsx';
import { useAuth } from '../../../contexts/AuthContext.jsx';

const Quadra = () => {
    const { user, token } = useAuth(); // Obtém o usuário logado e o token do contexto
    const [quadras, setQuadras] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [editingQuadra, setEditingQuadra] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // Controle do modal

    const fetchQuadras = async () => {
        if (!user || !user.id_usuario) {
            console.error('Usuário ou ID do administrador está indefinido.');
            return;
        }

        setIsLoading(true);
        try {
            const response = await listQuadrasByAdmin(user.id_usuario, token); // Busca quadras do admin logado
            setQuadras(response);
        } catch (error) {
            console.error('Erro ao buscar quadras:', error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCreate = async (quadra) => {
        try {
            quadra.id_administrador = user.id_usuario; // Adiciona o ID do administrador
            await createQuadra(quadra, token);
            fetchQuadras(); // Atualiza a lista após criar
            setIsModalOpen(false); // Fecha o modal
        } catch (error) {
            console.error('Erro ao criar quadra:', error.message);
        }
    };

    const handleUpdate = async (quadra) => {
        try {
            quadra.id_administrador = user.id_usuario;
            console.log('Quadra para atualizar:', quadra); // Verifique o conteúdo do objeto
            if (!quadra.id_quadra) {
                console.error('ID da quadra está indefinido');
                return;
            }
            await updateQuadra(quadra.id_quadra, quadra, token);
            fetchQuadras(); // Atualiza a lista após editar
            setEditingQuadra(null);
            setIsModalOpen(false); // Fecha o modal
        } catch (error) {
            console.error('Erro ao atualizar quadra:', error.message);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteQuadra(id, user.id_usuario, token); // Passa o ID do administrador
            fetchQuadras(); // Atualiza a lista após deletar
        } catch (error) {
            console.error('Erro ao deletar quadra:', error.message);
        }
    };

    const handleEdit = (quadra) => {
        console.log('Quadra selecionada para edição:', quadra); // Verifique se o ID está presente
        setEditingQuadra(quadra);
        setIsModalOpen(true); // Abre o modal para editar
    };

    const handleCloseModal = () => {
        setEditingQuadra(null);
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (user && user.id_usuario) {
            fetchQuadras();
        }
    }, [user]); // Atualiza ao detectar mudança no usuário logado

    return (
        <div className="quadras">
            <div className='buttonContent'>
            <button className="add-button" onClick={() => setIsModalOpen(true)}>
                Adicionar Quadra
            </button>
            </div>
            

            <dialog open={isModalOpen} className="quadra-modal">
                <QuadraForm
                    initialValues={editingQuadra}
                    onSubmit={editingQuadra ? handleUpdate : handleCreate}
                    onCancel={handleCloseModal}
                />
            </dialog>

            {isLoading ? (
                <p>Carregando quadras...</p>
            ) : (
                <div className="quadra-list">
                    {quadras.length > 0 ? (
                        quadras.map((quadra) => (
                            <AdminCardQuadra
                                key={quadra.id_quadra}
                                quadra={quadra}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                            />
                        ))
                    ) : (
                        <p>Nenhuma quadra encontrada.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Quadra;
