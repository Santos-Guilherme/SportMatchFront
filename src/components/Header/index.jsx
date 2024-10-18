import { Link } from 'react-router-dom';
import './index.scss';

export default function Header() {
    return(
        <div className='Header'>
            <div className='container logo'>
                <img src="/assets/images/SportMatchalt2-removebg-preview.png" alt="Logo da SportsMatch" />
            </div>
            <div className='container links'>
                <a>Explorar</a>
                <a>Anunciar</a>
                <a>Sobre</a>
                <a>Ajuda</a>
            </div>
            <div className='container blogin'>
                <span>
                    <Link to="/login">Entrar</Link>
                </span>
            </div>
        </div>
    );
}