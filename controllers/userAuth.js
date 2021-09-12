// require('express-async-errors');
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const User = require('../models/userModel.js');
const {
  JWT_SECRET,
  JWT_TIME,
  ADMIN_LOGIN,
  ADMIN_PASS,
} = require('../utils/config.js');
// const { emailConflict, authError } = require('../utils/answers');

// const {
//   ErrorUnauthorized401,
// } = require('../errors/index');

// const createUser = (req, res, next) => {
//
//   const { email, password,
//   } = req.body;
//   User.findOne({ email })
//     .then((user) => {
//       if (user) {
//         throw new ErrorConflict409(`${user.email} ${emailConflict}`);
//       }
//       return bcrypt.hash(password, 10);
//     })
//
//     .then((hash) => User.create({ email, password: hash,
//     }))
//     .then((data) => {
//       // const token = jwt.sign({ id: _id }, JWT_SECRET, { expiresIn: JWT_TIME });
//       res.send(data);
//     })
//
//     .catch(next);
// };

// const login = (req, res, next) => {
//   const { email, password } = req.body;
//   User.findOne({ email }).select('+password')
//     .then((user) => {
//       if (!user) {
//         throw new ErrorUnauthorized401(authError);
//       }
//       return bcrypt.compare(password, user.password)
//         .then((isValid) => {
//           if (isValid) {
//             return user;
//           }
//           throw new ErrorUnauthorized401(authError);
//         });
//     })
//
//     .then((user) => {
//       const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: JWT_TIME });
//       res.send({ token });
//     })
//     .catch((err) => {
//       if (err.code === 11000 || err.name === 'MongoError') {
//         next(new ErrorUnauthorized401(authError));
//       }
//       next(err);
//     });
// };

const login = (req, res) => {
  const {
    admin,
    password,
  } = req.body;
  if (admin !== ADMIN_LOGIN) {
    res.send({ error: 'Неправильный логин' });
    return;
  }
  if (password !== ADMIN_PASS) {
    res.send({ error: 'Неправильный пароль' });
    return;
  }
  const token = jwt.sign({ id: admin }, JWT_SECRET, { expiresIn: JWT_TIME });
  res.send({
    token,
  });
};

module.exports = {
  login,
};
