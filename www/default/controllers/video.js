var ar = require('./activerules.js');

exports.landing = function(req, res) {
        res.render('pages/account/video/landing', {
            title : res.__("page.account.video.landing.html.title:Manage Account Videos")
        });
    };
