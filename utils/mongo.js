const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/poemsdb';

// const mongoUrl = 'mongodb://localhost:27017/poemsdb';
const mongoObject = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,

};
module.exports = { mongoUrl, mongoObject };
