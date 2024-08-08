const express =require("express");
const { get, request } = require("http");
const app = express();

app.get("/",(request,response)=>{
    response.send("Hello world");
})

http://localhost5000/
app.listen(5000,()=>{
    console.log("Server çalıştı!");
})