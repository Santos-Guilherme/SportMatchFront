import React, { useEffect, useState } from 'react';
import './index.scss';
import {
    getConvitesByJogador,
    updateConviteStatus,
} from '../../../controllers/conviteController';
import { addParticipante } from '../../../controllers/participanteController';
import { useAuth } from '../../../contexts/AuthContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Convites = () => {
    const { user } = useAuth(); // Obter informações do usuário logado
    const [convites, setConvites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch convites do jogador logado
    const fetchConvites = async () => {
        try {
            setIsLoading(true);
            const response = await getConvitesByJogador(user.id_usuario);
            setConvites(response);
        } catch (error) {
            console.error('Erro ao buscar convites:', error.message);
        } finally {
            setIsLoading(false);
        }
    };

    // Aceitar convite
    const handleAceitarConvite = async (convite) => {
        try {
            await updateConviteStatus(convite.id_convite, 'aceito');
            await addParticipante({
                id_partida: convite.id_partida,
                id_usuario: user.id_usuario,
                status: 'ativo',
            });
            fetchConvites();
        } catch (error) {
            console.error('Erro ao aceitar convite:', error.message);
        }
    };

    // Recusar convite
    const handleRecusarConvite = async (id_convite) => {
        try {
            await updateConviteStatus(id_convite, 'recusado');
            fetchConvites();
        } catch (error) {
            console.error('Erro ao recusar convite:', error.message);
        }
    };

    useEffect(() => {
        if (user?.id_usuario) {
            fetchConvites();
        }
    }, [user]);

    return (
        <>
            <Header />
            <div className="Convites">
                <h1>Seus Convites</h1>
                {isLoading ? (
                    <p>Carregando convites...</p>
                ) : convites.length === 0 ? (
                    <p>Você não possui convites no momento.</p>
                ) : (
                    <div className="convites-list">
                        {convites.map((convite) => (
                            <div key={convite.id_convite} className="convite-card">
                                <p>
                                    <strong>Partida:</strong>{' '}
                                    {convite.nome_quadra || 'Sem nome'}
                                </p>
                                <p>
                                    <strong>Mensagem:</strong> {convite.mensagem}
                                </p>
                                <p>
                                    <strong>Status:</strong> {convite.status}
                                </p>
                                {convite.status === 'pendente' && (
                                    <div className="convite-actions">
                                        <button
                                            className="aceitar-btn"
                                            onClick={() => handleAceitarConvite(convite)}
                                        >
                                            Aceitar
                                        </button>
                                        <button
                                            className="recusar-btn"
                                            onClick={() => handleRecusarConvite(convite.id_convite)}
                                        >
                                            Recusar
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Convites;
