const express=require('express');
const router=express.Router();





router.get("/register",(req,res)=>{
    res.send("<h1>i am register page</h>")
})
router.get("/login",(req,res)=>{
    res.send("i am login page")
})

module.exports=router;