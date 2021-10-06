const Poem = require('../models/poemModel');
const {
  ErrorBadRequest400,
  ErrorNotFound404,

} = require('../errors/index');

const getPoems = (req, res, next) => {
  Poem.find({})
    .sort('-createAt')
    .then((cards) => res.status(200)
      .send(cards))
    .catch(next);
};

const getPoem = (req, res, next) => {
  Poem.findById(req.params.id)
    .then((card) => {
      if (!card) {
        throw new ErrorNotFound404('Карточка с таким id отсутствует');
      }
      return res.status(200)
        .send(card);
    })
    .catch(next);
};

const createPoem = (req, res, next) => {
  const {
    title,
    text,
    image,
    wrote,
    year,
    tags,
    series,
  } = req.body;
  Poem.create({
    title,
    text,
    image,
    wrote,
    year,
    tags,
    series,
  })
    .then((card) => {
      if (!card) {
        throw new ErrorBadRequest400('Проверьте правильность введенных данных');
      } {
        return res.status(200)
          .send(card);
      }
    })
    .catch(next);
};

const editPoem = (req, res, next) => {
  const {
    title,
    text,
    image,
    wrote,
    year,
    tags,
    series,
  } = req.body;
  return Poem.findByIdAndUpdate(req.params.id, {
    title,
    text,
    image,
    wrote,
    year,
    tags,
    series,
  },
  {
    new: true,
    runValidators: true,
  })
    .then((card) => res.status(200)
      .send(card))
    .catch(next);
};

const deletePoem = (req, res, next) => {
  Poem.findByIdAndRemove(req.params.id)
    .then((card) => {
      if (!card) {
        throw new ErrorNotFound404('Карточка с таким id отсутствует');
      }
      return res.status(200)
        .send(card);
    })
    .catch(next);
};

module.exports = {
  getPoems,
  getPoem,
  createPoem,
  editPoem,
  deletePoem,
};
