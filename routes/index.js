const router = require('express').Router();
const showPoemsRouter = require('./poems');
const editPoemsRouter = require('./editPoems');
const userAuthRouter = require('./userAuth');
const newsblockRouter = require('./news');

router.use('/', showPoemsRouter);

router.use('/', userAuthRouter);

router.use('/', editPoemsRouter);

router.use('/', newsblockRouter);

module.exports = router;
