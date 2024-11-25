import * as QuadraModel from '../api/quadraModel';
import * as Yup from 'yup';

// Esquema de validação para cadastro de quadras
const quadraSchema = Yup.object().shape({
    nome: Yup.string().required('Nome da quadra é obrigatório'),
    cep: Yup.string().required('CEP é obrigatório'),
    endereco: Yup.string().required('Endereço é obrigatório'),
    cidade: Yup.string().required('Cidade é obrigatória'),
    estado: Yup.string().required('Estado é obrigatório'),
    descricao: Yup.string(),
    modalidades: Yup.string().required('Modalidades são obrigatórias'),
    id_administrador: Yup.number().required('ID do administrador é obrigatório'),
});

// Criar quadra
export const createQuadra = async (quadra) => {
    await quadraSchema.validate(quadra);
    return await QuadraModel.createQuadra(quadra);
};

// Atualizar quadra
export const updateQuadra = async (id, quadra) => {
    await quadraSchema.validate(quadra);
    return await QuadraModel.updateQuadra(id, quadra);
};

// Excluir quadra
export const deleteQuadra = async (id, id_administrador) => {
    if (!id || !id_administrador) {
        throw new Error('ID da quadra e ID do administrador são obrigatórios');
    }
    return await QuadraModel.deleteQuadra(id, id_administrador);
};

// Listar quadras de um administrador
export const listQuadrasByAdmin = async (id_administrador) => {
    if (!id_administrador) throw new Error('ID do administrador é obrigatório');
    return await QuadraModel.listQuadrasByAdmin(id_administrador);
};

// Listar todas as quadras
export const listQuadras = async () => {
    return await QuadraModel.listAllQuadras();
};

// Verificar disponibilidade de quadra
export const checkQuadraAvailability = async (id_quadra, data) => {
    if (!id_quadra || !data) {
        throw new Error('ID da quadra e data são obrigatórios');
    }
    return await QuadraModel.checkQuadraAvailability(id_quadra, data);
};
