const router = require('express').Router();
const poemsRouter = require('./poems');

router.use('/', poemsRouter);

module.exports = router;
