const router = require('express').Router();
// const auth = require('../middlewares/auth');

const {
  createPoem,
  editPoem,
  deletePoem,
} = require('../controllers/poems.js');

const {
  createSeria,
  getSeries
} = require('../controllers/series.js');

router.post('/poems', createPoem);
router.patch('/poems/:id', editPoem);
router.delete('/poems/:id', deletePoem);
router.post('/post', createSeria);
router.get('/post', getSeries);

module.exports = router;
