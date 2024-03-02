'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DeliveryBoy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DeliveryBoy.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    maxCarryQuantity: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    maxDuration: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DeliveryBoy',
  });
  return DeliveryBoy;
};