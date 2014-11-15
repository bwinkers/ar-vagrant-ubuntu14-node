var ar = require('../activerules.js');

exports.create = function(req, res) {
        res.render('pages/people/landing', {
            title : res.__("page.people.landing.html.title:People - Find the right person"),
            layout: ar.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.people.alias:people'),
            ar_nl2 : null,
            ar_nl3 : null
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