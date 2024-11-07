import { Link } from 'react-router-dom';
import './index.scss';

export default function Header() {
    return(
        <div className='Header'>
            <div className='container logo'>
                <Link to='/'><img src="/assets/images/SportMatchalt2-removebg-preview.png" alt="Logo da SportsMatch" /></Link>
            </div>
            <div className='container links'>
                <Link to='/explorar'>Explorar</Link>
                <Link to='/partida'>Partidas</Link>
                <Link to='/quadra'>Quadra</Link>
                <Link to='/ajuda'>Ajuda</Link>
                <Link to='/sobre'>Sobre</Link>
            </div>
            <div className='container blogin'>
                <span>
                    <Link to="/login">Entrar</Link>
                </span>
            </div>
        </div>
    );
}