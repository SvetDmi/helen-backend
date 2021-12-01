const config = {
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  JWT_TIME: process.env.JWT_TIME || '30d',

};


module.exports = config;
