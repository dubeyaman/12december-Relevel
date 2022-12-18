const todocontroller=require('../controller/todo.controller');
const middlewares=require('../middlewares/authorization')

const routes=(app)=>{
    app.get('/getitems',middlewares.isauthenticated ,todocontroller.getAlltodo);

    app.post('/createtodo',middlewares.isauthenticated,todocontroller.createtodo);

    app.put('/gettodo/:id',middlewares.isauthenticated ,todocontroller.updatetodo);
}
module.exports=routes;