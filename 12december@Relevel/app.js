const express=require('express');
const app=express();
const bodyparser=require('body-parser')
const authroutes=require('./routes/auth.route');
const todoroutes=require('./routes/todo.routes')

const {serverport}=require('./config/server.config');
const { sequelize } = require('./models');

app.use(bodyparser.urlencoded({extended:true}));

 authroutes(app);
 todoroutes(app)

app.listen(serverport,async()=>{
    await sequelize.sync()
    console.log("server is listening to port",serverport);
})





