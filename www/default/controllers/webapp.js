var ar = require('./activerules.js');

exports.landing = function(req, res) {
        res.render('pages/webapp/landing', {
            title : res.__("page.webapp.landing.html.title:Web Applications - Empower your visitors"),
            layout: ar.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.webapps.alias:apps'),
            ar_nl2 : null,
            ar_nl3 : null
        });
    };
    
exports.calendars = function(req, res) {
        res.render('pages/webapp/calendars', {
            title : res.__("page.webapp.calendar.html.title:Simple calendars - Cooridnate your visitors"),
            layout: ar.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.webapps.alias:apps'),
            ar_nl2 : 'ar-nl2-' + res.__('nav.calendars.alias:calendars'),
            ar_nl3 : null
        });
    };
    
exports.stories = function(req, res) {
        res.render('pages/webapp/stories', {
            title : res.__("page.webapp.stories.html.title:Stories - Inform and entertain your visitors"),
            layout: ar.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.webapps.alias:apps'),
            ar_nl2 : 'ar-nl2-' + res.__('nav.stories.alias:stories'),
            ar_nl3 : null
        });
    };
    
exports.maps = function(req, res) {
        res.render('pages/webapp/maps', {
            title : res.__("page.webapp.maps.html.title:Maps - Lead your viistors"),
            layout: ar.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.webapps.alias:apps'),
            ar_nl2 : 'ar-nl2-' + res.__('nav.maps.alias:maps'),
            ar_nl3 : null
        });
    };

exports.profiles = function(req, res) {
        res.render('pages/webapp/profiles', {
            title : res.__("page.webapp.profiles.html.title:Profiles - Showcase your members"),
            layout: ar.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.webapps.alias:apps'),
            ar_nl2 : 'ar-nl2-' + res.__('nav.profiles.alias:profiles'),
            ar_nl3 : null
        });
    };

