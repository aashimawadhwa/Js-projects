const express = require("express");
const app = express(); 
app.use(express.urlencoded({extended: true}));

app.get("/" , function(req, res){
      res.sendFile(__dirname+"/index.html");
});
app.post("/", function (req , res){
    var num1 = req.body.num1;
    var num2 = req.body.num2;

    var
})

app.listen(3000 ,function(){
    console.log("server started on port 3000");
});