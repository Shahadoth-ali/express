const express=require('express');
const userRouter=require("./routes/users.route");

const app=express();
const port=3003;

app.get("/",(req,res)=>{
    res.send("hello this is shahadoth");
})




app.use(express.urlencoded({extended:true}));
app.use(userRouter);


app.use((req,res,next)=>{
    res.send("file is not found");
})
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);

})