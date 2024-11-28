import React, { useState } from "react";
import "./index.scss";
import { createPartida } from "../../../controllers/partidaController"; // Função para criar partida
import { useAuth } from "../../../contexts/AuthContext"; // Para obter o usuário logado

export default function PartidaForm({ quadra, onClose }) {
    const { user } = useAuth(); // Obtém o usuário logado
    const [data, setData] = useState("");
    const [maxJogadores, setMaxJogadores] = useState(10);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createPartida({
                id_quadra: quadra.id_quadra,
                id_criador: user.id_usuario, // ID do criador obtido do contexto do usuário
                data_horario: data,
                max_jogadores: maxJogadores,
                status: "pendente", // Status inicial da partida
            });

            alert("Partida criada com sucesso!");
            onClose(); // Fecha o modal após sucesso
        } catch (err) {
            console.error("Erro ao criar partida:", err.message);
            setError(err.message || "Erro ao criar partida.");
        }
    };

    return (
        <form className="PartidaForm" onSubmit={handleSubmit}>
            <h3>Criar Partida em {quadra.nome}</h3>
            {error && <p className="error-message">{error}</p>}
            <label>
                Data e Horário:
                <input
                    type="datetime-local"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    required
                />
            </label>
            <label>
                Máx. Jogadores:
                <input
                    type="number"
                    value={maxJogadores}
                    onChange={(e) => setMaxJogadores(Number(e.target.value))}
                    min="1"
                    required
                />
            </label>
            <button type="submit" className="submit-btn">Criar</button>
        </form>
    );
}
