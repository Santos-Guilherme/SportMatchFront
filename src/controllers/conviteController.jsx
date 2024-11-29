import * as ConviteModel from '../api/conviteModel';
import * as Yup from 'yup';

// Esquema de validação para convites
const conviteSchema = Yup.object().shape({
    id_partida: Yup.number().required('ID da partida é obrigatório'),
    id_criador: Yup.number().required('ID do criador é obrigatório'),
    id_jogador: Yup.number().required('ID do jogador convidado é obrigatório'),
    mensagem: Yup.string().required('Mensagem é obrigatória'),
    status: Yup.string().oneOf(['pendente', 'aceito', 'recusado']),
});

// Criar convite
export const createConvite = async (convite) => {
    await conviteSchema.validate(convite);
    return await ConviteModel.createConvite(convite);
};

// Buscar convites por jogador
export const getConvitesByJogador = async (id_jogador) => {
    if (!id_jogador) throw new Error('ID do jogador é obrigatório');
    return await ConviteModel.getConvitesByJogador(id_jogador);
};

// Atualizar status do convite
export const updateConviteStatus = async (id_convite, status) => {
    if (!id_convite || !status) {
        throw new Error('ID do convite e status são obrigatórios');
    }
    return await ConviteModel.updateConviteStatus(id_convite, status);
};

// Excluir convite
export const deleteConvite = async (id_convite) => {
    if (!id_convite) throw new Error('ID do convite é obrigatório');
    return await ConviteModel.deleteConvite(id_convite);
};
