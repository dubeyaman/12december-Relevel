const { verifytoken,signinuser } = require('../services/auth.services');

const isauthenticated=async(req,res,next)=>{

    const token=req.headers['x-access-token'];

    if(!token){
        try{
        return res.json({
            message:'jwt token is missing',
            code:401,
            err:'invalid argument in request header'
        });
    }catch(err){
        console.log(err);
    }
    }
try{
    const response=await verifytoken(token);
    if(!response){
        return res.json({
            message:'jwt token is wrong',
            code:401,
            err:'invalid argument in request header'
        });

    }

    const user= await signinuser(response.email);
    if(!user){
        return res.json({
            message:'jwt token is send for invalid user',
            code:401,
            err:'invalid argument in request header'
        });
    } 
    req.user=user;
}
catch(err){
    console.log(err);
}
  next();
}




module.exports={
    isauthenticated,
    
}