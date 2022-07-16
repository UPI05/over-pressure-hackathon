const chatService = require('./chat.service');
const { AppError } = require('../../common/errors/AppError');

module.exports = {
    getResponse: async (req, res, next) => {
        try {
            res.send(await chatService.getResponse(req.body.msg, next));
        } catch (err) {
            next(err);
        }
    }
};