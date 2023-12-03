require("dotenv").config();
const express=require('express');
const app=express();
const PORT=process.env.PORT || 3000;


app.get("/",(req,res)=>{
res.send("hello dear jan rojina")    
})
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);

})