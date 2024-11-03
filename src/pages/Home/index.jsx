import "./index.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


export default function Home() {
  return (
    <div className="Home">
      <header>
        <Header></Header>
      </header>
      <section className="secao1">
        <div className="texto-secao1">
          <div>
            <h1>
              O jogo começa aqui. Encontre quadras, agende partidas e
              divirta-se!
            </h1>
            <p>
              Do futebol ao tênis, seja qual for o seu esporte favorito, a
              Sportsmatch oferece quadras de qualidade e agendamento rápido,
              para que você possa focar no que realmente importa: jogar.
            </p>
          </div>
        </div>
        <div>
          <img src="/assets/images/home-section1.png"></img>
        </div>
      </section>
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
            <p>Volei</p>
          </div>
          <div className="esporte">
            <p>Handebol</p>
          </div>
        </div>
      </section>
      <section className="secao3">
        <h2>Como o SportsMatch funciona?</h2>
        <div>
          <div>
            <img src="/assets/images/businessman-talking-phone.jpg" alt="" />
            <p>
              Selecione o seu esporte e explore as quadras disponíveis na sua
              região.
            </p>
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
      <section className="secao4">
        <h2>
          Transforme sua quadra em um ponto de encontro para <br /> atletas e aumente
          suas reservas com a Sportsmatch!
        </h2>
        <div className="imagens-container">
          <div
            className="imagem-esporte"
            style={{ backgroundImage: "url(/assets/images/soccer.jpg)" }}
          >
          </div>
          <div
            className="imagem-esporte"
            style={{ backgroundImage: "url(/assets/images/basket.jpg)" }} // trocar a imagem e ajustar o tam
          >
          </div>
        </div>
        <div className="button-container">
          <a href="" className="button-cadastrar">
            Cadastre-se
          </a>
        </div>
      </section>
      <section className="secao5">
        <div className="imagem-quadras">
          <div
            className="imagem-quadra"
            style={{ backgroundImage: "url(/assets/images/image.png)" }}
          >
          </div>
          <div className="imagem-quadras">
            <div
              className="imagem-quadra"
              style={{ backgroundImage: "url(/assets/images/quadra1.png)" }}
            >
            </div>
          </div>
        </div>
      </section>
      <section className="secao6">
        <div className="container-secao6">
          <h2>
            Entre em quadra e divirta-se!
          </h2>
        </div>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
