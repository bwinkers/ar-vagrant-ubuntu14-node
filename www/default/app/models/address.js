// Load Moongoose 
var mongoose = require('mongoose');

// Automatically create a last modified date attribute that auto-updates
var lastMod = require('./lastMod');   

// define the schema for our user model
var addressSchema = mongoose.Schema({

    // The date this object was created
    createdDate             : { type: Date, default: Date.now },
    
    // The country. For example, USA. 
    addressCountry          : String,
    
    // The locality. For example, Portage.
    addressLocality         : String,
    
    // The region. For example, WI.
    addressRegion           : String,
    
    //The post office box number for PO box addresses.
    postOfficeBoxNumber     : String,
    
    // The postal code. For example, 53901.
    postalCode              : String,

    //The street address. For example, 123 Main Street.
    streetAddress           : String,

});

addressSchema.plugin(lastMod);

// create the model for users and expose it to our app
module.exports = mongoose.model('Address', addressSchema);