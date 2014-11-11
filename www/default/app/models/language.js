// Load Moongoose 
var mongoose = require('mongoose');

// define the schema for our model
var languageSchema = mongoose.Schema({

    
});

// create the model for language and expose it to our app
module.exports = mongoose.model('Language', languageSchema);
