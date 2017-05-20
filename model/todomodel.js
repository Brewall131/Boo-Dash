var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema ({
	todo: String,
	notes: String,
	isDone: Boolean
});

//convert our schema definition into a model that 
//we can work with
var Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;
//Todos will create a new instance of todoSchema 
//with access to all of the properties 
//that come with the Schema object from Mongoose