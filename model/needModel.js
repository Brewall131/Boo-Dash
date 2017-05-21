var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var needSchema = new Schema ({
	need: String,
	note: String,
	isDone: Boolean
});

var Needs = mongoose.model('Needs', needSchema);

module.exports = Needs;