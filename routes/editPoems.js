const router = require('express').Router();

const { createPoem,
  editPoem,
  deletePoem,
} = require('../controllers/poems.js');

router.post('/poems', createPoem);
router.patch('/poems/:id', editPoem);
router.delete('/poems/:id', deletePoem);

module.exports = router;
