import React, { useEffect, useState } from "react";
import "./index.scss";
import { useAuth } from "../../../contexts/AuthContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { addParticipante, listParticipantes, removeParticipante } from "../../../controllers/participanteController";
import { listPartidas } from "../../../controllers/partidaController";
import PartidaCard from "../../components/PartidaCard";

const Partidas = () => {
    const { user } = useAuth();
    const [partidas, setPartidas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchPartidas = async () => {
        try {
            setIsLoading(true);
            const response = await listPartidas();

            const partidasComParticipantes = await Promise.all(
                response.map(async (partida) => {
                    const participantes = await listParticipantes(partida.id_partida);
                    return { ...partida, participantes };
                })
            );

            setPartidas(partidasComParticipantes);
        } catch (error) {
            console.error("Erro ao buscar partidas:", error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleParticipar = async (id_partida) => {
        try {
            await addParticipante({ id_partida, id_usuario: user.id_usuario, status: "ativo" });
            fetchPartidas(); // Atualiza a lista de partidas
        } catch (error) {
            console.error("Erro ao participar da partida:", error.message);
        }
    };

    const handleSair = async (id_participante) => {
        try {
            await removeParticipante(id_participante); // Use o id_participante diretamente
            fetchPartidas(); // Atualiza a lista de partidas
        } catch (error) {
            console.error("Erro ao sair da partida:", error.message);
        }
    };

    useEffect(() => {
        if (user?.id_usuario) {
            fetchPartidas();
        }
    }, [user]);

    return (
        <div className="Partidas">
            <Header />
            <section className="partidas-section">
                <h1>Partidas Disponíveis</h1>
                {isLoading ? (
                    <div className="loading">
                        <p>Carregando partidas...</p>
                    </div>
                ) : partidas.length === 0 ? (
                    <div className="no-partidas">
                        <p>Não há partidas disponíveis no momento.</p>
                    </div>
                ) : (
                    <div className="partidas-list">
                        {partidas.map((partida) => (
                            <PartidaCard
                                key={partida.id_partida}
                                partida={partida}
                                participantes={partida.participantes} // Passa os participantes para o card
                                participarPartida={() => handleParticipar(partida.id_partida)}
                                sairPartida={(id_participante) => handleSair(id_participante)}
                            />
                        ))}
                    </div>
                )}
            </section>
            <Footer />
        </div>
    );
};

export default Partidas;
