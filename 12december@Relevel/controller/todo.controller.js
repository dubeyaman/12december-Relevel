const todoservice=require('../services/todo.services');

const getAlltodo=async(req,res)=>{
    const response=await todoservice.getAlltodo();
    return res.json({
        
        status:true,
        todo:response
    })
}
const createtodo=async(req,res)=>{
    const response= await todoservice.createtodo(req.body);
    return res.json({
        message:"succesfully created the todo",
        status:true,
        todo:response
    })

}

const updatetodo=async(req,res)=>{
    const response=await todoservice.updatetodo(req.params.id,req.body);
    return res.json({
        message:"succesfully update the todo",
        status:true,
        todo:response
        })
}



module.exports={
    getAlltodo,
    createtodo,
    updatetodo,
    
    
}