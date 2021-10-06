// require('express-async-errors');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel.js');
const {
  JWT_SECRET,
  JWT_TIME,

} = require('../utils/config.js');
const { authError, loginConflict } = require('../utils/answers');

const {
  ErrorUnauthorized401, ErrorConflict409,
} = require('../errors/index');

// async function compareHash(pass, newPass) {
//   await bcrypt.compare(pass, newPass);
// }

// async function createHash(password) {
//   await bcrypt.hash(password, 10);
// }

const getAdmin = (req, res, next) => {
  const dataPath = path.join(__dirname, '../utils/admins.json');
  fsPromises.readFile(dataPath, { encoding: 'utf8' })
    .then((data) => {
      const admin = JSON.parse(data);
      res.send(admin);
    })
    .catch(next);
};

const loginAdmin = (req, res, next) => {
  const {
    login,
    password,
  } = req.body;

  // const pass = bcrypt.hash(password, 10);
  // console.log(pass);

  const dataPath = path.join(__dirname, '../utils/admins.json');

  fsPromises.readFile(dataPath, { encoding: 'utf8' })
    .then((data) => {
      const admin = JSON.parse(data);

      if (login !== admin.login) {
        throw new ErrorUnauthorized401(ErrorConflict409);
      } return bcrypt.compare(password, admin.password)
        .then((isValid) => {
          if (isValid) {
            return admin;
            // console.log(admin);
          }
          throw new ErrorUnauthorized401(ErrorConflict409);
        });
    })
    .then((user) => {
      const token = jwt.sign({ login: user.login }, JWT_SECRET, { expiresIn: JWT_TIME });
      res.send({ token });
    })
    .catch((err) => {
      if (err.code === 11000) {
        next(new ErrorUnauthorized401(authError));
      }
      next(err);
    });
};

// const createAdmin = (req, res, next) => {
//   const {
//     login, password,
//   } = req.body;
//   User.findOne({ login })
//     .then((user) => {
//       if (user) {
//         throw new ErrorConflict409(`${user.login} ${loginConflict}`);
//       }
//       return bcrypt.hash(password, 10);
//     })
//
//     .then((hash) => User.create({
//       login, password: hash,
//     }))
//     .then(({ _id }) => {
//       const token = jwt.sign({ id: _id }, JWT_SECRET, { expiresIn: JWT_TIME });
//       res.send({ _id, token });
//     })
//
//     .catch(next);
// };
//
// const loginAdmin = (req, res, next) => {
//   const { login, password } = req.body;
//   User.findOne({ login }).select('+password')
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
//       res.send({ user, token });
//     })
//     .catch((err) => {
//       if (err.code === 11000 || err.name === 'MongoError') {
//         next(new ErrorUnauthorized401(authError));
//       }
//       next(err);
//     });
// };
//

//
// const getUsers = (req, res, next) => User.find({})
//   .then((users) => res.status(200).send(users))
//   .catch(next);

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

// const login = (req, res) => {
//   const {
//     admin,
//     password,
//   } = req.body;
//
//   if (admin !== ADMIN_LOGIN) {
//     res.send({ error: 'Неправильный логин' });
//     return;
//   }
//   if (password !== ADMIN_PASS) {
//     res.send({ error: 'Неправильный пароль' });
//   } else {
//     const token = jwt.sign({ id: admin }, JWT_SECRET, { expiresIn: JWT_TIME });
//     console.log(token);
//     res.send({
//       token,
//     });
//   }
// };

// module.exports = {
//   createAdmin, loginAdmin, getAdmin, getUsers,
// };
module.exports = {
  loginAdmin, getAdmin,
};
