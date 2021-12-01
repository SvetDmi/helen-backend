const mongoose = require('mongoose');
// const isEmail = require('validator/lib/isEmail');

// const bcrypt = require('bcrypt');

const seriesSchema = new mongoose.Schema({

  myId: {
    type: Number,
    required: true,
    unique: true,
  },
  value: {
    type: String,
    required: true,
    unique: true,
  },

});

module.exports = mongoose.model('serie', seriesSchema);
