'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user ,{
        foreignKey:{
          name:'userId'
        }
      })
    }
  }
  todo.init({
    todoTitle: DataTypes.STRING,
    isComleted: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'todo',
  });
  return todo;
};