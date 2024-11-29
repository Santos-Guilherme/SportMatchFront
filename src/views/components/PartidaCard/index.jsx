import React, { useEffect, useState } from "react";
import "./index.scss";
import { listParticipantes } from "../../../api/participanteModel";
import { getUserById, getUserByEmail } from "../../../controllers/userController";
import { useAuth } from "../../../contexts/AuthContext";
import { API_ADDRESS } from "../../../api/constants";
import { createConvite } from "../../../controllers/conviteController";

export default function PartidaCard({ partida, participarPartida, sairPartida }) {
    const { user } = useAuth();
    const [jogadoresAtuais, setJogadoresAtuais] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [organizadorImagem, setOrganizadorImagem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [emailConvidado, setEmailConvidado] = useState("");
    const [conviteError, setConviteError] = useState("");

    useEffect(() => {
        // Fetch participantes e atualiza estado
        const fetchParticipantes = async () => {
            try {
                setIsLoading(true);
                if (partida.id_partida) {
                    const participantes = await listParticipantes(partida.id_partida);
                    setJogadoresAtuais(participantes || []);
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
        // Fetch foto do organizador
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
        const participante = jogadoresAtuais.find(
            (participante) => participante.id_usuario === user?.id_usuario
        );
        if (participante) sairPartida(participante.id_participante);
    };

    const handleConvidar = async () => {
        try {
            const convidado = await getUserByEmail(emailConvidado);
            if (!convidado) {
                setConviteError("Usuário não encontrado.");
                return;
            }
            console.log(convidado.id_usuario)

            await createConvite({
                id_partida: partida.id_partida,
                id_jogador: convidado.id_usuario,
                id_criador: user.id_usuario,
                mensagem: "Está te convidando para participar da partida",
                status: "pendente",
            });

            setConviteError("");
            setEmailConvidado("");
            setIsModalOpen(false);
            alert("Convite enviado com sucesso!");
        } catch (error) {
            console.error("Erro ao enviar convite:", error.message);
            setConviteError("Erro ao enviar convite. Tente novamente.");
        }
    };

    const estaParticipando = jogadoresAtuais.some(
        (participante) => participante.id_usuario === user?.id_usuario
    );

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
                    <p className="esporte">{partida.esporte}</p>
                    <p>Máx. Jogadores: {partida.max_jogadores}</p>
                    <p>Jogadores Atuais: {isLoading ? "Carregando..." : jogadoresAtuais.length}</p>
                    <p>Data: {new Date(partida.data_horario).toLocaleDateString()}</p>
                    <p>Hora: {new Date(partida.data_horario).toLocaleTimeString()}</p>
                    <p>Endereço: {partida.quadra_endereco}</p>
                    <p>Quadra: {partida.quadra_nome}</p>
                </div>
                {estaParticipando ? (
                    <>
                        <button className="sair-btn" onClick={handleSair}>
                            Sair da Partida
                        </button>
                        <button className="convidar-btn" onClick={() => setIsModalOpen(true)}>
                            Convidar Jogador
                        </button>
                    </>
                ) : (
                    <button className="participar-btn" onClick={handleParticipar}>
                        Participar da Partida
                    </button>
                )}
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Convidar Jogador</h3>
                        <input
                            type="email"
                            value={emailConvidado}
                            onChange={(e) => setEmailConvidado(e.target.value)}
                            placeholder="Digite o email do jogador"
                        />
                        {conviteError && <p className="error">{conviteError}</p>}
                        <div className="modal-actions">
                            <button onClick={handleConvidar}>Enviar Convite</button>
                            <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
