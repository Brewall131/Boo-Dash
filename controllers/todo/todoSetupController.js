//use the setup to create new schemas
var Todos = require('../../model/todoModel');

//will export a function that will take the app, and when
//a get request is sent to setupTodos, this will run
module.exports = function (app) {
	app.get('/api/setupTodos', function (req, res){
		//seed database 
		var starterTodos = [
			{
				todo: 'Get food for Ben',
				notes: 'Purina One Large Dog',
				isDone: false
			},
			{
				todo: 'Plan Orlando trip',
				notes: 'TJ and Grace, hotel, dinners, places to see?',
				isDone: false
			},
			{
				todo: 'Move to Orland',
				notes: 'get our asses over there',
				isDone: false
			}
		];

		//will call the create method on this Schema object
		//which will pass in our data and it takes the values
		//we set for the Todos.
		Todos.create(starterTodos, function (err, results){
			res.send(results);
		});
	});
}