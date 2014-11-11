// Load Moongoose 
var mongoose            = require('mongoose');

// Automatically create a last modified date attribute that auto-updates
var lastMod             = require('./lastMod');   

// Address schema
var Address             = require('./address');

// Organization schema
var Organization        = require('./organization');

//  Contact schema
var Contact             = require('./contact');

//  Country schema
var Country             = require('./country')

// define the schema for our user model
var personSchema = mongoose.Schema({

    // The date this object was created
    createdDate: { type: Date, default: Date.now },

    // The name
    name                : String,
    
    // Given name. In the U.S., the first name of a Person. This can be used along with familyName instead of the Name property.
    givenName           : String,
    
    // An alias for the person.
    alternateName       : String,
    
    // An additional name for a Person, can be used for a middle name.
    additionalName      : String, 
    
    // An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.
    honorificPrefix     : String,
    
    // An honorific suffix preceding a Person's name such as M.D. /PhD/MSCSW.
    honorificSuffix     : String,
    
    // The job title of the person (for example, Financial Manager).
    jobTitle            : String, 
    
    // Description or note about the person
    description         : String, 
    
    // An image of the person. This can be a URL or a fully described ImageObject.
    image               : String,
    
    // URL of the item
    url                 : String,
    
    // Contact Options
    email               : String,
    faxNumber           : String,
    telephone           : String,
    
    // Address for the person
    address             : [Address.schema],
    // Contact Points
    contactPoint        : [Contact.schema],
    homeLocation        : [Contact.schema],
    workLocation        : [Contact.schema],
    
    // Organization the perposn belongs to
    affiliation         : [Organization.schema],
    
    // 	Bio data.
    birthdate           : Date,
    deathDate           : Date,
    gender              : String,
    nationality         : [Country.schema], 

    // Concreate Relations
   children            : [this],
   // colleague           : [Person.schema],
   // parent              : [Person.schema],
   // sibling             : [Person.schema],
   // spouse              : [Person.schema],
    worksFor            : [Organization.schema],
    
    // Conceptual Relations
    // The most generic uni-directional social relation.
    // follows             : [Person.schema],
    // The most generic bi-directional social/work relation.
    // knows               : [Person.schema],
    
    // Tracking data
    interactionCount    : String,
    
});

personSchema.plugin(lastMod);

// create the model for users and expose it to our app
module.exports = mongoose.model('Person', personSchema);
