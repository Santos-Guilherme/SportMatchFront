import { Link } from 'react-router-dom';
import './index.scss';

export default function Header() {
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
                <Link to="/partida">Partidas</Link>
                <Link to="/quadra">Quadra</Link>
                <Link to="/ajuda">Ajuda</Link>
                <Link to="/sobre">Sobre</Link>
            </nav>
            <div className="container blogin blogindesktop">
                <span>
                    <Link to="/login">Entrar</Link>
                </span>
            </div>
            <div className="mobile-menu-icon">
                <button onClick={() => toggleMenu()}>
                    <img 
                        src="/assets/images/menu.png" 
                        alt="Ícone de menu" 
                    />
                </button>
            </div>
            <div className="mobile-menu">
                <ul>
                    <li><Link to="/explorar">Explorar</Link></li>
                    <li><Link to="/partida">Partidas</Link></li>
                    <li><Link to="/quadra">Quadra</Link></li>
                    <li><Link to="/ajuda">Ajuda</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                </ul>
                <div className="blogin">
                    <span>
                        <Link to="/login">Entrar</Link>
                    </span>
                </div>
            </div>
        </header>
    );
}

function toggleMenu() {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("open");
}
