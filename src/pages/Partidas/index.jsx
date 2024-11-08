// src/pages/Partidas/index.jsx
import React, { useState } from 'react';
import Header from '../../components/Header';
import PartidaCard from '../../components/PartidaCard';
import Footer from '../../components/Footer';
import './index.scss';

export default function Partidas() {
  const [filtroEsporte, setFiltroEsporte] = useState("");

  const partidas = [
    {
      nome: "Partida Futebol",
      esporte: "Futebol",
      maxJogadores: 10,
      jogadoresAtuais: 5,
      data: "2024-12-01",
      hora: "15:00",
      endereco: "Rua das Palmeiras, 123",
      quadra: "Quadra 1",
      organizadorImagem: "/assets/images/user1.png",
    },
    {
      nome: "Partida Basquete",
      esporte: "Basquete",
      maxJogadores: 6,
      jogadoresAtuais: 3,
      data: "2024-12-02",
      hora: "18:00",
      endereco: "Avenida Central, 45",
      quadra: "Quadra 2",
      organizadorImagem: "/assets/images/user2.png",
    },
  ];

  const handleFiltroEsporte = (esporte) => {
    setFiltroEsporte(esporte);
  };

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
              <PartidaCard key={index} partida={partida} />
            ))}
        </section>
      </section>
      <Footer />
    </div>
  );
}
