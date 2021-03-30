const express = require("express");
const ejs = require("ejs");
const app = express();
const mongoose = require("mongoose");

app.use(express.static('public'));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("index");
})
app.get("/home",function(req,res){
    res.render("index");
})
app.get("/blog",function(req,res){
    res.render("blog");;
})
app.use(function(req,res){
    res.render("404");
})

app.listen(3000,function(){
    console.log("Listening at port 3000");
})
