const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  sequelize.define(
    "Tag",
    {
      id: {
        // define columns
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      tag_name: {
        type: DataTypes.STRING,
      },
      producttag_id: {
        type: DataTypes.INTEGER,
      //reference the Product Model id
        reference: {
          model: "producttag",
          key: "id",
        },
      },
      tag_id: {
        type: DataTypes.INTEGER,
      //reference the 'Tag' model's id.
      },
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
));

module.exports = Tag;
