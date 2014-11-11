// Load Moongoose 
var mongoose = require('mongoose');

// Automatically create a last modified date attribute that auto-updates
var lastMod = require('./lastMod');   

// define the schema for our user model
var placeSchema = mongoose.Schema({

    // The date this object was created
    createdDate             : { type: Date, default: Date.now },
    
    // The country. For example, USA. 
    placeCountry          : String,
    
    // The locality. For example, Portage.
    placeLocality         : String,
    
    // The region. For example, WI.
    placeRegion           : String,
    
    //The post office box number for PO box placees.
    postOfficeBoxNumber     : String,
    
    // The postal code. For example, 53901.
    postalCode              : String,

    //The street place. For example, 123 Main Street.
    streetAddress           : String,

});

placeSchema.plugin(lastMod);

// create the model for users and expose it to our app
module.exports = mongoose.model('Place', placeSchema);