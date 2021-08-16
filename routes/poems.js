const router = require('express').Router();

const { createPoem, getPoems, editPoem, getPoem, deletePoem } = require('../controllers/poems.js');

router.get('/poems', getPoems);
router.post('/poems', createPoem);
router.patch('/poems/:id', editPoem);
router.get('/poems/:id', getPoem);
router.delete('/poems/:id', deletePoem);

module.exports = router;
