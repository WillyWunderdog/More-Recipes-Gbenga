const config = {
  development: {
    username: 'postgres',
    password: '212213',
    database: 'more-recipes-development',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: 'postgres',
    password: '212213',
    database: 'more-recipes-tests',
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: false
  },
  production: {
    username: 'postgres',
    password: '212213',
    database: 'more-recipes-development',
    host: '127.0.0.1',
    dialect: 'postgres'
  }
};
module.exports = config;