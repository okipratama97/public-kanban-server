'use strict';
const { hash } = require("../helpers/bcrypt")
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
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
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Name cannot empty'
        },
        notEmpty: {
          args: true,
          msg: 'Name cannot empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Email cannot empty'
        },
        notEmpty: {
          args: true,
          msg: 'Email cannot empty'
        },
        isEmail: {
          args: true,
          msg: 'Email must be valid'
        }
      },
      unique: {
        args: true,
        msg: 'Email has been used'
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Password cannot empty'
        },
        notEmpty: {
          args: true,
          msg: 'Password cannot empty'
        },
        len: {
          args: 8,
          msg: 'Password must contain minimum 8 characters'
        },
      },
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(value) {
        value.password = hash(value.password)
      }
    }
  });
  return User;
};