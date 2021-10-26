const express = require("express");
  
// New app using express module
const app = express();

  
app.get("/", function(req, res) {
  if(error){
    res.json({
      "statusCode":'400',
      'body': {}
    })
  }else{
    res.json({
      "statusCode":'200',
      'body': {
        'number':10,
        'name':'phucnq'
      }
    })
  }
});
  
app.post("/api", function(req, res) {
  try{
    console.log(req.body.token);
  }catch(err){
    console.log(err);
  }
  res.json({
    test:200
  })
});
  
app.listen('https://flutter-zalo-khmt.herokuapp.com/')