import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

const Header = () => {
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout(); // Remove o usuário do contexto e do localStorage
        window.location.href = '/login'; // Redireciona para a página de login
    };

    const toggleMenu = () => {
        const menu = document.querySelector(".mobile-menu");
        menu.classList.toggle("open");
    };

    return (
        <header className="Header">
            <div className="container logo">
                <Link to="/">
                    <img 
                        src="/assets/images/SportMatchalt2-removebg-preview.png" 
                        alt="Logo da SportsMatch" 
                    />
                </Link>
            </div>
            <nav className="container links">
                <Link to="/explorar">Explorar</Link>
                <Link to="/partidas">Partidas</Link>
                <Link to="/quadras">Quadra</Link>
                <Link to="/ajuda">Ajuda</Link>
                <Link to="/sobre">Sobre</Link>
            </nav>
            <div className="container blogin blogindesktop">
                {user ? (
                    <div className="user-info">
                        <img
                            src={user.foto_perfil || '/default-avatar.png'}
                            alt="Avatar"
                            className="user-avatar"
                        />
                        <span>{user.nome}</span>
                        <button onClick={handleLogout} className="logout-button">
                            Sair
                        </button>
                    </div>
                ) : (
                    <span>
                        <Link to="/login">Entrar</Link>
                    </span>
                )}
            </div>
            <div className="mobile-menu-icon">
                <button onClick={toggleMenu}>
                    <img src="/assets/images/menu.png" alt="Ícone de menu" />
                </button>
            </div>
            <div className="mobile-menu">
                <ul>
                    <li><Link to="/explorar">Explorar</Link></li>
                    <li><Link to="/partidas">Partidas</Link></li>
                    <li><Link to="/quadra">Quadra</Link></li>
                    <li><Link to="/ajuda">Ajuda</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                </ul>
                <div className="blogin">
                    {user ? (
                        <div className="user-info">
                            <img
                                src={user.foto_perfil || '/default-avatar.png'}
                                alt="Avatar"
                                className="user-avatar"
                            />
                            <span>{user.nome}</span>
                            <button onClick={handleLogout} className="logout-button">
                                Sair
                            </button>
                        </div>
                    ) : (
                        <span>
                            <Link to="/login">Entrar</Link>
                        </span>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
