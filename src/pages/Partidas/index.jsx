import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import PartidaCard from '../../components/PartidaCard';
import Footer from '../../components/Footer';
import { buscarPartidasDisponiveis, participarPartida, sairPartida } from '../../Api/PartidasApi';
import './index.scss';

export default function Partidas() {
  const [filtroEsporte, setFiltroEsporte] = useState("");
  const [partidas, setPartidas] = useState([]);

  const handleFiltroEsporte = (esporte) => {
    setFiltroEsporte(esporte);
  };

  const carregarPartidas = async () => {
    try {
      const response = await buscarPartidasDisponiveis(); // Busca as partidas disponíveis
      setPartidas(response);
    } catch (error) {
      console.error("Erro ao carregar partidas:", error);
    }
  };

  useEffect(() => {
    carregarPartidas();
  }, []);

  return (
    <div className="PartidasPage">
      <Header />
      <div className='section-title'>
        <h1>Partidas</h1>
      </div>
      <section className="main-content">
        <section className="filtro">
          <h1>Partidas Disponíveis</h1>
          <div className="filtros-container">
            <button onClick={() => handleFiltroEsporte("")}>Todos</button>
            <button onClick={() => handleFiltroEsporte("Futebol")}>Futebol</button>
            <button onClick={() => handleFiltroEsporte("Basquete")}>Basquete</button>
          </div>
        </section>

        <section className="partidas">
          {partidas
            .filter((partida) => {
              return filtroEsporte ? partida.esporte === filtroEsporte : true;
            })
            .map((partida, index) => (
              <PartidaCard
                key={index}
                partida={partida}
                participarPartida={participarPartida}
                sairPartida={sairPartida}
              />
            ))}
        </section>
      </section>
      <Footer />
    </div>
  );
}
