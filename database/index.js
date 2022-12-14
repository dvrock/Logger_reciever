var Sequelize = require("sequelize");

// Creating a sequelize object for DB connection
const sequelize = new Sequelize(
  process.env.DATABASE_NAME || "tech_data",
  process.env.DATABASE_USERNAME || "root",
  process.env.DATABASE_SECRET || "1234",
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = {
  sequelize,
  Sequelize,
};
