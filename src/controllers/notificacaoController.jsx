import * as NotificacaoModel from '../api/notificacaoModel';
import * as Yup from 'yup';

// Esquema de validação para notificações
const notificacaoSchema = Yup.object().shape({
    id_usuario: Yup.number().required('ID do usuário é obrigatório'),
    mensagem: Yup.string().required('Mensagem é obrigatória'),
    tipo: Yup.string().required('Tipo é obrigatório'),
    lida: Yup.boolean(),
});

export const createNotificacao = async (notificacao) => {
    await notificacaoSchema.validate(notificacao);
    return await NotificacaoModel.createNotificacao(notificacao);
};

export const markNotificacaoAsRead = async (id) => {
    if (!id) throw new Error('ID da notificação é obrigatório');
    return await NotificacaoModel.markNotificacaoAsRead(id);
};

export const deleteNotificacao = async (id) => {
    if (!id) throw new Error('ID da notificação é obrigatório');
    return await NotificacaoModel.deleteNotificacao(id);
};

export const listNotificacoes = async (id_usuario) => {
    if (!id_usuario) throw new Error('ID do usuário é obrigatório');
    return await NotificacaoModel.listNotificacoes(id_usuario);
};
