var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var api = require('./server/routes/api');
var app = express();
var port = process.env.PORT || 3000;



app.use(express.static(path.join(__dirname, 'dist/myMeanApp')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', api);

app.get('/',(req,res)=> {
  res.sendFile(path.join(__dirname,'dist/myMeanApp/index.html'));
}); 
app.listen(port, function(){
  console.log("listen to port 4200");
});
