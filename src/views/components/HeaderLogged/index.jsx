import React, { useState } from 'react';
import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

const HeaderLogged = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <header className="HeaderLogged">
            <div className="logo-container">
                <Link to="/">
                    <img src="/assets/images/SportMatchalt2-removebg-preview.png" alt="Logo SportsMatch" />
                </Link>
            </div>
            <nav className="links">
                <Link to="/partidas">Partidas</Link>
                <Link to="/quadras">Quadras</Link>
                <Link to="/ajuda">Ajuda</Link>
                <Link to="/sobre">Sobre</Link>
            </nav>
            <div className="profile-container">
                <div className="profile" onClick={() => setMenuOpen(!menuOpen)}>
                    <img src={'/default-avatar.png'} alt="Perfil" className="profile-avatar" />
                </div>
                {menuOpen && (
                    <div className="profile-menu">
                        <Link to="/minhas-partidas">Minhas Partidas</Link>
                        <Link to="/convites">Convites</Link>
                        <Link to="/configuracoes">Configurações</Link>
                        <button onClick={handleLogout}>Sair</button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default HeaderLogged;
