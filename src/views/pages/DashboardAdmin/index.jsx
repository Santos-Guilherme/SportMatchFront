import React, { useEffect, useState } from 'react';
import './index.scss';
import { useAuth } from '../../../contexts/AuthContext';
import PartidasPorQuadraChart from '../../components/PartidasPorQuadraChart';
import { listPartidasByAdmin, updatePartidaStatus } from '../../../controllers/partidaController';
import { listQuadrasByAdmin } from '../../../controllers/quadraController';
import Quadras from '../Quadra';

const DashboardAdmin = () => {
    const { user, logout } = useAuth();
    const [partidas, setPartidas] = useState([]);
    const [quadras, setQuadras] = useState([]);
    const [activeSection, setActiveSection] = useState('visaoGeral'); // Gerencia a seção ativa

    useEffect(() => {
        if (user?.id_usuario) {
            fetchPartidas(user.id_usuario);
            fetchQuadras(user.id_usuario);
        }
    }, [user]);

    const fetchPartidas = async (idAdministrador) => {
        try {
            const response = await listPartidasByAdmin(idAdministrador);
            setPartidas(response);
        } catch (error) {
            console.error('Erro ao buscar partidas do administrador:', error.message);
        }
    };

    const fetchQuadras = async (idAdministrador) => {
        try {
            const response = await listQuadrasByAdmin(idAdministrador);
            setQuadras(response);
        } catch (error) {
            console.error('Erro ao buscar quadras do administrador:', error.message);
        }
    };

    const handleUpdateStatus = async (idPartida, status) => {
        try {
            await updatePartidaStatus(idPartida, status);
            setPartidas((prev) =>
                prev.map((partida) =>
                    partida.id_partida === idPartida ? { ...partida, status } : partida
                )
            );
        } catch (error) {
            console.error('Erro ao atualizar status da partida:', error.message);
        }
    };

    const handleLogout = () => {
        logout();
        window.location.href = '/login';
    };

    return (
        <div className="dashboard-admin">
            <aside className="sidebar">
                <div className="brand">
                    <i className="bx bxs-smile"></i>
                    <span>SportsMatch Admin</span>
                </div>
                <ul className="menu">
                    <li className={activeSection === 'visaoGeral' ? 'active' : ''}>
                        <button onClick={() => setActiveSection('visaoGeral')}>
                            <i className="bx bxs-dashboard"></i>
                            <span>Visão Geral</span>
                        </button>
                    </li>
                    <li className={activeSection === 'minhasQuadras' ? 'active' : ''}>
                        <button onClick={() => setActiveSection('minhasQuadras')}>
                            <i className="bx bxs-buildings"></i>
                            <span>Minhas Quadras</span>
                        </button>
                    </li>
                    <li className={activeSection === 'partidasSolicitadas' ? 'active' : ''}>
                        <button onClick={() => setActiveSection('partidasSolicitadas')}>
                            <i className="bx bxs-calendar"></i>
                            <span>Partidas Solicitadas</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={handleLogout} className="logout">
                            <i className="bx bxs-log-out-circle"></i>
                            <span>Sair</span>
                        </button>
                    </li>
                </ul>
            </aside>

            <section className="main-content">
                <header className="navbar">
                    <h1>Bem-vindo, {user?.nome}</h1>
                    <div className="navbar-actions">
                        <input type="search" placeholder="Buscar..." />
                        <div className="profile">
                            <img src="/assets/images/user-placeholder.png" alt="Foto do Usuário" />
                            <div className="dropdown">
                                <button>
                                    <i className="bx bx-dots-vertical-rounded"></i>
                                </button>
                                <div className="dropdown-menu">
                                    <a href="/configuracoes">Configurações</a>
                                    <a href="/notificacoes">Notificações</a>
                                    <a onClick={handleLogout}>Sair</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main>
                    {activeSection === 'visaoGeral' && (
                        <div>
                            <div className="head-title">
                                <h2>Resumo</h2>
                            </div>
                            <div className="cards">
                                <div className="card">
                                    <i className="bx bxs-calendar-check"></i>
                                    <div>
                                        <h3>{partidas.filter((p) => p.status === 'pendente').length}</h3>
                                        <p>Partidas Pendentes</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <i className="bx bxs-check-circle"></i>
                                    <div>
                                        <h3>{partidas.length}</h3>
                                        <p>Total de Partidas</p>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard-section">
                                <div className="head-title">
                                    <h2>Gráfico de Partidas por Quadra</h2>
                                </div>
                                <div className="chart-container">
                                    <PartidasPorQuadraChart partidas={partidas} quadras={quadras} />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeSection === 'minhasQuadras' && <Quadras />} {/* Minhas Quadras */}

                    {activeSection === 'partidasSolicitadas' && (
                        <div className="table-data">
                            <div className="table">
                                <div className="head">
                                    <h3>Partidas Solicitadas</h3>
                                </div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Quadra</th>
                                            <th>Data</th>
                                            <th>Status</th>
                                            <th>Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {partidas.map((partida) => (
                                            <tr key={partida.id_partida}>
                                                <td>{partida.quadra_nome}</td>
                                                <td>{new Date(partida.data_horario).toLocaleString()}</td>
                                                <td>{partida.status}</td>
                                                <td>
                                                    {partida.status === 'pendente' && (
                                                        <>
                                                            <button
                                                                onClick={() =>
                                                                    handleUpdateStatus(partida.id_partida, 'agendada')
                                                                }
                                                                className="accept-btn"
                                                            >
                                                                Aceitar
                                                            </button>
                                                            <button
                                                                onClick={() =>
                                                                    handleUpdateStatus(partida.id_partida, 'cancelada')
                                                                }
                                                                className="reject-btn"
                                                            >
                                                                Rejeitar
                                                            </button>
                                                        </>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </main>
            </section>
        </div>
    );
};

export default DashboardAdmin;
