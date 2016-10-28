var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/';

app.use(express.static('Task-It'));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "/index.html");
});

router.get("/tasks",function(req,res){
  res.sendFile(path + "/tasks.html");
});

router.get("/feed",function(req,res){
  res.sendFile(path + "/feed.html");
});

router.get("/groups1",function(req,res){
  res.sendFile(path + "/groups1.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
