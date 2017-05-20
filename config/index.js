var configValues = require('./config');

module.exports = {

	getDbConnectionString: function () {
		return 'mongodb://' + configValues.uname +
		':'+ configValues.pwd + '@ds049631.mlab.com:49631/boo-dash';
	}

}