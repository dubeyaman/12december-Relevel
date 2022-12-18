'use strict';
const {
  Model
} = require('sequelize');
const bcrypt=require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    email: {
      type:DataTypes.STRING,
      unique:true,
      validate:{
        isEmail:true,
      }

    },
    username: DataTypes.STRING,


    password: {
      type:DataTypes.STRING,
      validate:{
        len:[5,100],
      }

    }
   
  }, {
    sequelize,
    modelName: 'user',
  });
   
 user.beforeCreate(async(user)=>{
  const salt= bcrypt.genSaltSync(10);
    let hashedpassword= bcrypt.hashSync(user.password,salt);
    user.password=hashedpassword;

 });
  
  return user;
};