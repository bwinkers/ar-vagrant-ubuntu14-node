module.exports = {

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
    
    // Determine which layout to return
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
    },
    
    // Map a hostname to a site alias
    getSite: function (req) {

        // get the hostname
        var hostname = req.host;
        
        var siteAlias = 'default';
        
        // try and map the hostname to a site alias
        switch(hostname) {
            case 'dev.izzup.com':
            case 'local.izzup.com':
            case 'www.izzup.com':
                siteAlias = 'izzup';
                break;
            case n:
                //
                break;
            default:
                //default code block
        }

        return siteAlias;
    },
    
    // Load a site JSON config object
    loadSite: function (siteAlias) {
        var fs = require('fs');
        var obj;
        fs.readFile('file', 'utf8', function (err, data) {
            if (err) throw err;
            obj = JSON.parse(data);
        });
    }
    
    

};
