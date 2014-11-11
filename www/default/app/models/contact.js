// Load Moongoose 
var mongoose = require('mongoose');

// Automatically create a last modified date attribute that auto-updates
var lastMod = require('./lastMod');   

// Require sub document schemas
var AdministrativeArea      = require('./administrativearea');
var Language                = require('./language');
var Hours                   = require('./hours');
var ContactOption           = require('./contactoption');
var Url                     = require('./url');

// define the schema for our user model
var contactSchema = mongoose.Schema({

    // The date this object was created
    createdDate             : { type: Date, default: Date.now },

    // The location served by this contact point (e.g., a phone number intended for Europeans vs. North Americans or only within the United States.)
    areaServed              : [AdministrativeArea.schema],
    
    // A language someone may use with the item.
    availableLanguage       : [Language.schema],
    
    // 	Email address.
    email                   : String, 
    
    // The fax number.
    faxNumber               : String, 
    
    // 	The hours during which this contact point is available.
    hoursAvailable          : [Hours.schema],
    
    telephone               : String,
    
    url                     : [Url.schema],
    
    image                   : [Url.schema]
 
});

contactSchema.plugin(lastMod);

// create the model for users and expose it to our app
module.exports = mongoose.model('Contact', contactSchema);
