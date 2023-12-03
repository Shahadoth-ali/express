const express=require('express');
const app=express();
const userRouter=require("./routes/users.route");


app.use("/api/user",userRouter);

app.use("/register",(req,res)=>{
//    res.status(200).json({
//     name:"md shahadoth ali",
//     message:"hi dear rojina",
//     statusCode:200
//    })
res.statusCode=200;
res.sendFile(__dirname+"/views/register.html");
})
app.use("/login",(req,res)=>{
// res.cookie("name","rabeya");
// res.cookie("age","30");
res.clearCookie("name");
res.append("id","117");
res.end();
})

app.get("/",(req,res)=>{
    res.statusCode=200;
    res.sendFile(__dirname+"/views/index.html");
})



app.use((req,res)=>{
    res.send("page is not find.")
})




module.exports=app;