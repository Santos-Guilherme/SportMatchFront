import { Link } from 'react-router-dom';
import './index.scss';

export default function Footer() {
    return (
        <div className='Footer'>
            <div className='secao1-footer'>
                <div className='colunas-footer'>
                    <div className='coluna-partidas'>
                        <h3>Encontre Partidas</h3>
                        <ul>
                            <li>Criar Partida</li>
                            <li>Alugar Quadra</li>
                            <li>Achar Partida</li>
                        </ul>
                    </div>
                    <div className='coluna-anunciantes'>
                        <h3>Encontre Partidas</h3>
                        <ul>
                            <li>Criar Partida</li>
                            <li>Alugar Quadra</li>
                            <li>Achar Partida</li>
                        </ul>
                    </div>
                </div>
                <div className='Logo'>
                    <img src="/assets/images/SportMatchalt2-removebg-preview.png" alt="" />
                </div>
            </div>
            <div className='secao2-footer'>
                <div className='container-links-footer'>
                    <a>Termos de uso</a>
                    <a>Política de Privacidade</a>
                </div>
            </div>
            <div className='grupo-footer'>
                <div className='Logo-grupo'>
                    <img src="/assets/images/SportMatchalt2-removebg-preview.png" alt="" />
                </div>
                <div className='copyright-text'>
                    <p>Copyright 2024 Grupo GAMP3R. Todos os direitos reservados</p>
                </div>
            </div>
        </div>
    );
}