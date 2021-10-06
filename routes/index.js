const router = require('express').Router();
const showPoemsRouter = require('./poems');
const editPoemsRouter = require('./editPoems');
const userAuthRouter = require('./userAuth');

router.use('/', showPoemsRouter);

router.use('/', userAuthRouter);

router.use('/', editPoemsRouter);

module.exports = router;
