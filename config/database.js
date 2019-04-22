const Sequelize = require('sequelize');

module.exports = new Sequelize('codegig', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
);