// Load Moongoose 
var mongoose = require('mongoose');

// Automatically create a last modified date attribute that auto-updates
var lastMod = require('./lastMod');   

// define the schema for our model
var organizationSchema = mongoose.Schema({

    // The date this object was created
    createdDate             : { type: Date, default: Date.now },
    
});

organizationSchema.plugin(lastMod);

// create the model for organization and expose it to our app
module.exports = mongoose.model('Organization', organizationSchema);
