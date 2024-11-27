import * as AvaliacaoModel from '../api/avaliacaoModel';
import * as Yup from 'yup';

// Esquema de validação para avaliações

/*
const avaliacaoSchema = Yup.object().shape({
    id_usuario: Yup.number().required('ID do usuário é obrigatório'),
    id_quadra: Yup.number().required('ID da quadra é obrigatório'),
    nota: Yup.number().min(1).max(5).required('Nota é obrigatória'),
    comentario: Yup.string(),
});
*/



const avaliacaoSchema = Yup.object().shape({
    id_usuario: Yup.number()
        .required('O ID do usuário é obrigatório')
        .typeError('O ID do usuário deve ser um número'),
    id_quadra: Yup.number()
        .required('O ID da quadra é obrigatório')
        .typeError('O ID da quadra deve ser um número'),
    nota: Yup.number()
        .min(1, 'A nota deve ser no mínimo 1')
        .max(5, 'A nota deve ser no máximo 5')
        .required('A nota é obrigatória')
        .typeError('A nota deve ser um número'),
    comentario: Yup.string()
        .max(500, 'O comentário não pode ter mais de 500 caracteres')
        .optional(),
});

export const addAvaliacao = async (avaliacao) => {
    await avaliacaoSchema.validate(avaliacao);
    return await AvaliacaoModel.addAvaliacao(avaliacao);
};

export const updateAvaliacao = async (id, avaliacao) => {
    if (!id) throw new Error('ID da avaliação é obrigatório');
    // return await AvaliacaoModel.updateAvaliacao(id, avaliacao.nota, avaliacao.comentario);
    return await AvaliacaoModel.updateAvaliacao(id, avaliacao);
};

export const deleteAvaliacao = async (id) => {
    if (!id) throw new Error('ID da avaliação é obrigatório');
    return await AvaliacaoModel.deleteAvaliacao(id);
};

export const listAvaliacoes = async (id_quadra) => {
    if (!id_quadra) throw new Error('ID da quadra é obrigatório');
    return await AvaliacaoModel.listAvaliacoes(id_quadra);
};
