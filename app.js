const express = require("express");
const app = express();
app.use(express.static('public'));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})
app.get("/home",function(req,res){
    res.sendFile(__dirname + "/index.html");
})
app.get("/blog",function(req,res){
    res.sendFile(__dirname + "/blog.html");
})
app.get("/contact",function(req,res){
    res.sendFile(__dirname + "/contact.html");
})
// app.get("/about",function(req,res){
//     res.sendFile(__dirname + "/about.html");
// })

app.listen(3000,function(){
    console.log("Listening at port 3000");
})
