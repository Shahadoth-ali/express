const express=require("express");
const app=express();
const port=3008;

app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
app.listen(port,(req,res)=>{
    console.log(`server is running at http://localhost:${port}`);

})