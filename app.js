/*jshint esversion:6*/
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    res.render("list");
});














app.listen(8755,function(){
    console.log("server is started on 8755");
});