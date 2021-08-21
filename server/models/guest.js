'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Guest.hasMany(models.Visit, {
        foreignKey: 'idCard'
      })
    }
  };
  Guest.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    idCard: {
      type: DataTypes.STRING(16),
      primaryKey: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    dateOfBirth: DataTypes.DATE

  }, {
    sequelize,
    modelName: 'Guest',
  });
  return Guest;
};