import React, { useState, useEffect } from 'react';
import './index.scss';
import { listQuadrasByAdmin, deleteQuadra } from '../../../controllers/quadraController.jsx';
import { useAuth } from '../../../contexts/AuthContext.jsx';
import AdminCardQuadra from '../../components/AdminCardQuadra';
import CreateQuadra from '../../components/CreateQuadra';
import EditQuadra from '../../components/EditQuadra';

const Quadra = () => {
    const { user, token } = useAuth();
    const [quadras, setQuadras] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [editingQuadra, setEditingQuadra] = useState(null);

    // Fetch quadras do administrador
    const fetchQuadras = async () => {
        if (!user?.id_usuario) return;
        setIsLoading(true);
        try {
            const response = await listQuadrasByAdmin(user.id_usuario, token);
            setQuadras(response);
        } catch (error) {
            console.error('Erro ao buscar quadras:', error.message);
        } finally {
            setIsLoading(false);
        }
    };

    // Excluir quadra
    const handleDelete = async (id) => {
        try {
            await deleteQuadra(id, user.id_usuario, token);
            fetchQuadras();
        } catch (error) {
            console.error('Erro ao deletar quadra:', error.message);
        }
    };

    // Abrir o modal de edição
    const handleEdit = (quadra) => {
        setEditingQuadra(quadra);
    };

    // Fechar os modais de criação e edição
    const handleCloseModals = () => {
        setIsCreateModalOpen(false);
        setEditingQuadra(null);
    };

    // Atualizar a lista de quadras após criar/editar
    const handleRefreshQuadras = () => {
        fetchQuadras();
        handleCloseModals();
    };

    useEffect(() => {
        if (user?.id_usuario) fetchQuadras();
    }, [user]);

    return (
        <div className="quadras">
            <div className="button-content">
                <button
                    className="add-button"
                    onClick={() => setIsCreateModalOpen(true)}
                >
                    Adicionar Quadra
                </button>
            </div>

            {isLoading ? (
                <p>Carregando quadras...</p>
            ) : (
                <div className="quadra-list">
                    {quadras.length > 0 ? (
                        (quadras.map((quadra) => (
                            <AdminCardQuadra
                                key={quadra.id_quadra}
                                quadra={quadra}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                            />
                        )))
                    ) : (
                        <p>Nenhuma quadra encontrada.</p>
                    )}
                </div>
            )}

            {/* Modal de criação de quadra */}
            {isCreateModalOpen && (
                <CreateQuadra
                    onClose={handleCloseModals}
                    onRefresh={handleRefreshQuadras}
                />
            )}

            {/* Modal de edição de quadra */}
            {editingQuadra && (
                <EditQuadra
                    quadra={editingQuadra}
                    onClose={handleCloseModals}
                    onRefresh={handleRefreshQuadras}
                />
            )}
        </div>
    );
};

export default Quadra;
