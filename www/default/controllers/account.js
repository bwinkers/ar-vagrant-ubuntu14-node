// Include some basic ActiveRules functions, developers should know these.
var ar = require('./activerules.js');

// The Person schema. contains multiple sub-documents.
var Person = require('../app/models/person.js');

exports.landing = function(req, res) {
        res.render('pages/account/landing', {
            title : res.__("page.account.landing.html.title:Member Account Management, Billing and Authorization (MAMBA)"),
            layout: ar.vLayout(req),
            user : req.user,
            loggedIn : req.isAuthenticated(),
            ar_nl1 : 'ar-nl1-' + res.__('nav.account.alias:account'),
            ar_nl2 : null,
            ar_nl3 : null
        });
    };
    
exports.auths = function(req, res) {
        res.render('pages/account/auths', {
            title : res.__("page.account.auths.html.title:MAMBA - Login Options"),
            layout: ar.vLayout(req),
            user : req.user,
            loggedIn : req.isAuthenticated(),
            ar_nl1 : 'ar-nl1-' + res.__('nav.account.alias:account'),
            ar_nl2 : 'ar-nl2-' + res.__('nav.account.alias:account') + '-' + res.__('nav.account.credentials.alias:credentials'),
            ar_nl3 : null
        });
    };
    
exports.contact = function(req, res) {
    
        // default contact data
        var contactPerson = null;
    
        // Get this 
        Person.find({ personId: req.user.personId }, function(err, contactPerson) {
            if (err) {
                // No Contact found
                contactPerson = 'error';
            } else {
                
            }
        });

        res.render('pages/account/contact', {
            title       : res.__("page.account.contact.html.title:MAMBA - Contact Information"),
            layout      : ar.vLayout(req),
            user        : req.user,
            loggedIn    : req.isAuthenticated(),
            ar_nl1      : 'ar-nl1-' + res.__('nav.account.alias:account'),
            ar_nl2      : 'ar-nl2-' + res.__('nav.account.alias:account') + '-' + res.__('nav.account.contact.alias:contact'),
            ar_nl3      : null,
            contact     : contactPerson
            
        });
    };
    
exports.billing = function(req, res) {
        res.render('pages/account/billing', {
            title : res.__("page.account.contact.html.title:MAMBA - Billing History"),
            layout: ar.vLayout(req),
            user : req.user,
            loggedIn : req.isAuthenticated(),
            ar_nl1 : 'ar-nl1-' + res.__('nav.account.alias:account'),
            ar_nl2 : 'ar-nl2-' + res.__('nav.account.alias:account') + '-' + res.__('nav.account.billing.alias:billing'),
            ar_nl3 : null
        });
    };
    
exports.content = function(req, res) {
        res.render('pages/account/content', {
            title : res.__("page.account.content.landing.html.title:MAMBA - Account Content Manager (MAC)"),
            layout: ar.vLayout(req),
            user : req.user,
            loggedIn : req.isAuthenticated(),
            ar_nl1 : 'ar-nl1-' + res.__('nav.account.alias:account'),
            ar_nl2 : 'ar-nl2-' + res.__('nav.account.alias:account') + '-' + res.__('nav.account.content.alias:content'),
            ar_nl3 : null
        });
    };
    
