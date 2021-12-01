const mongoose = require('mongoose');
// const isEmail = require('validator/lib/isEmail');

// const bcrypt = require('bcrypt');

const newsblockSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    default: 'newsblock'
  },

  time: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,

  },
  adress: {
    type: String,
    required: true,

  },
  link: {
    type: String,
  },

});

module.exports = mongoose.model('newsblock', newsblockSchema);