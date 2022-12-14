const Logger = require("./logger");

const { sequelize, Sequelize } = require("./../database");

const LoggerModel = Logger(sequelize, Sequelize);
module.exports = {
  LoggerModel,
};
