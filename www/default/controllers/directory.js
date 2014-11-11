var ar = require('./activerules.js');

exports.landing = function(req, res) {
        res.render('pages/directory/landing', {
            title : res.__("page.directory.landing.html.title:Directory - Browse or Search for People and Businesses")
        });
    };
