var ar          = require('../activerules.js');

var Person      = require('../../app/models/person')

exports.read = function(req, res) {
    var contact = new Person({
        first_name : req.body.firstName,
        last_name : req.body.lastName,
        email_address: req.body.emailAddress,
        mobile_number : req.body.mobileNumber
    }).save(function(err,docs){
        if(err) throw err;


        res.send(docs);
    });
};

exports.create = function(req, res) {
    // Create the Person object used to model an account contact and load it with the JSON object.
    var contact = new Person(req.body);
    // Set the Person object userId to the logged in user Id.
    // People who do not have logins would have a null value for userId.
    contact.userId = req.user._id;
    // Use the Backbone save function to automagically create the new object
    contact.save(function(err,created){
        if (err) {
            res.json({error: 'Unable to create contact.'});
        } else {
            res.json(created);
        }
    });
};
    
exports.update = function(req, res) {
    // Create the Person object used to model an account contact and load it with the JSON object.
    var contact = new Person(req.body);
    // There is a 1-to-1 relationship here so we update the one record for the logged in userId.
    // Set the Person object userId to the logged in user Id.
    // People who do not have logins would have a null value for userId.
    contact.userId = req.user._id;
    var obj = req.body;
    delete obj._id;
    contact.update(obj, function(err, updated) {
        if (err) {
            res.json({error: err});
        } else {
            res.json(req.body);
        }
    });
};
    
exports.del = function(req, res) {
    // Create the Person object used to model an account contact and load it with the JSON object.
    var contact = new Person(req.body);
    // There is a 1-to-1 relationship here so we update the one record for the logged in userId.
    // Set the Person object userId to the logged in user Id.
    // People who do not have logins would have a null value for userId.
    contact.userId = req.user._id;

    contact.remove(function(err, deleted) {
        if (err) {
            res.json({error: err});
        } else {
            res.json({status: 'success'});
        }
    });
};
