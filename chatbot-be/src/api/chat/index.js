const chatController = require('./chat.controller');

const router = require('express').Router();

const { AppError } = require('../../common/errors/AppError');

router.post('/getResponse', chatController.getResponse);

module.exports = router;