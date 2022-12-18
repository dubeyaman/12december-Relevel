const {todo,user}=require('../models/index');

const getAlltodo=async(req,res)=>{
    const response=await todo.findAll({include:user});
    return response;
}
const createtodo=async(data)=>{
    const response=await todo.create({
        todoTitle:data.todoTitle,
        isComleted:data.isComleted,
        userId:data.userId,

    });
    return response;
}

const updatetodo=async (id,data)=>{
    const response=await todo.update({
        todoTitle:data.todoTitle,
        isComleted:data.isComleted

    },{
        where:{
            id:id
        }
    })
    return response;
}

module.exports={
    getAlltodo,
    createtodo,
    updatetodo,
    
}