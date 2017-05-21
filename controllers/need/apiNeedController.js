var Needs = require ('../../model/needModel');
var bodyParser = require ('body-parser');

module.exports = function(app){
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));

	//
	//post = create
	app.post('/api/needs', function (req, res){	
		var newNeed = Needs({
			need: req.body.need,
			note: req.body.note,
			isDone: req.body.isDone
		});

		newNeed.save(function(err){
			if (err) throw err;
			res.send('Successfully created a new need!');
		});
	});

	// 
	//get = read
	//this will show all of the current todos
	app.get('/api/needs', function (req, res){
		Needs.find({}, function(err, results){
			if (err) throw err;
			res.send('successfully got the needs!'
			 + results);
		});
	});
}