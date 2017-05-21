var express = require('express');
var app = express();
var mongoose = require ('mongoose');
//not using ejs yet until i need a template
//var ejs = require ('ejs');

//requiring my own instructions
var config = require('./config');

//todo resources
var todoSetupController = require('./controllers/todo/todoSetupController');
var apiTodoController = require ('./controllers/todo/apiTodoController');

//need resources
var needSetupController = require('./controllers/need/needSetupController');
var apiNeedController = require ('./controllers/need/apiNeedController');

//article resources

//randomThought resources


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

//run the function to listen for the api calls for todos
todoSetupController(app);
apiTodoController(app);

//run the function for the need api calls
needSetupController(app);
apiNeedController(app);

app.listen(port);
