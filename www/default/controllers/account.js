var arc = require('./ar-controller.js');

exports.landing = function(req, res) {
        res.render('pages/account/landing', {
            title : res.__("page.account.landing.html.title:Member Account Management, Billing and Authorization (MAMBA)"),
            layout: arc.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.account.alias:account'),
            ar_nl2 : null,
            ar_nl3 : null
        });
    };
    
exports.auths = function(req, res) {
        res.render('pages/account/auths', {
            title : res.__("page.account.auths.html.title:MAMBA - Login Options"),
            layout: arc.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.account.alias:account'),
            ar_nl2 : null,
            ar_nl3 : null
        });
    };
    
exports.contact = function(req, res) {
        res.render('pages/account/contact', {
            title : res.__("page.account.contact.html.title:MAMBA - Contact Information"),
            layout: arc.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.account.alias:account'),
            ar_nl2 : null,
            ar_nl3 : null
        });
    };
    
exports.billing = function(req, res) {
        res.render('pages/account/billing', {
            title : res.__("page.account.contact.html.title:MAMBA - Billing History"),
            layout: arc.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.account.alias:account'),
            ar_nl2 : null,
            ar_nl3 : null
        });
    };
    
exports.content = function(req, res) {
        res.render('pages/account/content', {
            title : res.__("page.account.content.landing.html.title:MAMBA - Account Content Manager (MAC)"),
            layout: arc.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.account.alias:account'),
            ar_nl2 : null,
            ar_nl3 : null
        });
    };
    
