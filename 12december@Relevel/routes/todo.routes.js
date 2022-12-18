const todocontroller=require('../controller/todo.controller');

const routes=(app)=>{
    app.get('/getitems', todocontroller.getAlltodo);

    app.post('/createtodo',todocontroller.createtodo);

    app.put('/gettodo/:id',todocontroller.updatetodo);
}
module.exports=routes;