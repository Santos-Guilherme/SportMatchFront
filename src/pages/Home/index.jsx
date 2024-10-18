import './index.scss';
import Header from "../../components/Header"

export default function Home() {
    return (
        <div className='Home'>
            <header>
                <Header></Header>
            </header>
            <section className='secao1'>
                <div className='texto-secao1'>
                    <div>
                        <h1>O jogo começa aqui. Encontre quadras, agende partidas e divirta-se!</h1>
                        <p>Do futebol ao tênis, seja qual for o seu esporte favorito, a Sportsmatch oferece quadras de qualidade e agendamento rápido, para que você possa focar no que realmente importa: jogar.</p>
                    </div>
                </div>
                <div>
                    <img src='/assets/images/home-section1.png'></img>
                </div>
            </section>
            <section className='secao2'>
                <h2>Diversidade de esportes, uma única plataforma!</h2>
                <div>
                    <div>
                        <p>Futebol</p>
                    </div>
                    <div>
                        <p>Basquete</p>
                    </div>
                    <div>
                        <p>Volêi</p>
                    </div>
                    <div>
                        <p>Handebol</p>
                    </div>
                </div>
            </section>
            <section className='secao3'>
                <h2>Como o SportsMatch funciona?</h2>
                <div>
                    <div>
                        <img src='/assets/images/home-section1.png' alt="" />
                        <p>Selecione o seu esporte e explore as quadras disponíveis na sua região.</p>
                    </div>
                    <div>
                        <img src='/assets/images/home-section1.png' alt="" />
                        <p>Agende sua partida em poucos cliques.</p>
                    </div>
                    <div>
                        <img src='/assets/images/home-section1.png' alt="" />
                        <p>Convide amigos ou participe de jogos já organizados.</p>
                    </div>
                </div>
            </section>
            <section className='secao4'>
            </section>
        </div>
    );
}