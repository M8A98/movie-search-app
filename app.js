var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/",function(req, res) {
   res.render("search"); 
});

app.get("/results",function(req,res){
   request("http://www.omdbapi.com/?s=spiderman&apikey=thewdb ",function(error,response,body){
      if(!error && response.statusCode == 200){
          var data = JSON.parse(body);
          //res.send(results["Search"][0]);
          res.render("results",{data : data});
      } 
   });
});

app.get("*",function(req,res){
   res.send("<h1>Page was not found</h1>") 
});


app.listen(process.env.PORT,process.env.IP,function(){
   console.log("Server has started!") ;
});