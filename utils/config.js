const config = {
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  JWT_TIME: process.env.JWT_TIME || '7d',
  ADMIN_LOGIN: process.env.ADMIN_LOGIN || 'admin',
  ADMIN_PASS: process.env.ADMIN_PASS || 'pass',
};

module.exports = config;
