const { Model, DataTypes, INTEGER } = require("sequelize");

const sequelize = require("../config/config.js");

class Category extends Model {}

Category.init(
     {
      id: {
        // define columns
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      category_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: "category",
    }
  );

module.exports = Category;
