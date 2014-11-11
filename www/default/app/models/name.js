// Load Mongoose with schema extension library
var mongoose = require('mongoose'),
    extend = require('mongoose-schema-extend');

// Create the eextendable schema object
var Schema = mongoose.Schema;

// Define the base name schema which subtypes extend
var NameSchema = new Schema({
  name : String
}, { collection : 'names', discriminatorKey : '_type' });

var FullNameSchema = NameSchema.extend({
  fullName : String
});

var FirstLastNameSchema = NameSchema.extend({
  firstName : String,
  lastName : String
});

var LegalNameSchema = NameSchema.extend({
  legalName : String
});

var CommonNameSchema = NameSchema.extend({
  commonName : String
});

var DbaNameSchema = NameSchema.extend({
  dbaName : String
});

// Create the ouput object using the definitions above
var Name = mongoose.model('name', NameSchema),
    FullName = mongoose.model('fullname', FullNameSchema),
    FirstLast = mongoose.model('firstlast', FirstLastNameSchema),
    Legal = mongoose.model('legal', LegalNameSchema),
    Common = mongoose.model('common', CommonNameSchema),
    Dba = mongoose.model('dba', DbaNameSchema);

// create the model for ActiveRules names and expose it to our app
module.exports = mongoose.model('Name', Name);
