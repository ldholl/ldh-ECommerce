const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

//create Category model
class Category extends Model {}

//define table columns and configuration
Category.init(
  {
    // define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    //define category_name column
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    //pass in imported sequelize connection(direct connection to db)
    sequelize,
    //don't automatically create createdAt/updatedAt timestamps
    timestamps: false,
    //don't pluralize name of db table
    freezeTableName: true,
    //use underscores instead of camel-casing
    underscored: true,
    //make it so model name stays in lowercase
    modelName: 'category',
  }
);

module.exports = Category;
