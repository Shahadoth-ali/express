const express=require('express');
const app=express();
const port=3010;



app.get("/",(req,res)=>{
    res.send("hello rojina how are you?")
})


// app.get("/products/:id([0-9]+)",(req,res)=>{
//     res.send(`id=${req.params.id}`);
// })

// app.get("/products/:id([0-3]+)",(req,res)=>{
//     res.send(`id=${req.params.id}`);
// })

// app.get("/products/:id([0-9]{3})",(req,res)=>{
//     res.send(`id=${req.params.id}`);
// })

// app.get("/products/:title([a-zA-Z]+)",(req,res)=>{
//     res.send(`title=${req.params.title}`);
// })
app.get("/products/:title([a-zA-Z0-9]+)",(req,res)=>{
    res.send(`title=${req.params.title}`);
})



app.use("*",(req,res)=>{
    res.status(404).send({
        message:"not a valid route"
    })
})
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)

})