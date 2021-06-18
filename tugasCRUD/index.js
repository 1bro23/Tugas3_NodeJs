let express = require("express");
let app = express();

app.get("/",function(req,res){
  res.send("test coy")
})

let bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({
  extended:true
}));
app.use(bodyparser.json());

let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tugasCRUD",{useNewUrlParser:true, useUnifiedTopology:true});
mongoose.connection;

let router = require("./api-routes");
app.use("/api",router);

let port = process.env.port || 8080;
app.listen(port,function(){
  console.log("server run at localhost:"+port)
});
