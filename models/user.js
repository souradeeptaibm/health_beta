
var mongoose = require('mongoose');

module.exports = mongoose.model('User',{
	id: String,
	uid: String,
	username: String,
	password: String,
	email: String,
	firstName: String,
	lastName: String,
	mobile: Number,
	location: String
});