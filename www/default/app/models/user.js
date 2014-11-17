// Load Moongoose and library to allow schema object extension
var mongoose            = require('mongoose');

// Load bcrypt library to securely encrypt password
var bcrypt              = require('bcrypt-nodejs');

// Automatically create a last modified date attribute that auto-updates
var lastMod             = require('./lastMod');   

// define the schema for our user model
var userSchema = mongoose.Schema({
    
    createdDate         : { type: Date, default: Date.now },

    local               : {
        email           : String,
        password        : String        
    },
    facebook            : {
        id              : String,
        token           : String,
        email           : String,
        name            : String
    },
    twitter             : {
        id              : String,
        token           : String,
        displayName     : String,
        username        : String
    },
    google              : {
        id              : String,
        token           : String,
        email           : String,
        name            : String
    },

});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

userSchema.plugin(lastMod);

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
