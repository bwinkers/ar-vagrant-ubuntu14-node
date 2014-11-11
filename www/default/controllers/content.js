var ar = require('./activerules.js');

exports.landing = function(req, res) {

    res.render('pages/content/landing', {
            title : res.__("page.content.landing.html.title:Search and Browse - focused on creative content"),
            layout: ar.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.content.alias:content'),
            ar_nl2 : null,
            ar_nl3 : null
        });
    };

    