const authcontroller=require('../controller/auth.controller');


const routes=(app)=>{
    app.post('/signup',authcontroller.signup);

    app.post('/signin',authcontroller.signin);
}

module.exports= routes