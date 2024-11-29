import * as UserModel from '../api/userModel';
import * as Yup from 'yup';

// Esquema de validação para registro de usuários
const userSchema = Yup.object().shape({
  nome: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  senha: Yup.string()
    .min(6, 'Senha deve ter no mínimo 6 caracteres')
    .required('Senha é obrigatória'),
  data_nascimento: Yup.date().required('Data de nascimento é obrigatória'),
  cpf: Yup.string()
    .length(11, 'CPF deve ter 11 dígitos')
    .required('CPF é obrigatório'),
  celular: Yup.string().nullable(),
  cep: Yup.string().nullable(),
  endereco: Yup.string().nullable(),
  cidade: Yup.string().nullable(),
  estado: Yup.string().nullable(),
  foto_perfil: Yup.string().nullable(),
  tipo: Yup.string()
    .oneOf(['jogador', 'administrador'], 'Tipo inválido')
    .required('Tipo é obrigatório'),
});

// Registro de novo usuário
export const registerUser = async (usuario) => {
  await userSchema.validate(usuario); // Valida os campos fornecidos
  return await UserModel.registerUser(usuario); // Envia para o modelo
};

// Atualização de informações de usuário
export const updateUser = async (id, usuario) => {
  const updateSchema = Yup.object().shape({
    nome: Yup.string(),
    email: Yup.string().email('Email inválido'),
    celular: Yup.string(),
    cep: Yup.string(),
    endereco: Yup.string(),
    cidade: Yup.string(),
    estado: Yup.string(),
    foto_perfil: Yup.string(),
    tipo: Yup.string().oneOf(['jogador', 'administrador'], 'Tipo inválido'),
  });

  await updateSchema.validate(usuario);
  return await UserModel.updateUser(id, usuario);
};

// Busca de usuário pelo email
export const getUserByEmail = async (email) => {
  if (!email) throw new Error('Email é obrigatório');
  return await UserModel.getUserByEmail(email);
};

// Autenticar usuário (login)
export const authenticateUser = async (email, senha) => {
  if (!email || !senha) throw new Error('Email e senha são obrigatórios');
  return await UserModel.authenticateUser(email, senha); // Envia os dados para o modelo
};

// Busca de usuário pelo ID
export const getUserById = async (id) => {
  if (!id) throw new Error('ID é obrigatório');
  return await UserModel.getUserById(id); // Envia o ID para o modelo
};

export const updateUserFields = async (id, usuario) => {
  const updateSchema = Yup.object().shape({
    celular: Yup.string().nullable(),
    endereco: Yup.string().nullable(),
    cep: Yup.string().nullable(),
  });

  await updateSchema.validate(usuario);
  return await UserModel.updateUserFields(id, usuario);
};


export const updateUserPhoto = async (id, formData) => {
  if (!formData.has('foto_perfil')) {
    throw new Error('A foto de perfil é obrigatória');
  }
  return await UserModel.updateUserPhoto(id, formData);
};
