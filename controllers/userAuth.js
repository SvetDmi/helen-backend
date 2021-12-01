const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {
  JWT_SECRET,
  JWT_TIME,

} = require('../utils/config.js');
const { authError } = require('../utils/answers');

const {
  ErrorUnauthorized401, ErrorConflict409,
} = require('../errors/index');

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


module.exports = {
  loginAdmin, getAdmin,
};
