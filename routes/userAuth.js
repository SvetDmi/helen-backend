const router = require('express').Router();
// const jwt = require('jsonwebtoken');
const {
  createAdmin, loginAdmin, getAdmin, getUsers,
} = require('../controllers/userAuth');
// const {
//   JWT_SECRET,
//   JWT_TIME,
// } = require('../utils/config.js');
// const { validateUser, validateAuth } = require('../middlewares/validation');

// router.post('/admin/signup', createUser);

// router.post('/admin/signin', login);
// router.get('/users', getUsers);
//
router.get('/admin', getAdmin);
//
// router.post('/admin/signup', createAdmin);

router.post('/admin', loginAdmin);

module.exports = router;
