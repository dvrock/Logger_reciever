module.exports = (sequelize, Sequelize) => {
    const DataTypes = Sequelize.DataTypes;
    const Credentials = sequelize.define(
       "credentials",
      {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        user_name: {
          type: DataTypes.STRING(100),
          allowNull: false,
          min: 5,
          max: 100,
        },
        password: {
          type: DataTypes.INTEGER(100),
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
        tableName: "credentials",
      }
    );
  
    return Credentials;
  };
  