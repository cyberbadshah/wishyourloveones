/*jshint esversion:6*/
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var newurl = "";
var change = "";
app.post("/",function(req,res){
    const tre = req.body.changetheurl;
    change = tre;
    newurl = "/"+tre;
    console.log(newurl);
    res.redirect(newurl);
    


})
app.get("/Wish",function(req,res){
    res.render("/home/kingfisher/Desktop/wishyourloveones/views/Wish");
});
// how to change the route with the previous input? 
// app.get("/",function(req,res){
//     res.sendFile("/home/kingfisher/Desktop/wishyourloveones/dist/index.html");
// });
// i want to change the url name

app.get("/",function(req,res){
    res.render("Wish",{rahulsaini:""});
});
app.get("/birth",function(req,res){
    res.render("birth",{rahulsaini:""});
});
app.get("/:pot",function(req,res){
    var id = req.params.pot;
    res.render("Wish",{rahulsaini:id});
});













app.listen(8755,function(){
    console.log("server is started on 8755");
});