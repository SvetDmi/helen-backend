const Series = require('../models/seriesModel');
const {
  ErrorBadRequest400,
  ErrorNotFound404,

} = require('../errors/index');

const getSeries = (req, res, next) => {
  Series.find({})

    .then((series) => res.status(200)
      .send(series))
    .catch(next);
};

const createSeria = (req, res, next) => {
  const {
    myId,
    value,
    name,
  } = req.body;
  Series.create({
    myId,
    value,
    name,
  })
    .then((ser) => {
      if (!ser) {
        throw new ErrorBadRequest400('Проверьте правильность введенных данных');
      } else {
        return res.status(200)
          .send(ser);
      }
    })
    .catch(next);
};

module.exports = { getSeries, createSeria }