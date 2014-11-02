module.exports = {

    // Get the nav path elemnst to be highlighted
    navPath: function (req, res) {

    },

    // route middleware to ensure user is logged in
    requireLogin: function (req, res, next) {
            if (req.isAuthenticated())
                    return next();

            res.redirect('/auth');
    },

    // route middleware to ensure user is logged in
    isLoggedIn: function (req, res, next) {
            if (req.isAuthenticated())
                    return true;

            return false;
    },
    
    vLayout: function (req, layout) {

        if(layout) {
            var vlayout =  layout;
        } else {
            var vlayout = 'main';
        }

        var is_ajax_request = req.xhr;

        if(is_ajax_request) {
            vlayout = 'spa';
        } 

        return vlayout;
    }

};
