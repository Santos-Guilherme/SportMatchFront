import * as PartidaModel from '../api/partidaModel';
import * as Yup from 'yup';

// Esquema de validação para partidas
const partidaSchema = Yup.object().shape({
    id_quadra: Yup.number().required('ID da quadra é obrigatório'),
    id_criador: Yup.number().required('ID do criador é obrigatório'),
    data_horario: Yup.date().required('Data e horário são obrigatórios'),
    max_jogadores: Yup.number()
        .min(1, 'Deve haver pelo menos 1 jogador')
        .required('Máximo de jogadores é obrigatório'),
    status: Yup.string().oneOf(['pendente', 'agendada', 'cancelada']),
});

// Criar partida
export const createPartida = async (partida) => {
    await partidaSchema.validate(partida);
    return await PartidaModel.createPartida(partida);
};

// Atualizar partida
export const updatePartida = async (id, partida) => {
    await partidaSchema.validate(partida);
    return await PartidaModel.updatePartida(id, partida);
};

// Excluir partida
export const deletePartida = async (id) => {
    if (!id) throw new Error('ID da partida é obrigatório');
    return await PartidaModel.deletePartida(id);
};

// Listar partidas
export const listPartidas = async () => {
    return await PartidaModel.listPartidas();
};

// Listar partidas de um criador específico
export const listPartidasByCriador = async (id_criador) => {
    if (!id_criador) throw new Error('ID do criador é obrigatório');
    return await PartidaModel.listPartidasByCriador(id_criador);
};

// Adicionar participante à partida
export const addParticipante = async (id_partida, id_usuario) => {
    if (!id_partida || !id_usuario) {
        throw new Error('ID da partida e ID do usuário são obrigatórios');
    }
    return await PartidaModel.addParticipante(id_partida, id_usuario);
};

// Listar participantes de uma partida
export const listParticipantesByPartida = async (id_partida) => {
    if (!id_partida) throw new Error('ID da partida é obrigatório');
    return await PartidaModel.listParticipantesByPartida(id_partida);
};

// Listar partidas de um administrador
export const listPartidasByAdmin = async (id_administrador) => {
    if (!id_administrador) {
        throw new Error('ID do administrador é obrigatório');
    }
    return await PartidaModel.listPartidasByAdmin(id_administrador);
};

// Atualizar status da partida
export const updatePartidaStatus = async (id_partida, status) => {
    if (!id_partida || !status) {
        throw new Error('ID da partida e status são obrigatórios');
    }
    return await PartidaModel.updatePartidaStatus(id_partida, status);
};