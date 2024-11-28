import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import './index.scss';

const Header = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prevState) => !prevState); // Alterna o estado do menu mobile
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <header className="Header">
            <div className="logo-container">
                <Link to="/">
                    <img src="/assets/images/SportMatchalt2-removebg-preview.png" alt="Logo SportsMatch" />
                </Link>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                <div className={`line ${menuOpen ? 'open' : ''}`}></div>
                <div className={`line ${menuOpen ? 'open' : ''}`}></div>
                <div className={`line ${menuOpen ? 'open' : ''}`}></div>
            </div>

            <nav className={`links ${menuOpen ? 'mobile-menu open' : ''}`}>
                <Link to="/partidas">Partidas</Link>
                <Link to="/quadras">Quadras</Link>
                <Link to="/ajuda">Ajuda</Link>
                <Link to="/sobre">Sobre</Link>
                {!user ? (
                    <div className="auth-actions">
                        <Link to="/login" className="auth-button">Entrar</Link>
                        <Link to="/cadastro" className="auth-button">Cadastrar</Link>
                    </div>
                ) : (
                    <div className="profile-container">
                        <div className="profile" onClick={() => setProfileMenuOpen(!profileMenuOpen)}>
                            <img src={user.foto_perfil || '/default-avatar.png'} alt="Perfil" className="profile-avatar" />
                        </div>
                        {profileMenuOpen && (
                            <div className="profile-menu">
                                <Link to="/minhas-partidas">Minhas Partidas</Link>
                                <Link to="/convites">Convites</Link>
                                <Link to="/configuracoes">Configurações</Link>
                                <button onClick={handleLogout}>Sair</button>
                            </div>
                        )}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
