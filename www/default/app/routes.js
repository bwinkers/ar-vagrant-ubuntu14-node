module.exports = function(app, passport) {
    
    if(app.settings.env == 'development') {
        console.log('The Routes know the enviro');
    }
    
// default route ===============================================================

	// show the home page (will also have our login links)
	app.get('/', function(req, res) {
            res.render('home', {
                title : res.__("page.home.html.title:Welcome")
            });
	});
        
// =============================================================================
// Static page routes for serving SEO pages
// =============================================================================

    // Shops landing page ==============================
    app.get('/shops', function(req, res) {
        res.render('pages/shops', {
            title : res.__('page.shops.html.title:Shops')
        });
    });

    // Shop layout ==============================
    app.get('/shop', function(req, res) {
        res.render('pages/shop', {
                title : res.__('page.shop.html.title:Shop')
        });
    });

    // Stories landing page ==============================
    app.get('/stories', function(req, res) {
        var vlayout = 'main';
        var is_ajax_request = req.xhr;
        if(is_ajax_request) {
            vlayout = false;
        } 

        res.render('pages/stories', {
            title : res.__('page.stories.html.title:Stories'),
            layout: vlayout
        });
    });

    // Story layout ==============================
    app.get('/story', function(req, res) {
        res.render('pages/story', {
                title : res.__('page.story.html.title:Story')
        });
    });

    // People landing page ==============================
    app.get('/people', function(req, res) {
        var vlayout = 'main';
        var is_ajax_request = req.xhr;
        if(is_ajax_request) {
            vlayout = false;
        } 

        res.render('pages/people', {
            title : res.__('page.people.html.title:People'),
            layout: vlayout 
        });
    });

    // Profile route ==============================
    app.get('/profile', function(req, res) {
            res.render('pages/profile', {
                title : res.__('page.profile.html.title:Profile')
            });
    });

    // Content route ==============================
    app.get('/content', function(req, res) {

            var vlayout = 'main';
            var is_ajax_request = req.xhr;
            if(is_ajax_request) {
                vlayout = false;
            } 

            res.render('pages/content', {
                title : res.__('page.content.html.title:Content'),
                layout: vlayout
            });
    });

    // Apps route ==============================
    app.get('/apps', function(req, res) {

            var vlayout = 'main';
            var is_ajax_request = req.xhr;
            if(is_ajax_request) {
                vlayout = false;
            } 

            res.render('pages/apps', {
                title : res.__('page.apps.html.title:Apps'),
                layout: vlayout 
            });
    });

    // Profile application route ==============================
    app.get('/apps/profiles', function(req, res) {

            var vlayout = 'main';
            var is_ajax_request = req.xhr;
            if(is_ajax_request) {
                vlayout = false;
            } 

            res.render('pages/apps/profiles', {
                title : res.__('page.apps.profiles.html.title:Profiles'),
                layout: vlayout 
            });
    });

    // Stories application route ==============================
    app.get('/apps/stories', function(req, res) {

            var vlayout = 'main';
            var is_ajax_request = req.xhr;
            if(is_ajax_request) {
                vlayout = false;
            } 

            res.render('pages/apps/stories', {
                title : res.__('page.apps.stories.html.title:Stories'),
                layout: vlayout 
            });
    });

    // Maps application route ==============================
    app.get('/apps/maps', function(req, res) {

            var vlayout = 'main';
            var is_ajax_request = req.xhr;
            if(is_ajax_request) {
                vlayout = false;
            } 

            res.render('pages/apps/maps', {
                title : res.__('page.apps.maps.html.title:Maps'),
                layout: vlayout 
            });
    });

    // Calendars application route ==============================
    app.get('/apps/calendars', function(req, res) {

        var vlayout = 'main';
        var is_ajax_request = req.xhr;
        if(is_ajax_request) {
            vlayout = false;
        } 


        res.render('pages/apps/calendars', {
            title : res.__('page.apps.maps.html.title:Calendars'),
            layout: vlayout 
        });
    });

// =============================================================================
// Member Account Routes
// =============================================================================
    // show the home page (will also have our login links)
    app.get('/account', isLoggedIn, function(req, res) {
        res.render('account/home', {
            title : res.__('page.account.html.title:Account')
        });
    });

    // show the home page (will also have our login links)
    app.get('/account/auths', isLoggedIn, function(req, res) {
        res.render('account/auths', {
            user : req.user,
            title : 'Authentication Options'
        });
    });

    // show the auth options page
    app.get('/auth', function(req, res) {
        res.render('auth/options', {
            title : res.__('page.auth.html.title:Login Options')
        });
    });

    // PROFILE SECTION =========================
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user
        });
    });

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

    // locally --------------------------------
    // LOGIN ===============================
    // show the login form
    app.get('/login', function(req, res) {
            res.render('auth/login', {
            title : res.__('page.login.html.title:Login'),
            message: req.flash('loginMessage'),
            failureFlash : true // allow flash messages
        });
    });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/account/auths', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
    }));

    // SIGNUP =================================
    // show the signup form
    app.get('/signup', function(req, res) {
            res.render('signup/signup', {
            title : res.__('page.signup.html.title:Join - Signup'),
            message: req.flash('signupMessage'),
            failureFlash : true // allow flash messages
        });
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
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
    app.get('/unlink/local', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.local.email    = undefined;
        user.local.password = undefined;
        user.save(function(err) {
                res.redirect('/profile');
        });
    });

    // facebook -------------------------------
    app.get('/unlink/facebook', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.facebook.token = undefined;
        user.save(function(err) {
                res.redirect('/profile');
        });
    });

    // twitter --------------------------------
    app.get('/unlink/twitter', isLoggedIn, function(req, res) {
        var user           = req.user;
        user.twitter.token = undefined;
        user.save(function(err) {
                res.redirect('/profile');
        });
    });

    // google ---------------------------------
    app.get('/unlink/google', isLoggedIn, function(req, res) {
        var user          = req.user;
        user.google.token = undefined;
        user.save(function(err) {
                res.redirect('/profile');
        });
    });


};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();

	res.redirect('/auth');
}
