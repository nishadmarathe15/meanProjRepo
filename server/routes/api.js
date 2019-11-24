var express = require('express');
//var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

console.log("inside api.js")

// for parsing application/json
//app.use(bodyParser.json());
// for parsing application/xwww-
//app.use(bodyParser.urlencoded({ extended: true })); 


router.post('/', function(req, res,next){
    console.log("inside api post")
    var userReg = req.body; //Get the parsed information
    console.log(req.body);
    
    if(!userReg.emailId || !userReg.mobNo){
     //  res.render('show_message', {
       //   message: "Sorry, you provided worng info", type: "error"});
    } else {
       var newUser = [{
          "email_id": userReg.emailId,
          "mobile_number": userReg.mobNo,
       }];

       MongoClient.connect(url,function(err,db){
        if (err) throw err;
        var dbo = db.db("mac");
        
        dbo.collection("mac_user_registration_master").insertMany(newUser,function(err,res){
            if (err) throw err;
            console.log(res.insertedCount + " rows inserted");
            db.close();
        })
    
    });

    }

});

   

module.exports = router;



