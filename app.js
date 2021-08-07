const express = require("express");
const morgan = require('morgan');

//routes

const productRouter = require("./routes/productRoute");

connst userRouter = require("./routes/userRouter");

//middlewares for accepting responses
const app=express();
app.use(express.json());

//MIDDLEWARES
if(process.env.NODE_ENV="development"){
	app.use(morgan('dev'));
};

//for making request without error with react
//in official language called cors error handling
app.use((req,res,next) =>{
	//res.header("Access-Control-Allow-Credentials","true");
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,x-auth-token, Content-Type, Accept,Authorization");
	res.header("Access-Control-Allow-Methods","GET,OPTIONS,POST,PUT,PATCH,DELETE");
	next();
});

app.get('/',(req,res)=>{
  res.send("This is UFF backend");
});

//all route files

app.use('/app/v1/products',productRouter);



app.use('/app/v1/users',userRouter);


module.exports = app;
