const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  sequelize.define(
    "ProductTag",
    {
      id: {
        // define columns
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      //reference the Product Model id
      tag_id: {
        type: DataTypes.INTEGER,
      },
      //reference the 'Tag' model's id.
      category_id: {
        type: DataTypes.INTEGER,
        reference: {
          model: "Category",
          key: "id",
        },
      },
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
));

module.exports = ProductTag;
