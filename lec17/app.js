const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');

const usersRouter=require('./routes/users.route');

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/users",usersRouter);


// app.get("/users",(req,res)=>{
//     res.status(200).json({users})
// })



//home route
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

//route for error api
app.use((req,res,next)=>{
    res.send("404! page is not found")
})
//server error
app.use((err,req,res,next)=>{
    res.sendStatus(500).json({
        message:"something broke!"
    })
})



module.exports=app;