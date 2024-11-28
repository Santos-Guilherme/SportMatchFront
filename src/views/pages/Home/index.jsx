import React from 'react';
import './index.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <main>
                {/* Banner inicial */}
                <section className="home-banner">
                    <div className="content">
                        <h1>Conectando pessoas, organizando experiências</h1>
                        <p>
                            Descubra o Sportsmatch, uma plataforma criada para transformar a forma como você organiza suas partidas esportivas.
                        </p>
                        <a href="/cadastro" className="cta-button">Cadastre-se e comece agora</a>
                    </div>
                    <div className="image-container">
                        <img src="/assets/images/11345214.png" alt="Esportes em ação" />
                    </div>
                </section>

                {/* Funcionalidades principais */}
                <section className="funcionalidades">
                    <h2>O que você pode fazer no SportsMatch?</h2>
                    <div className="features">
                        {[
                            {
                                img: '/assets/images/create-match.png',
                                title: 'Organizar Partidas',
                                description: 'Crie e gerencie partidas de forma rápida e eficiente.',
                            },
                            {
                                img: '/assets/images/find-court.jpg',
                                title: 'Reservar Quadras',
                                description: 'Encontre e reserve quadras próximas com facilidade.',
                            },
                            {
                                img: '/assets/images/connect-players.jpg',
                                title: 'Conectar Jogadores',
                                description: 'Participe de comunidades esportivas e jogue em grupo.',
                            },
                        ].map((feature, index) => (
                            <div className="feature" key={index}>
                                <img src={feature.img} alt={feature.title} />
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Depoimentos */}
                <section className="depoimentos">
                    <h2>O que nossos usuários dizem</h2>
                    <div className="depoimentos-container">
                        {[
                            {
                                name: 'João Silva',
                                text: 'O Sportsmatch mudou completamente a forma como organizo minhas partidas. Super fácil de usar!',
                            },
                            {
                                name: 'Ana Maria',
                                text: 'Adorei a plataforma! Consegui encontrar quadras excelentes perto de casa.',
                            },
                            {
                                name: 'Carlos Pereira',
                                text: 'Finalmente uma ferramenta prática para gerenciar reservas da minha quadra. Muito bom!',
                            },
                        ].map((depoimento, index) => (
                            <div className="depoimento" key={index}>
                                <p>{`"${depoimento.text}"`}</p>
                                <span>- {depoimento.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Chamada final */}
                <section className="secao-chamada">
                    <h2>Comece sua jornada esportiva com o SportsMatch</h2>
                    <p>
                        Cadastre-se agora e descubra como podemos transformar a forma como você organiza e participa de eventos esportivos.
                    </p>
                    <a href="/cadastro" className="cta-button">Criar Conta</a>
                </section>

                {/* Sobre a Gamp3r */}
                <section className="sobre-nos">
                    <h2>Sobre a Gamp3r</h2>
                    <p>
                        Na Gamp3r, desenvolvemos soluções inovadoras para conectar pessoas e facilitar experiências. Com paixão por tecnologia e esportes, criamos ferramentas que transformam como as pessoas interagem e organizam suas atividades.
                    </p>
                    <div className="about-grid">
                        <div className="about-item">
                            <h3>Missão</h3>
                            <p>
                                Criar ferramentas intuitivas e acessíveis que simplifiquem o dia a dia e conectem pessoas.
                            </p>
                        </div>
                        <div className="about-item">
                            <h3>Equipe</h3>
                            <p>
                                Uma equipe multidisciplinar apaixonada por tecnologia e inovação, focada em entregar o melhor para nossos usuários.
                            </p>
                        </div>
                        <div className="about-item">
                            <h3>Visão</h3>
                            <p>
                                Promover conectividade e organização por meio de soluções tecnológicas de alto impacto.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
