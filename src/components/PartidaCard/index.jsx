// src/components/PartidaCard/index.jsx
import React from "react";
import "./index.scss";

export default function PartidaCard({ partida }) {
  return (
    <div className="PartidaCard">
      <div className="detalhes">
        {/* Imagem do organizador antes das informações */}
        <img
          src={partida.organizadorImagem}
          alt="Organizador"
          className="organizador-imagem"
        />
        <h3>{partida.nome}</h3>
        <div className="informacoes">
          <p className="esporte">
            <img
              src={`/assets/icons/${partida.esporte}.png`}
              alt={partida.esporte}
              className="icone-esporte"
            />
            {partida.esporte}
          </p>
          <p>Máx. Jogadores: {partida.maxJogadores}</p>
          <p>Jogadores Atuais: {partida.jogadoresAtuais}</p>
          <p>Data: {partida.data}</p>
          <p>Hora: {partida.hora}</p>
          <p>Endereço: {partida.endereco}</p>
          <p>Quadra: {partida.quadra}</p>
        </div>
        {/* Botão para participar */}
        <button className="participar-btn">
          Participar da Partida
        </button>
      </div>
    </div>
  );
}
