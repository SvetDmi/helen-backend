const router = require('express').Router();

const { getPoems, getPoem,  } = require('../controllers/poems.js');

router.get('/poems', getPoems);
// router.post('/poems', createPoem);
router.get('/poems/:id', getPoem);
// router.patch('/poems/:id', editPoem);
// router.delete('/poems/:id', deletePoem);

module.exports = router;
