const express=require('express');
const app=express();
const PORT=3020;

//**following code is for query parameter */

// app.get("/",(req,res)=>{
//    const id= req.query.id;
//     const name=req.query.name;
//  const {id,name}=req.query;
//     res.send(`student name is:${name}, id is:${id}`);
// })


//following code is for sending data by headers parameter

// app.get("/userId/:id/userAge/:age",(req,res)=>{
//    const id= req.params.id;
//    const age=req.params.age;
//     res.send(`student id is:${id} and age is:${age}`);
// })


app.get("/",(req,res)=>{
    const id=req.header('id');
    const name=req.header('name');
    res.send(`student id is:${id} and age is:${name}`);

})
app.listen(PORT,()=>{
   console.log(`server is running at http://localhost:${PORT}`);

})