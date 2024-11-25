export const getErrorMessage = (error, defaultMessage) => {
    if (error.response && error.response.data && error.response.data.message) {
        return error.response.data.message;
    }
    return defaultMessage;
};