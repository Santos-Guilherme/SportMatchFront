import React, { useEffect, useState } from 'react';
import './index.scss';
import { useAuth } from '../../../contexts/AuthContext';
import { listPartidasParticipadasByUser } from '../../../api/partidaModel';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MinhasPartidas = () => {
    const { user } = useAuth(); // Obtém o usuário logado do contexto
    const [partidasPendentes, setPartidasPendentes] = useState([]);
    const [partidasCriadas, setPartidasCriadas] = useState([]);
    const [outrasPartidas, setOutrasPartidas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPartidas = async () => {
            try {
                setIsLoading(true);
                const response = await listPartidasParticipadasByUser(user.id_usuario);

                // Filtrar partidas em categorias
                const pendentes = response.filter((partida) => partida.status === 'pendente');
                const criadas = response.filter((partida) => partida.id_criador === user.id_usuario && partida.status !== 'pendente');
                const outras = response.filter(
                    (partida) =>
                        partida.status !== 'pendente' &&
                        partida.id_criador !== user.id_usuario
                );

                setPartidasPendentes(pendentes);
                setPartidasCriadas(criadas);
                setOutrasPartidas(outras);
            } catch (error) {
                console.error('Erro ao buscar partidas participadas:', error.message);
            } finally {
                setIsLoading(false);
            }
        };

        if (user?.id_usuario) {
            fetchPartidas();
        }
    }, [user]);

    return (
        <div className="minhas-partidas">
            <Header></Header>
            <header className="header">
                <h1>Minhas Partidas</h1>
            </header>

            {isLoading ? (
                <div className="loading">
                    <p>Carregando suas partidas...</p>
                </div>
            ) : (
                <>
                    <section className="partidas-pendentes">
                        <h2>Partidas Pendentes</h2>
                        {partidasPendentes.length === 0 ? (
                            <p>Nenhuma partida pendente no momento.</p>
                        ) : (
                            <div className="partidas-list">
                                {partidasPendentes.map((partida) => (
                                    <div key={partida.id_partida} className="partida-card">
                                        <div className="partida-info">
                                            <h3>{partida.quadra_nome}</h3>
                                            <p>Data: {new Date(partida.data_horario).toLocaleString()}</p>
                                            <p>Status: {partida.status}</p>
                                        </div>
                                        <div className="partida-actions">
                                            <button className="details-btn">Ver Detalhes</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>

                    <section className="partidas-criadas">
                        <h2>Partidas Criadas por Você</h2>
                        {partidasCriadas.length === 0 ? (
                            <p>Você ainda não criou nenhuma partida.</p>
                        ) : (
                            <div className="partidas-list">
                                {partidasCriadas.map((partida) => (
                                    <div key={partida.id_partida} className="partida-card">
                                        <div className="partida-info">
                                            <h3>{partida.quadra_nome}</h3>
                                            <p>Data: {new Date(partida.data_horario).toLocaleString()}</p>
                                            <p>Status: {partida.status}</p>
                                        </div>
                                        <div className="partida-actions">
                                            <button className="details-btn">Ver Detalhes</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>

                    <section className="outras-partidas">
                        <h2>Outras Partidas</h2>
                        {outrasPartidas.length === 0 ? (
                            <p>Nenhuma outra partida encontrada.</p>
                        ) : (
                            <div className="partidas-list">
                                {outrasPartidas.map((partida) => (
                                    <div key={partida.id_partida} className="partida-card">
                                        <div className="partida-info">
                                            <h3>{partida.quadra_nome}</h3>
                                            <p>Data: {new Date(partida.data_horario).toLocaleString()}</p>
                                            <p>Status: {partida.status}</p>
                                        </div>
                                        <div className="partida-actions">
                                            <button className="details-btn">Ver Detalhes</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                </>
            )}
            <Footer></Footer>
        </div>
    );
};

export default MinhasPartidas;
