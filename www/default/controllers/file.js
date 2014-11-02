exports.landing = function(req, res) {
        res.render('pages/account/file/landing', {
            title : res.__("page.account.file.landing.html.title:File Manager")
        });
    };
