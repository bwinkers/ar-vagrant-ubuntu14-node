exports.landing = function(req, res) {
        res.render('pages/shop/landing', {
            title : res.__("page.shop.landing.html.title:Shop Listings - Browse and Search")
        });
    };
    
exports.single = function(req, res) {
        res.render('pages/shop/single', {
            title : res.__("page.shop.single.html.title:Shop Information")
        });
    };
    
exports.manage = function(req, res) {
        res.render('pages/shop/manage', {
            title : res.__("page.shop.manage.html.title:Manage Shops")
        });
    };
    
exports.delete = function(req, res) {
        res.render('pages/shop/single', {
            title : res.__("page.shop.delete.html.title:Delete Shop")
        });
    };

exports.search = function(req, res) {
        res.render('pages/shop/search', {
            title : res.__("page.shop.search.html.title:Search Shops")
        });
    };
    
exports.browse = function(req, res) {
        res.render('pages/shop/browse', {
            title : res.__("page.shop.browse.html.title:Browse Shops")
        });
    };