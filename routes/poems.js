const router = require('express').Router();

const { getPoems, getPoem, } = require('../controllers/poems.js');

router.get('/poems', getPoems);

router.get('/poems/:id', getPoem);


module.exports = router;
