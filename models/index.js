const Logger = require("./logger");
const Credentials = require("./credential");
const { sequelize, Sequelize } = require("./../database");

const LoggerModel = Logger(sequelize, Sequelize);
const CredentialsModel = Credentials(sequelize, Sequelize);
module.exports = {
  LoggerModel,
  CredentialsModel
};
