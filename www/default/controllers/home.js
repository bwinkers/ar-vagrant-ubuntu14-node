exports.index = function(req, res) {
        res.render('pages/home', {
            title : res.__("page.home.html.title:Welcome")
        });
    };
