const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { login, createUser } = require('../controllers/userAuth');
const {
  JWT_SECRET,
  JWT_TIME,
} = require('../utils/config.js');
// const { validateUser, validateAuth } = require('../middlewares/validation');

// router.post('/admin/signup', createUser);

// router.post('/admin/signin', login);

router.post('/admin', login);

module.exports = router;
