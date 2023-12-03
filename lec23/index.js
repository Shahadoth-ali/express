const express=require("express");
const userRoutes=require("./routes/user");
// const userRoutes = require("./routes/user");
// const { body, validationResult } = require("express-validator");
const app=express();
const port=3001;

app.use("/api",userRoutes);
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// app.get("/test",(req,res)=>{
//     res.send("testing the server");
// })




app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);

})


