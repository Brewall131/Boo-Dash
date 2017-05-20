var express = require('express');
var app = express();
var mongoose = require ('mongoose');
//not using ejs yet until i need a template
//var ejs = require ('ejs');

//requiring my own instructions
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require ('./controllers/apiController');

//setting the port to a preset deployed location 
//or 3000 on localhost
var port = process.env.PORT || 3000;

//would like to set this as my homepage
app.use('/', express.static(__dirname + '/public'));

//connect to the database using config files
mongoose.Promise = global.Promise;
mongoose.connect(config.getDbConnectionString());
//send app through to the setupController so that 
//it will run the function of listening for the api call
setupController(app);
apiController(app);

app.listen(port);
