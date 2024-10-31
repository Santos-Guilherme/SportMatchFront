import "./index.scss";
import Header from "../../components/Header";

export default function Ajuda() {
    return (
        <div className="Ajuda">
            <header>
                <Header></Header>
            </header>
            <section className="secao1">
                <div className="texto-secao1">
                    <div>
                        <h2>
                            Como Podemos Ajudar?
                        </h2>
                    </div>
                </div>
            </section>
            <section className="secao2">
                <div className="texto-secao2">
                    <h2>Não quer pesquisar?</h2>
                    <p>procure aqui sua duvida ou problema</p>
                </div>
                <div className="butao">
                    <a href="" className="butao-anuncia">Quem anuncia</a>
                    <a href="" className="butao-procura">Quem procura</a>
                </div>
            </section>

        </div>
    );
}