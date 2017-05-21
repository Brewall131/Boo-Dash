var Needs = require ('../../model/needModel');

module.exports = function (app){
	app.get('/api/setupNeeds', function (req, res){
		var starterNeeds = [ 
			{
				need:"milk",
				note:"2%",
				isDone: false,
			},
			{
				need:"chicken",
				note:"10 lb bag",
				isDone: false,
			},
			{
				need:"dog food",
				note:"Purina One Large Breed",
				isDone: false,
			}
		];

		Needs.create('starterNeeds', function(err, results){
			res.send(results);
		});
	});
}