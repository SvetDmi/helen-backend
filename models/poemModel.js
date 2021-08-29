const mongoose = require('mongoose');


const poemSchema = new mongoose.Schema({
  title: {
    type: String,
    default: '* * *',
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
  year: {
    type: Number,
    minlength: 4,
    maxlength: 4,
    // required: true,
  },
  image: {
    type: String,
    // required: true,
  },
  tags: {
    type: Array,
    // required: true,
  },
  series: {
    type: Array,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('poem', poemSchema);
