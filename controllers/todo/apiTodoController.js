//I Put some messages into the asynchronous callbacks to 
//help make testing easier!

var Todos = require ('../../model/todoModel');
var bodyParser = require ('body-parser');

module.exports = function(app){
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));



	//works!
	//post = create
	app.post('/api/todos', function (req, res){	
		var newTodo = Todos({
			todo: req.body.todo,
			notes: req.body.notes,
			isDone: req.body.isDone
		});

		newTodo.save(function(err){
			if (err) throw err;
			res.send('Successfully created a new todo!');
		});

	});

	// works!
	//get = read
	//this will show all of the current todos
	app.get('/api/todos', function (req, res){
		Todos.find({}, function(err, results){
			if (err) throw err;
			res.send('successfully got the todos!'
			 + results);
		});
	})

	//getting the successful message, but it doesn't update
	//put/patch = update
	app.put('/api/todos', function(req, res){
		Todos.findByIdAndUpdate(req.body.id, {
			todo: req.body.todo,
			notes: req.body.notes,
			isDone: req.body.isDone
				//why am i using todo as an argument passed in?
		}, function (err, todo) {
			if (err) throw err;
			res.send('Successfully updated todo!');
		});
	});

	// not sure I am putting this in correctly because
	// I get an error back. probably written wrong or 
	// passing in the wrong info.
	//delete = delete
	app.delete('/api/todos/:id', function(req, res){
		Todos.findByIdAndRemove(req.body.id, function (err){
			if (err) throw err;
			res.send('Successfully deleted the todo item');
		});
	});
};

