import "./index.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Explorar() {
  return (
    <div className="Explorar">
      <header>
        <Header />
      </header>

      <section className="explorar-header">
        <h1>Explore</h1>
        <input type="text" placeholder="Pesquisar por quadras, esportes ou jogadores..." />
      </section>

      <section className="explorar-categorias">
        <button className="categoria ativa">Quadras</button>
        <button className="categoria">Eventos</button>
        <button className="categoria">Jogadores</button>
      </section>

      <section className="explorar-cards">
        <div className="card">
          <img src="/assets/images/quadra1.jpg" alt="Quadra" />
          <div className="card-info">
            <h2>Quadra de Futebol</h2>
            <p>Localização: São Paulo</p>
            <button>Ver Detalhes</button>
          </div>
        </div>
        <div className="card">
          <img src="/assets/images/quadra2.jpg" alt="Quadra" />
          <div className="card-info">
            <h2>Quadra de Basquete</h2>
            <p>Localização: Rio de Janeiro</p>
            <button>Ver Detalhes</button>
          </div>
        </div>
        {/* Outros cards */}
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
