module.exports = (sequelize, Sequelize) => {
  const DataTypes = Sequelize.DataTypes;
  const Logger = sequelize.define(
    "table_logger",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      created_at: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      message: {
        type: DataTypes.STRING(1000),
        allowNull: true,
      },
      device_platform: {
        type: DataTypes.STRING(100),
        allowNull: true,
        min: 5,
        max: 100,
      },
      filename: {
        type: DataTypes.STRING(100),
        allowNull: true,
        min: 5,
        max: 100,
      },
      log_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
      },
      currentuser: {
        type: DataTypes.STRING(100),
        allowNull: false,
        min: 5,
        max: 100,
      },
      updated_at: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      device_name: {
        type: DataTypes.STRING(100),
        allowNull: true,
        min: 5,
        max: 100,
      },
    },
    {
      underscored: true,
      timestamps: false,
      freezeTableName: true,
      // define the table's name
      tableName: "table_logger",
    }
  );

  return Logger;
};
