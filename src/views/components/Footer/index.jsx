import { Link } from 'react-router-dom';
import './index.scss';

export default function Footer() {
    return (
        <div className='Footer'>
            <div className='secao1-footer'>
                <div className='colunas-footer'>
                    <div className='coluna-partidas'>
                        <h3>Contato</h3>
                        <ul>
                            <li><Link>Email</Link></li>
                            <li><Link>Contato para parcerias</Link></li>
                            <li><Link>Instagram</Link></li>
                        </ul>
                    </div>
                    <div className='coluna-anunciantes'>
                        <h3>Informações</h3>
                        <ul>
                            <li><Link>Quadras parceiras</Link></li>
                            <li><Link>Dúvidas frequentes</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='Logo'>
                    <img src="/assets/images/SportMatchalt2-removebg-preview.png" alt="" />
                </div>
            </div>
            <div className='secao2-footer'>
                <div className='container-links-footer'>
                    <Link to='/termos'>Termos de uso</Link>
                    <Link to='/politica'>Política de Privacidade</Link>
                </div>
                <div className='grupo-footer'>
                    <div className='Logo-grupo'>
                        <img src="/assets/images/grupoGAMP3R.png" alt="" />
                    </div>
                    <div className='copyright-text'>
                        <p>Copyright 2024 Grupo GAMP3R. Todos os direitos reservados</p>
                    </div>
                </div>
            </div>
        </div>
    );
}