const Newsblock = require('../models/newsblockModel');

const {
  ErrorBadRequest400,
  ErrorNotFound404,

} = require('../errors/index');

const postNewsblock = (req, res, next) => {
  const {
    name,
    time,
    title,
    adress,
    link
  } = req.body;
  return Newsblock.findOneAndUpdate(name, {
    name,
    time,
    title,
    adress,
    link
  },
    {
      new: true,
      upsert: true,
    })
    .then((news) => res.status(200)
      .send(news))
    .catch(next);
};

const getNewsblock = (req, res, next) => {
  Newsblock.find({})

    .then((item) => res.status(200).send(item))
    .catch(next);
};

module.exports = { getNewsblock, postNewsblock }