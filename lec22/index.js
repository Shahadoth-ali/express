const express=require("express");
const chalk=require("chalk");
const app=express();
const port=3002;


app.listen(port,()=>{
    console.log(chalk.blue.bold(`server is running at http://localhost:${port}`));

})

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500');

console.error(error("this is error"));

app.get("/products",(req,res)=>{
    res.send("list all the products");
})