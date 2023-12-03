const express=require("express");
const app=express();
const PORT=3030;
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/",(req,res)=>{
    res.send("hello i am shahadoth's page");
})

app.get("/register",(req,res)=>{
res.sendFile(__dirname+"/index.html");
})

app.post("/register",(req,res)=>{
    const fullName=req.body.fullName;
    const age=req.body.age;
// res.send("hello");
res.send(`your name is:${fullName} and age is:${age}`)

})

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);

})