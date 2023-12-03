const express=require('express');
const bodyParser=require('body-parser');

const app=express();
const port=3005;

//body parser er jonno ai code website hote copy kore ante hbe
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())



app.get("/",(req,res)=>{
   res.sendFile(__dirname+"/index.html");

})
app.get("/circle",(req,res)=>{
    res.sendFile(__dirname+"/circle.html");
})
//this is for posting,data posting korle ekhane niye jabe
app.post("/circle",(req,res)=>{
   const radius=req.body.radius;
   const area=3.1416*radius*radius;
   res.send(`Area of circle is:${area}`);
})

app.get("/triangle",(req,res)=>{
res.sendFile(__dirname+"/triangle.html");
})
//this is for posting,data post korle ekhane niye jabe
app.post("/triangle",(req,res)=>{
const height=req.body.height;
const base=req.body.base;
const area=0.5*base*height;
res.send(`Area of triangle is:${area}`);
})
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);

})