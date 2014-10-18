// config/database.js
var mongoose    = require('mongoose');  // Mongo database model/schema 

mongoose.connect('mongodb://localhost/Izzup'); // connect to our database

module.exports = {

	'mongoose' :  mongoose

};