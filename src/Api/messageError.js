/**
 * Centraliza mensagens de erro amigáveis.
 */
const errorMessages = {
    400: 'Requisição inválida. Por favor, revise os dados enviados.',
    401: 'Não autorizado. Verifique suas credenciais.',
    403: 'Você não tem permissão para acessar este recurso.',
    404: 'Recurso não encontrado.',
    500: 'Erro interno do servidor. Tente novamente mais tarde.',
    default: 'Algo deu errado. Por favor, tente novamente.',
  };
  
  /**
   * Retorna uma mensagem de erro amigável com base no código ou na mensagem.
   * @param {number} statusCode - Código de status HTTP.
   * @param {string} errorMessage - Mensagem de erro personalizada.
   * @returns {string} Mensagem de erro amigável.
   */
  export const getErrorMessage = (statusCode, errorMessage = '') => {
    if (statusCode in errorMessages) {
      return errorMessages[statusCode];
    }
    return errorMessage || errorMessages.default;
  };
  