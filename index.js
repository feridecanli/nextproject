const express =require("express");
const { get, request } = require("http");
const app = express();

app.get("/",(request,response)=>{
    response.send("Hello world");
})

http://localhost:3000
app.listen(3000,()=>{
    console.log("Server çalıştı!");
})