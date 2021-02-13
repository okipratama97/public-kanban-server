'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Task)
    }
  };
  Category.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Title cannot empty'
        },
        notEmpty: {
          args: true,
          msg: 'Title cannot empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};