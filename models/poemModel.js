const mongoose = require('mongoose');

const poemSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true,
  },
  text: {
    type: String,
    // required: true,
  },
  wrote: {
    type: String,
    // required: true,
  },
  image: {
    type: String,
    // required: true,
  },
  tags: [{
    type: String,
    // required: true,
  }],
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('poem', poemSchema);
