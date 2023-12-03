const express=require("express");
const { body, validationResult } = require("express-validator");
const userRoutes=express.Router();


//register
userRoutes.post("/register",
//input validation
body("name")
.trim()
.notEmpty().
withMessage("name is required")
.isLength({min:5})
.withMessage("name should have atleast 5 characters")
.isLength({max:10})
.withMessage("name can have 10 character"),
//email
body("email")
.trim()
.notEmpty().
withMessage("email is required")
.isEmail()
.withMessage("not a valid email"),

//password
body("password")
.trim()
.notEmpty().
withMessage("password is required")
.isLength({min:5})
.withMessage("password should have atleast 5 characters")
.isLength({max:10})
.withMessage("password can have 10 character"),
//password
body("dob")
.trim()
.notEmpty().
withMessage("dob is required")
.isISO8601()
.toDate()
.withMessage("not a valid date")
,

(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors:errors.array()
        });
    }
    next();
}

,

(req,res)=>{
    try {
        const {name,email,password,dob}=req.body;
        const newUser={
            name,email,password,dob
        }
        return res.status(201).json({
            message:"user was created",
            newUser
        })
    } catch (error) {
        return res.json({
            message:error.message
        })
    }
})
//for login
userRoutes.post("/login",
//email
body("email")
.trim()
.notEmpty().
withMessage("email is required")
.isEmail()
.withMessage("not a valid email"),

//password
body("password")
.trim()
.notEmpty().
withMessage("password is required")
.isLength({min:5})
.withMessage("password should have atleast 5 characters")
.isLength({max:10})
.withMessage("password can have 10 character"),

(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors:errors.array()
        });
    }
    next();
}

,(req,res)=>{
    try {
        const{email,password}=req.body;
   if(email==='md.sahadat.live@gmail.com'&&
   password==='12345'){
    return res.status(200).json({
        message:"user was loggedin",
   
    })
   } else{
    return res.status(400).json({
        message:"email/password doesnot match",
   
    })
   } 
        
    } catch (error) {
        return res.json({
            message:error.message
        })
    }
})

module.exports=userRoutes;