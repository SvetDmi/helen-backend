const router = require('express').Router();
// const jwt = require('jsonwebtoken');
const {
  loginAdmin, getAdmin,
} = require('../controllers/userAuth');

router.get('/admin', getAdmin);

router.post('/admin', loginAdmin);

module.exports = router;
