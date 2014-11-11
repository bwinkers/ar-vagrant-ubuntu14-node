var ar = require('./activerules.js');

exports.landing = function(req, res) {
        res.render('pages/account/images/landing', {
            title : res.__("page.account.image.landing.html.title:Manage Account Images")
        });
    };
