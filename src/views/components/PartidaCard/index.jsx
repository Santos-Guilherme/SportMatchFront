import React, { useEffect, useState } from "react";
import "./index.scss";
import { listParticipantes } from "../../../api/participanteModel";

export default function PartidaCard({ partida, participarPartida, sairPartida }) {
    const [jogadoresAtuais, setJogadoresAtuais] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchParticipantes = async () => {
            try {
                setIsLoading(true);
                if (partida.id_partida) {
                    const participantes = await listParticipantes(partida.id_partida);
                    setJogadoresAtuais(participantes.length || 0); // Atualiza o número de jogadores atuais
                }
            } catch (error) {
                console.error(`Erro ao buscar participantes da partida ${partida.id_partida}:`, error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchParticipantes();
    }, [partida.id_partida]);

    const handleParticipar = () => {
        if (participarPartida) participarPartida(partida.id_partida);
    };

    const handleSair = () => {
        if (sairPartida) sairPartida(partida.id_partida);
    };

    return (
        <div className="PartidaCard">
            <div className="detalhes">
                <img
                    src={partida.organizadorImagem || "/default-avatar.png"}
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
                    <p>Máx. Jogadores: {partida.max_jogadores}</p>
                    <p>Jogadores Atuais: {isLoading ? "Carregando..." : jogadoresAtuais}</p>
                    <p>Data: {new Date(partida.data_horario).toLocaleDateString()}</p>
                    <p>Hora: {new Date(partida.data_horario).toLocaleTimeString()}</p>
                    <p>Endereço: {partida.quadra_endereco}</p>
                    <p>Quadra: {partida.quadra_nome}</p>
                </div>
                {partida.estaParticipando ? (
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
