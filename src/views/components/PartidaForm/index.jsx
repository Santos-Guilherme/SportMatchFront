import React, { useState } from 'react';
import './index.scss';
import { createPartida } from '../../../controllers/partidaController';

const PartidaForm = ({ quadra, userId, onClose }) => {
    const [dataHorario, setDataHorario] = useState('');
    const [maxJogadores, setMaxJogadores] = useState(10); // Valor padrão
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Dados para criação da partida
            const partidaData = {
                id_quadra: quadra?.id_quadra, // Garantindo que `quadra` está disponível
                id_criador: userId, // Certifique-se de que `userId` está sendo passado
                data_horario: dataHorario,
                max_jogadores: Number(maxJogadores),
                status: 'pendente',
            };

            console.log('Enviando dados ao servidor:', partidaData);

            if (!partidaData.id_quadra || !partidaData.id_criador) {
                throw new Error('ID da quadra ou do criador não está definido.');
            }

            // Chama a função para criar a partida
            await createPartida(partidaData);

            // Fecha o modal após sucesso
            onClose();
        } catch (err) {
            console.error('Erro ao criar partida:', err.message || err);
            setError('Erro ao criar partida. Verifique os campos e tente novamente.');
        }
    };

    return (
        <div className="partida-form-modal">
            <h2>Criar Partida em {quadra?.nome || 'Quadra Desconhecida'}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Data e Horário:
                    <input
                        type="datetime-local"
                        value={dataHorario}
                        onChange={(e) => setDataHorario(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Máximo de Jogadores:
                    <input
                        type="number"
                        value={maxJogadores}
                        onChange={(e) => setMaxJogadores(e.target.value)}
                        min="1"
                        required
                    />
                </label>
                {error && <p className="error">{error}</p>}
                <div className="form-actions">
                    <button type="submit">Criar</button>
                    <button type="button" onClick={onClose}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default PartidaForm;
