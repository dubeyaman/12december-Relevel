const { user } = require('../models/index');
const bcrypt=require('bcryptjs')
var jwt=require('jsonwebtoken');


const signupuser=async(data)=>{
   const response=await user.create({
        username: data.username,
        email:data.email,
        password:data.password,
    })
    return response;
}

const signinuser=async(data)=>{
    const response=await user.findOne({
        where:{
            email:data
        }
    })
    return response;
}

const verifypassword=async(password,hassedpassword)=>{
    return bcrypt.compareSync(password,hassedpassword);
}

const verifytoken=async(token)=>{
    const response=jwt.verify(token,process.env.jwt_secret_key);
}
module.exports={
    signupuser,
    signinuser,
    verifypassword,
    verifytoken
}

