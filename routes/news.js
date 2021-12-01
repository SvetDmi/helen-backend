const router = require('express').Router();
const { getNewsblock, postNewsblock } = require("../controllers/news");

router.post('/newsblock', postNewsblock);
router.get('/newsblock', getNewsblock);

module.exports = router;