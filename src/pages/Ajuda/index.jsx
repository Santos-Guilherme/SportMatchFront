import React, { useState } from 'react';
import Header from '../../components/Header';
import './index.scss';
import Footer from '../../components/Footer';

export default function Ajuda() {
    const [activeCategory, setActiveCategory] = useState('Jogadores');
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleAnswer = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    const faqData = {
        Jogadores: [
            { question: "Como posso me registrar no Sportsmatch?", answer: "Acesse a página de cadastro, forneça suas informações básicas, e siga os passos para verificação." },
            { question: "Posso participar de mais de uma partida ao mesmo tempo?", answer: "Sim, é possível participar de várias partidas simultaneamente, desde que os horários não coincidam." },
            { question: "É possível avaliar jogadores?", answer: "Sim, após uma partida você pode avaliar os outros jogadores com base em seu desempenho e atitude." },
            { question: "Como recebo convites de outros jogadores?", answer: "Você receberá uma notificação no app quando outro jogador enviar um convite para partida." }
        ],
        Partidas: [
            { question: "Como agendar uma partida?", answer: "Vá até a seção de partidas, escolha uma quadra e um horário disponível, e finalize o agendamento." },
            { question: "Posso cancelar uma partida?", answer: "Sim, você pode cancelar uma partida, mas verifique as políticas de cancelamento do administrador da quadra." },
            { question: "O que acontece se a quadra for cancelada?", answer: "Todos os jogadores serão notificados, e você pode buscar outra partida para o mesmo horário." },
            { question: "Posso convidar jogadores específicos para uma partida?", answer: "Sim, ao criar uma partida, você pode selecionar jogadores específicos para convidá-los." }
        ],
        Quadras: [
            { question: "Como encontrar quadras disponíveis?", answer: "Use o filtro na página de quadras para buscar por localização, esporte e disponibilidade." },
            { question: "Posso salvar uma quadra como favorita?", answer: "Sim, clique no ícone de coração na página da quadra para salvá-la em seus favoritos." },
            { question: "Há avaliações para cada quadra?", answer: "Sim, os jogadores podem avaliar as quadras após as partidas, ajudando outros usuários na escolha." },
            { question: "Como visualizar as quadras mais próximas?", answer: "Habilite a localização em seu dispositivo para que o sistema mostre as quadras mais próximas." }
        ],
        Administradores: [
            { question: "Como gerenciar partidas na minha quadra?", answer: "Na seção de administração, você pode aceitar, recusar, editar ou cancelar partidas." },
            { question: "Posso definir horários específicos para minha quadra?", answer: "Sim, é possível ajustar os horários e duração de cada reserva na seção de horários." },
            { question: "Posso ver o histórico de partidas na minha quadra?", answer: "Sim, o histórico completo de partidas realizadas está disponível na seção de relatórios." },
            { question: "Como bloquear horários para manutenção?", answer: "Você pode bloquear horários específicos no calendário para garantir a manutenção necessária." }
        ]
    };

    const renderButtons = () => (
        <div className="category-buttons">
            {Object.keys(faqData).map((category, index) => (
                <button
                    key={index}
                    onClick={() => setActiveCategory(category)}
                    className={activeCategory === category ? 'active' : ''}
                >
                    {category}
                </button>
            ))}
        </div>
    );

    return (
        <div className="Ajuda">
            <header>
                <Header />
            </header>
            <section className="secao1">
                <div className="texto-secao1">
                    <h2>Como Podemos Ajudar?</h2>
                </div>
            </section>
            <section className="faq-secao">
                {renderButtons()}
                <div className="faq-categoria">
                    <h3>{activeCategory}</h3>
                    {faqData[activeCategory].map((faq, index) => (
                        <div key={index} className="faq-item">
                            <button className="faq-question" onClick={() => toggleAnswer(index)}>
                                {faq.question}
                            </button>
                            {activeQuestion === index && (
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
