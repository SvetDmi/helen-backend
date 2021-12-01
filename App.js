require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const helmet = require('helmet');
// const limiter = require('./utils/limiter');

const { mongoUrl, mongoObject } = require('./utils/mongo');
const { appListen } = require('./utils/answers')

const routes = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

const { PORT = 4000 } = process.env;
const app = express();

mongoose.connect(mongoUrl, mongoObject);

mongoose.connection.on('connected', () => {
  console.log('Mongodb connected');
});

app.use(cors());
app.use(requestLogger);
// app.use(limiter);
// app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '200Kb' }));

// app.use(routes);
app.use('/api', routes);
app.use(errorLogger);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(appListen, PORT);
});
