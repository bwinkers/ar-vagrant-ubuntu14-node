var ar = require('./activerules.js');

exports.landing = function(req, res) {
        res.render('pages/story/landing', {
            title : res.__("page.story.landing.html.title:Stories provide a multimedia representation of anything."),
            layout: ar.vLayout(req),
            user : req.user,
            ar_nl1 : 'ar-nl1-' + res.__('nav.stories.alias:stories'),
            ar_nl2 : null,
            ar_nl3 : null
        });
    };
