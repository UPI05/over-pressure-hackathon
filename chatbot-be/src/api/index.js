const router = require('express').Router();

const chat = require('./chat');

router.use('/chat', chat);

module.exports = router;
