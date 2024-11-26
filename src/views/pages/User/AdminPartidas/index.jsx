import React, { useState, useEffect } from 'react';
import './index.scss';
import { useAuth } from '../../../../contexts/AuthContext';
import { listPartidasByAdmin, updatePartidaStatus } from '../../../../controllers/partidaController';

const AdminPartidas = () => {
    const { user } = useAuth();
    const [partidas, setPartidas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (user) {
            fetchPartidas();
        }
    }, [user]);

    const fetchPartidas = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await listPartidasByAdmin(user.id_usuario);
            setPartidas(response);
        } catch (err) {
            console.error('Erro ao buscar partidas:', err.message);
            setError('Erro ao carregar as partidas. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    const handleStatusChange = async (id_partida, status) => {
        try {
            await updatePartidaStatus(id_partida, status);
            fetchPartidas(); // Atualiza a lista após a mudança
        } catch (err) {
            console.error('Erro ao atualizar status:', err.message);
            setError('Erro ao atualizar o status da partida.');
        }
    };

    return (
        <div className="admin-partidas">
            <h1>Gerenciamento de Partidas</h1>
            {error && <p className="error">{error}</p>}
            {loading ? (
                <p>Carregando partidas...</p>
            ) : partidas.length > 0 ? (
                <div className="partida-list">
                    {partidas.map((partida) => (
                        <div key={partida.id_partida} className="partida-card">
                            <h3>{partida.quadra_nome}</h3>
                            <p>Criador: {partida.criador_nome}</p>
                            <p>Data e Horário: {new Date(partida.data_horario).toLocaleString()}</p>
                            <p>Máximo de Jogadores: {partida.max_jogadores}</p>
                            <p>Status: {partida.status}</p>
                            <div className="actions">
                                {partida.status === 'pendente' && (
                                    <>
                                        <button
                                            onClick={() => handleStatusChange(partida.id_partida, 'agendada')}
                                            className="accept-button"
                                        >
                                            Aceitar
                                        </button>
                                        <button
                                            onClick={() => handleStatusChange(partida.id_partida, 'cancelada')}
                                            className="reject-button"
                                        >
                                            Recusar
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Nenhuma partida encontrada.</p>
            )}
        </div>
    );
};

export default AdminPartidas;
