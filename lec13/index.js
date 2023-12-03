const express=require('express');
const app=express();
const port=3000;

const myMiddleWare=(req,res,next)=>{
    console.log("middleware function");
    req.currentTime=new Date(Date.now());
    next();
}
app.use(myMiddleWare);

app.use((req,res,next)=>{
    res.send("404 page is not found");
})
app.use((err,req,res,next)=>{
    res.status(500).send("wrong path");
})

app.get("/",(req,res)=>{
    console.log("i am at home"+req.currentTime);
    res.send("hello world")
})
app.get("/about",(req,res)=>{
    console.log("i am at about"+req.currentTime);
    res.send("i am about route")
})
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);

})