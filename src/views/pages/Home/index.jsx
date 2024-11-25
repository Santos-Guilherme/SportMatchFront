import React from 'react';
import './index.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <div className="Home">
            <main>
                {/* Banner de boas-vindas */}
                <section className="home-banner">
                    <div>
                        <h1>O jogo começa aqui. Encontre quadras, agende partidas e divirta-se!</h1>
                        <p>
                            Organize partidas, descubra quadras esportivas e jogue com seus amigos de forma rápida e prática.
                        </p>
                    </div>
                </section>

                {/* Links para partidas e quadras */}
                <section className="home-links">
                    <a href="/partidas" className="home-card">
                        <h2>Partidas</h2>
                        <p>Encontre ou crie partidas esportivas para jogar com amigos.</p>
                    </a>
                    <a href="/quadras" className="home-card">
                        <h2>Quadras</h2>
                        <p>Descubra quadras esportivas disponíveis em sua região.</p>
                    </a>
                </section>

                {/* Destaques de esportes */}
                <section className="secao2">
                    <h2>Diversidade de esportes, uma única plataforma!</h2>
                    <div className="esportes-container">
                        <div className="esporte">
                            <p>Futebol</p>
                        </div>
                        <div className="esporte">
                            <p>Basquete</p>
                        </div>
                        <div className="esporte">
                            <p>Vôlei</p>
                        </div>
                        <div className="esporte">
                            <p>Handebol</p>
                        </div>
                    </div>
                </section>

                {/* Passos para usar o SportsMatch */}
                <section className="secao3">
                    <h2>Como o SportsMatch funciona?</h2>
                    <div>
                        <div>
                            <img src="/assets/images/businessman-talking-phone.jpg" alt="" />
                            <p>Selecione o seu esporte e explore as quadras disponíveis na sua região.</p>
                        </div>
                        <div>
                            <img src="/assets/images/volleyball.jpg" alt="" />
                            <p>Agende sua partida em poucos cliques.</p>
                        </div>
                        <div>
                            <img src="/assets/images/women.jpg" alt="" />
                            <p>Convide amigos ou participe de jogos já organizados.</p>
                        </div>
                    </div>
                </section>

                {/* Chamada para administradores */}
                <section className="secao4">
                    <h2>
                        Transforme sua quadra em um ponto de encontro para atletas e aumente suas reservas com a SportsMatch!
                    </h2>
                    <div className="imagens-container">
                        <div
                            className="imagem-esporte"
                            style={{ backgroundImage: "url(/assets/images/soccer.jpg)" }}
                        />
                        <div
                            className="imagem-esporte"
                            style={{ backgroundImage: "url(/assets/images/basket.jpg)" }}
                        />
                    </div>
                    <div className="button-container">
                        <a href="/cadastro" className="button-cadastrar">Cadastre-se</a>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
