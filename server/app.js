
const express=require('express')
const dotenv=require('dotenv')
const app=express();









dotenv.config({path:'./config.env'});

require('./db/conn.js');

app.use(express.json());


// we link the router file to make our route easy

app.use(require('./router/auth'));

const PORT=process.env.PORT;



const middleware=(req,res,next)=>{
console.log("hello my middleware");
next();
}



app.get('/',(req,res)=>{
    res.send("hello world");
})

//app.get('/about',middleware,(req,res)=>{
  //  res.send("hello about page")
//})

app.get('/contact',(req,res)=>{
    
    res.send("hello contact page")
})

app.get('/signin',(req,res)=>{
    res.send("hello login in page")
})

app.get('/signout',(req,res)=>{
    res.send("hello register out page")
})


app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
});