import React, { useEffect, useState } from "react";
import "./index.scss";
import { listParticipantes } from "../../../api/participanteModel";
import { getUserById } from "../../../controllers/userController";
import { API_ADDRESS } from "../../../api/constants";

export default function PartidaCard({ partida, participarPartida, sairPartida }) {
    const [jogadoresAtuais, setJogadoresAtuais] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [organizadorImagem, setOrganizadorImagem] = useState(null);

    useEffect(() => {
        // Fetch número de participantes
        const fetchParticipantes = async () => {
            try {
                setIsLoading(true);
                if (partida.id_partida) {
                    const participantes = await listParticipantes(partida.id_partida);
                    setJogadoresAtuais(participantes.length || 0);
                }
            } catch (error) {
                console.error(`Erro ao buscar participantes da partida ${partida.id_partida}:`, error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchParticipantes();
    }, [partida.id_partida]);

    useEffect(() => {
        // Fetch foto do organizador usando o controlador
        const fetchOrganizadorFoto = async () => {
            try {
                const organizador = await getUserById(partida.id_criador);
                setOrganizadorImagem(
                    organizador.foto_perfil
                        ? `${API_ADDRESS}/${organizador.foto_perfil}`
                        : "/assets/images/default-avatar.png"
                );
            } catch (error) {
                console.error(`Erro ao buscar imagem do organizador da partida ${partida.id_partida}:`, error.message);
            }
        };

        if (partida.id_criador) fetchOrganizadorFoto();
    }, [partida.id_criador]);

    const handleParticipar = () => {
        if (participarPartida) participarPartida(partida.id_partida);
    };

    const handleSair = () => {
        if (sairPartida) sairPartida(partida.id_partida);
    };

    return (
        <div className="PartidaCard">
            <div className="detalhes">
                <div className="detalhes-img">
                    <img
                        src={organizadorImagem}
                        alt="Organizador"
                        className="organizador-imagem"
                    />
                </div>
                <h3>{partida.nome}</h3>
                <div className="informacoes">
                    <p className="esporte">
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
