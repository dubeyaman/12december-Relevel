const authservice=require('../services/auth.services')
var jwt=require('jsonwebtoken');

require('dotenv').config();

const signup= async(req,res)=>{
    const response= await authservice.signupuser(req.body);
    return res.json({
        message:"succesfuuly signed in",
        success: true,
        code:200,
        data:response
    })
}

const signin=async(req,res)=>{
    const response= await authservice.signinuser(req.body.email);
    if(!response){
        return res.json({

        message:"email id is incorrect,please try again",
        success: true,
        code:400,
        

        })
        
    }
    else{
        let response1=await authservice.verifypassword(req.body.password,response.password);
        if(response1){
         var token=jwt.sign({email:response.email, password:response.password,username:response.username},process.env.jwt_secret_key);
            return res.json({
                message:"signed in",
                success: true,
                code:200,
                data:response,
                token:token,
        
                })

        }
        else{
            return res.json({
                message:"password is incorrect,please try again",
                success: true,
                code:400,
          })
        }

    }
    

}
module.exports={
    signup,
    signin
}

