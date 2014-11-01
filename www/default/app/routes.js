module.exports = function(app, passport) {
    
    i18n = app.get('i18n');
    
    var home = require('../controllers/home');

    if(app.settings.env == 'development') {
        console.log('The Routes know the enviro');
    }
    
// default route ===============================================================

    // show the home page (will also have our login links)
    app.get('/', home.index);
        
// =============================================================================
// Static page routes for serving SEO pages
// =============================================================================

    // Shops landing page ==============================
    app.get('/' + i18n.__('nav.shops.alias'), function(req, res) {
        res.render('pages/shops', {
            title : res.__('page.shops.html.title:Shops'),
            layout: vLayout(req)
        });
    });

    // Shop layout ==============================
    app.get('/' + i18n.__('nav.shop.alias'), function(req, res) {
        res.render('pages/shop', {
                title : res.__('page.shop.html.title:Shop'),
                layout: vLayout(req)
        });
    });

    // Stories landing page ==============================
    app.get('/' + i18n.__('nav.stories.alias'), function(req, res) {
        res.render('pages/stories', {
            title : res.__('page.stories.html.title:Stories'),
         //   activenav : res.__('page.stories.html.title:Stories'),
            layout: vLayout(req)
        });
    });

    // Story layout ==============================
    app.get('/' + i18n.__('nav.story.alias'), function(req, res) {
        res.render('pages/story', {
                title : res.__('page.story.html.title:Story'),
                layout: vLayout(req)
        });
    });

    // People landing page ==============================
    app.get('/' + i18n.__('nav.people.alias'), function(req, res) {
        res.render('pages/people', {
            title : res.__('page.people.html.title:People'),
            layout: vLayout(req) 
        });
    });

    // Profile route ==============================
    app.get('/' + i18n.__('nav.profile.alias'), function(req, res) {
            res.render('pages/profile', {
                title : res.__('page.profile.html.title:Profile'),
                layout: vLayout(req)
            });
    });

    // Content route ==============================
    app.get('/' + i18n.__('nav.content.alias'), function(req, res) {
            res.render('pages/content', {
                title : res.__('page.content.html.title:Content'),
                layout: vLayout(req) 
            });
    });

    // Apps route ==============================
    app.get('/' + i18n.__('nav.webapps.alias'), function(req, res) {
        res.render('pages/apps', {
            title : res.__('page.apps.html.title:Apps'),
            layout: vLayout(req) 
        });
    });

    // Profile application route ==============================
    app.get('/' + i18n.__('nav.webapps.alias') + '/' + i18n.__('nav.webapps.profiles.alias'), function(req, res) {
        res.render('pages/apps/profiles', {
            title : res.__('page.apps.profiles.html.title:Profiles'),
            layout: vLayout(req) 
        });
    });

    // Stories application route ==============================
    app.get('/' + i18n.__('nav.webapps.alias') + '/' + i18n.__('nav.webapps.stories.alias'), function(req, res) {
        res.render('pages/apps/stories', {
            title : res.__('page.apps.stories.html.title:Stories'),
            layout: vLayout(req)  
        });
    });

    // Maps application route ==============================
    app.get('/' + i18n.__('nav.webapps.alias') + '/' + i18n.__('nav.webapps.maps.alias'), function(req, res) {
        res.render('pages/apps/maps', {
            title : res.__('page.apps.maps.html.title:Maps'),
            layout: vLayout(req)  
        });
    });

    // Calendars application route ==============================
    app.get('/' + i18n.__('nav.webapps.alias') + '/' + i18n.__('nav.webapps.calendars.alias'), function(req, res) {
        res.render('pages/apps/calendars', {
            title : res.__('page.apps.calendars.html.title:Calendars'),
            layout: vLayout(req)
        });
    });

// =============================================================================
// Member Account Routes
// =============================================================================

    // show the account landing page
    app.get('/' + i18n.__('nav.account.alias'), requireLogin, function(req, res) {
        render('pages/account', 'page.account.html.title:Account Management', req, res);
    });
    
    // show the auth options page
    app.get('/' + i18n.__('nav.auth.alias'), function(req, res) {
        render('pages/auth/options', 'page.auth.html.title:Login Options', req, res);
    });
    
    // show the optiosn for logging in
    app.get('/' + i18n.__('nav.account.alias') + '/' + i18n.__('nav.account.auths.alias'), requireLogin, function(req, res) {
        render('pages/account/auths', 'page.account.auths.html.title:Access Options', req, res);
    });

    // show the account contact info page
    app.get('/' + i18n.__('nav.account.alias') + '/' + i18n.__('nav.account.contact.alias'), requireLogin, function(req, res) {
        render('pages/account/contact', 'page.account.contact.html.title:Contact Info', req, res);
    });

    // show the account billing history
    app.get('/' + i18n.__('nav.account.alias') + '/' + i18n.__('nav.account.billing.alias'), requireLogin, function(req, res) {
        res.render('pages/account/billing', {
            user : req.user,
            title : res.__('page.account.billing.html.title:Billing History'),
            layout: vLayout(req)
        });
    });
 
    // show the account content landing page
    app.get('/' + i18n.__('nav.account.alias') + '/' + i18n.__('nav.account.content.alias'), requireLogin, function(req, res) {
        res.render('pages/account/content', {
            user : req.user,
            title : res.__('page.account.content.html.title:Content and Media Library'),
            layout: vLayout(req)
        });
    });
    
    /////////////////////////////////////////
    //  Object or content list routes
    ////////////////////////////////////////

    // show the account content images page
    app.get('/' + i18n.__('nav.account.alias') + '/' + i18n.__('nav.account.content.alias') + '/' + i18n.__('nav.account.content.images.alias'), requireLogin, function(req, res) {
        res.render('pages/account/content/images', {
            user : req.user,
            title : res.__('page.account.content.images.html.title:Image Library'),
            layout: vLayout(req)
        });
    }); 
    
    // show the account content videos page
    app.get('/' + i18n.__('nav.account.alias') + '/' + i18n.__('nav.account.content.alias') + '/' + i18n.__('nav.account.content.videos.alias'), requireLogin, function(req, res) {
        res.render('pages/account/content/videos', {
            user : req.user,
            title : res.__('page.account.content.videos.html.title:Video Library'),
            layout: vLayout(req)
        });
    });  
    
    // show the account content files page
    app.get('/' + i18n.__('nav.account.alias') + '/' + i18n.__('nav.account.content.alias') + '/' + i18n.__('nav.account.content.files.alias'), requireLogin, function(req, res) {
        res.render('pages/account/content/files', {
            user : req.user,
            title : res.__('page.account.content.files.html.title:File Storage'),
            layout: vLayout(req)
        });
    }); 
    
    /////////////////////////////////////////
    //  Individual object or content routes
    ////////////////////////////////////////
    
    // show the account content images page
    app.get('/' + i18n.__('nav.account.alias') + '/' + i18n.__('nav.account.content.alias') + '/' + i18n.__('nav.account.content.image.alias'), requireLogin, function(req, res) {
        res.render('pages/account/content/image', {
            user : req.user,
            title : res.__('page.account.content.image.html.title:Manage Image'),
            layout: vLayout(req)
        });
    }); 
    
    // show the account content videos page
    app.get('/' + i18n.__('nav.account.alias') + '/' + i18n.__('nav.account.content.alias') + '/' + i18n.__('nav.account.content.video.alias'), requireLogin, function(req, res) {
        res.render('pages/account/content/video', {
            user : req.user,
            title : res.__('page.account.content.video.html.title:Manage Video'),
            layout: vLayout(req)
        });
    });  
    
    // show the account content files page
    app.get('/' + i18n.__('nav.account.alias') + '/' + i18n.__('nav.account.content.alias') + '/' + i18n.__('nav.account.content.file.alias'), requireLogin, function(req, res) {
        res.render('pages/account/content/file', {
            user : req.user,
            title : res.__('page.account.content.file.html.title:Manage File'),
            layout: vLayout(req)
        });
    });
    
    /////////////////////////////////////////
    // PROFILE SECTION 
    /////////////////////////////////////////
    app.get('/' + i18n.__('nav.profile.alias'), requireLogin, function(req, res) {
        res.render('profile.ejs', {
            user : req.user,
        });
    });

    // LOGOUT ==============================
    app.get('/' + i18n.__('nav.logout.alias'), function(req, res) {
        req.logout();
        res.redirect('/');
    });

// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

    // locally --------------------------------
    // LOGIN ===============================
    // show the login form
    app.get('/' + i18n.__('nav.login.alias'), function(req, res) {
            res.render('auth/login', {
            title : res.__('page.login.html.title:Login'),
            message: req.flash('loginMessage'),
            layout: vLayout(req),
            failureFlash : true // allow flash messages
            
        });
    });

    // process the login form
    app.post('/' + i18n.__('nav.login.alias'), passport.authenticate('local-login', {
            successRedirect : '/account/auths', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
    }));

    // SIGNUP =================================
    // show the signup form
    app.get('/' + i18n.__('nav.signup.alias'), function(req, res) {
            res.render('signup/signup', {
            title : res.__('page.signup.html.title:Join - Signup'),
            message: req.flash('signupMessage'),
            layout: vLayout(req),
            failureFlash : true // allow flash messages
        });
    });

    // process the signup form
    app.post('/' + i18n.__('nav.signup.alias'), passport.authenticate('local-signup', {
            successRedirect : '/account', // redirect to the secure profile section
            failureRedirect : '/signup', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
    }));

    // facebook -------------------------------

    // send to facebook to do the authentication
    app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
            passport.authenticate('facebook', {
                    successRedirect : '/profile',
                    failureRedirect : '/'
            }));

    // twitter --------------------------------

    // send to twitter to do the authentication
    app.get('/auth/twitter', passport.authenticate('twitter', { scope : 'email' }));

    // handle the callback after twitter has authenticated the user
    app.get('/auth/twitter/callback',
            passport.authenticate('twitter', {
                    successRedirect : '/profile',
                    failureRedirect : '/'
            }));


    // google ---------------------------------

    // send to google to do the authentication
    app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

    // the callback after google has authenticated the user
    app.get('/auth/google/callback',
            passport.authenticate('google', {
                    successRedirect : '/profile',
                    failureRedirect : '/'
            }));

    // =============================================================================
    // AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
    // =============================================================================

    // locally --------------------------------
    app.get('/connect/local', function(req, res) {
            res.render('connect-local.ejs', { message: req.flash('loginMessage') });
    });
    app.post('/connect/local', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
    }));

    // facebook -------------------------------

    // send to facebook to do the authentication
    app.get('/connect/facebook', passport.authorize('facebook', { scope : 'email' }));

    // handle the callback after facebook has authorized the user
    app.get('/connect/facebook/callback',
            passport.authorize('facebook', {
                    successRedirect : '/profile',
                    failureRedirect : '/'
            }));

    // twitter --------------------------------

    // send to twitter to do the authentication
    app.get('/connect/twitter', passport.authorize('twitter', { scope : 'email' }));

    // handle the callback after twitter has authorized the user
    app.get('/connect/twitter/callback',
            passport.authorize('twitter', {
                    successRedirect : '/profile',
                    failureRedirect : '/'
            }));


    // google ---------------------------------

    // send to google to do the authentication
    app.get('/connect/google', passport.authorize('google', { scope : ['profile', 'email'] }));

    // the callback after google has authorized the user
    app.get('/connect/google/callback',
            passport.authorize('google', {
                    successRedirect : '/profile',
                    failureRedirect : '/'
            }));

// =============================================================================
// UNLINK ACCOUNTS =============================================================
// =============================================================================
// used to unlink accounts. for social accounts, just remove the token
// for local account, remove email and password
// user account will stay active in case they want to reconnect in the future

    // local -----------------------------------
    app.get('/unlink/local', requireLogin, function(req, res) {
        var user            = req.user;
        user.local.email    = undefined;
        user.local.password = undefined;
        user.save(function(err) {
                res.redirect('/profile');
        });
    });

    // facebook -------------------------------
    app.get('/unlink/facebook', requireLogin, function(req, res) {
        var user            = req.user;
        user.facebook.token = undefined;
        user.save(function(err) {
                res.redirect('/profile');
        });
    });

    // twitter --------------------------------
    app.get('/unlink/twitter', requireLogin, function(req, res) {
        var user           = req.user;
        user.twitter.token = undefined;
        user.save(function(err) {
                res.redirect('/profile');
        });
    });

    // google ---------------------------------
    app.get('/unlink/google', requireLogin, function(req, res) {
        var user          = req.user;
        user.google.token = undefined;
        user.save(function(err) {
                res.redirect('/profile');
        });
    });


};

// render the view
function render(page, title, req, res, navpath) {
    res.render(page, {
        user : req.user,
        title : res.__(title),
        layout: vLayout(req),
        loggedIn : isLoggedIn(req, res),
        nav : navPath(req, res)
    });
}

// Get the nav path elemnst to be highlighted
function navPath(req, res) {
    
}

// route middleware to ensure user is logged in
function requireLogin(req, res, next) {
	if (req.isAuthenticated())
		return next();

	res.redirect('/auth');
}

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return true;

	return false;
}

// 
function vLayout(req, layout) {

    if(layout) {
        var vlayout =  layout;
    } else {
        var vlayout = 'main';
    }
    
    var is_ajax_request = req.xhr;
    
    if(is_ajax_request) {
        vlayout = 'json';
    } 
    
    return vlayout;
}
