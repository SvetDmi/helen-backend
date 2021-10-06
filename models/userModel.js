const mongoose = require('mongoose');
// const isEmail = require('validator/lib/isEmail');

// const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({

  login: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    // select: false,
    // minlength: 8,
  },

});

module.exports = mongoose.model('user', userSchema);
