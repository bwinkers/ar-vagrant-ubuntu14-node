// Load Moongoose 
var mongoose = require('mongoose');

// define the schema for our model
var countrySchema = mongoose.Schema({

    
});

// create the model for country and expose it to our app
module.exports = mongoose.model('Country', countrySchema);
