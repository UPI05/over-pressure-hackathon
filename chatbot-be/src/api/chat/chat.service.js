const { AppError } = require('../../common/errors/AppError');

module.exports = {
    getResponse: async (msg, next) => {
        try {
            
            return {
                statusCode: 200,
                message: 'Success',
                data: ''
            };
        } catch (error) {
            throw new AppError(500, error.message);
        }
    }
};