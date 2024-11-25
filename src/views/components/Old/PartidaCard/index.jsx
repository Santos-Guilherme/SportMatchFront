import React, { useState } from "react";
import "./index.scss";

export default function PartidaCard({ partida, participarPartida, sairPartida }) {
  const [estaParticipando, setEstaParticipando] = useState(false);

  const handleParticipar = async () => {
    try {
      await participarPartida(partida.idPartida); // Chamada da API para participar
      setEstaParticipando(true);
      alert("Você entrou na partida com sucesso!");
    } catch (error) {
      console.error("Erro ao participar da partida:", error);
      alert("Erro ao entrar na partida. Tente novamente.");
    }
  };

  const handleSair = async () => {
    try {
      await sairPartida(partida.idPartida); // Chamada da API para sair
      setEstaParticipando(false);
      alert("Você saiu da partida com sucesso!");
    } catch (error) {
      console.error("Erro ao sair da partida:", error);
      alert("Erro ao sair da partida. Tente novamente.");
    }
  };

  return (
    <div className="PartidaCard">
      <div className="detalhes">
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
        {estaParticipando ? (
          <button className="sair-btn" onClick={handleSair}>
            Sair da Partida
          </button>
        ) : (
          <button className="participar-btn" onClick={handleParticipar}>
            Participar da Partida
          </button>
        )}
      </div>
    </div>
  );
}
