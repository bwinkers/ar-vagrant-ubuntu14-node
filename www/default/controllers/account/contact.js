var ar          = require('../activerules.js');

var Person      = require('../../app/models/person')

exports.read = function(req, res) {
    var contact = new Person({
            first_name :req.body.firstName,
            last_name :req.body.lastName,
            email_address:req.body.emailAddress,
            mobile_number :req.body.mobileNumber
        }).save(function(err,docs){
            if(err) throw err;
            
            
            res.send(docs);
        });
    };

exports.create = function(req, res) {
    var contact = new Person({
            first_name :req.body.firstName,
            last_name :req.body.lastName,
            email_address:req.body.emailAddress,
            mobile_number :req.body.mobileNumber
        }).save(function(err,docs){
            if(err) throw err;
            res.send(docs);
        });
    };
    
exports.update = function(req, res) {
        res.render('pages/people/landing', {
            title : res.__("page.people.landing.html.title:People - Find the right person"),
            layout: ar.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.people.alias:people'),
            ar_nl2 : null,
            ar_nl3 : null
        });
    };
    
exports.delete = function(req, res) {
        res.render('pages/people/landing', {
            title : res.__("page.people.landing.html.title:People - Find the right person"),
            layout: ar.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.people.alias:people'),
            ar_nl2 : null,
            ar_nl3 : null
        });
    };
    

