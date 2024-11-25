import * as ParticipanteModel from '../api/participanteModel';
import * as Yup from 'yup';

// Esquema de validação para participantes
const participanteSchema = Yup.object().shape({
    id_partida: Yup.number().required('ID da partida é obrigatório'),
    id_usuario: Yup.number().required('ID do usuário é obrigatório'),
    status: Yup.string().oneOf(['ativo', 'inativo']).required('Status é obrigatório'),
});

export const addParticipante = async (participante) => {
    await participanteSchema.validate(participante);
    return await ParticipanteModel.addParticipante(participante);
};

export const updateParticipante = async (id, status) => {
    if (!id) throw new Error('ID do participante é obrigatório');
    return await ParticipanteModel.updateParticipante(id, status);
};

export const removeParticipante = async (id) => {
    if (!id) throw new Error('ID do participante é obrigatório');
    return await ParticipanteModel.removeParticipante(id);
};

export const listParticipantes = async (id_partida) => {
    if (!id_partida) throw new Error('ID da partida é obrigatório');
    return await ParticipanteModel.listParticipantes(id_partida);
};
