import React, { useEffect, useState } from 'react';
import './index.scss';
import { listQuadras } from '../../../controllers/quadraController';
import CardPartida from '../../components/CardPartida';
import CardQuadra from '../../components/CardQuadra';
import { listPartidas } from '../../../api/partidaModel';
import { useAuth } from '../../../contexts/AuthContext';
import PartidaForm from '../../components/PartidaForm';
import HeaderLogged from '../../components/HeaderLogged';

const Partidas = () => {
    const { user } = useAuth(); // Usuário logado
    const [activeTab, setActiveTab] = useState('partidas'); // Controle da aba ativa
    const [partidas, setPartidas] = useState([]); // Armazena as partidas
    const [quadras, setQuadras] = useState([]); // Armazena as quadras
    const [loading, setLoading] = useState(true); // Controle de carregamento
    const [selectedQuadra, setSelectedQuadra] = useState(null); // Quadra selecionada para criar partida
    const [isModalOpen, setIsModalOpen] = useState(false); // Controle do modal de criação de partida

    const fetchPartidas = async () => {
        setLoading(true);
        try {
            const response = await listPartidas();
            setPartidas(response);
        } catch (error) {
            console.error('Erro ao buscar partidas:', error.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchQuadras = async () => {
        setLoading(true);
        try {
            const response = await listQuadras();
            setQuadras(response);
        } catch (error) {
            console.error('Erro ao buscar quadras:', error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (activeTab === 'partidas') {
            fetchPartidas();
        } else {
            fetchQuadras();
        }
    }, [activeTab]);

    const handleCreatePartida = (quadra) => {
        setSelectedQuadra(quadra);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedQuadra(null);
        setIsModalOpen(false);
    };

    return (
        <div className="partidas">
            <HeaderLogged></HeaderLogged>
            <div className="tabs">
                <button
                    className={`tab ${activeTab === 'partidas' ? 'active' : ''}`}
                    onClick={() => setActiveTab('partidas')}
                >
                    Partidas
                </button>
                <button
                    className={`tab ${activeTab === 'quadras' ? 'active' : ''}`}
                    onClick={() => setActiveTab('quadras')}
                >
                    Quadras
                </button>
            </div>

            <div className="tab-content">
                {loading ? (
                    <p>Carregando...</p>
                ) : activeTab === 'partidas' ? (
                    <div>
                        <h2>Lista de Partidas</h2>
                        {partidas.length > 0 ? (
                            partidas.map((partida) => (
                                <CardPartida key={partida.id_partida} partida={partida} />
                            ))
                        ) : (
                            <p>Nenhuma partida encontrada.</p>
                        )}
                    </div>
                ) : (
                    <div>
                        <h2>Lista de Quadras</h2>
                        {quadras.length > 0 ? (
                            quadras.map((quadra) => (
                                <CardQuadra
                                    key={quadra.id_quadra}
                                    quadra={quadra}
                                    onCreatePartida={handleCreatePartida}
                                />
                            ))
                        ) : (
                            <p>Nenhuma quadra encontrada.</p>
                        )}
                    </div>
                )}
            </div>

            {isModalOpen && selectedQuadra && (
                <PartidaForm
                    quadra={selectedQuadra}
                    onClose={closeModal}
                    userId={user.id_usuario}
                />
            )}
        </div>
    );
};

export default Partidas;
