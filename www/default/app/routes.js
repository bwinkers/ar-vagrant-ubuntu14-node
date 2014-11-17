module.exports = function(app, passport) {
    
    // =========================================================================
    // =========================================================================
    // ActiveRules is meant to support all routes.
    // Restrictions per site should be enforced within the application.
    // =========================================================================
    // =========================================================================
    
    // Local copy of the i18n library so we can parse these early.
    // NOTE!!! These routes get parsed ONCE on startup of the ndoe server.
    // To server localized url routes you need a separate web app for each language.
    // Most apps don't need loclaized routes. 
    // Authors belief is that they should always be supported.
    var i18n = app.get('i18n');
    
    // =========================================================================
    // Core ActiveRules Routes
    // =========================================================================
    // Homepage
    var home = require('../controllers/home');
    // Common routes for most all web sites
    var common = require('../controllers/common');
    
    // =========================================================================
    // Service specific controllers supported by ActiveRules.
    // These many standard ways to slice and dice data for UI consumption.
    // =========================================================================
    // Content
    var story = require('../controllers/story');
    var content = require('../controllers/content');
    // People and Organizations
    var people = require('../controllers/people');
    var directory = require('../controllers/directory');
    var profile = require('../controllers/account');
    var shop = require('../controllers/shop');
    // Authentication, local membership not required
    var auth = require('../controllers/auth');
    // Membership
    var signup = require('../controllers/signup');
    var account = require('../controllers/account');
    // Account Services
    var accountContact = require('../controllers/account/contact');
    var accountBilling = require('../controllers/account/billing');
    var images = require('../controllers/image');
    var video = require('../controllers/video');
    var files = require('../controllers/file');
    // Web Application Offerings, related to app controllers above
    var webapp = require('../controllers/webapp');

    


// =============================================================================   
// Default route / Homepage / Welcome Page 
// =============================================================================
    app.get('/', home.index);
    
    
// =============================================================================
// Common Legal - Privacy / Terms / Warranty / Copyright
// =============================================================================
    // legal
    app.get('/' + i18n.__('nav.legal.alias:legal'), common.legal);
    // legal/privacy
    app.get('/' + i18n.__('nav.legal.alias:legal') + '/' + i18n.__('nav.privacy.alias:privacy'), common.privacy);  
    // legal/terms
    app.get('/' + i18n.__('nav.legal.alias:legal') + '/' + i18n.__('nav.terms.alias:terms'), common.terms);
    // legal/warranty
    app.get('/' + i18n.__('nav.legal.alias:legal') + '/' + i18n.__('nav.warranty.alias:warranty'), common.warranty); 
    // legal/copyright
    app.get('/' + i18n.__('nav.legal.alias:legal') + '/' + i18n.__('nav.copyright.alias:copyright'), common.copyright); 
    // legal/accceptable_use
    app.get('/' + i18n.__('nav.legal.alias:legal') + '/' + i18n.__('nav.acceptable_use.alias:acceptable_use'), common.acceptable_use); 
    
    
// =============================================================================
// Common Company Info - History / Jobs /Guidelines / Mission / Contact / Staff
// =============================================================================
    // site/history
    app.get('/' + i18n.__('nav.site.alias:site'), common.site);  
    // site/history
    app.get('/' + i18n.__('nav.site.alias:site') + '/' + i18n.__('nav.history.alias:history'), common.history);  
    // site/community_guidelines
    app.get('/' + i18n.__('nav.site.alias:site') + '/' + i18n.__('nav.community_guidelines.alias:community_guidelines'), common.community_guidelines); 
    // site/jobs
    app.get('/' + i18n.__('nav.site.alias:site') + '/' + i18n.__('nav.jobs.alias:jobs'), common.jobs); 
    // site/mission
    app.get('/' + i18n.__('nav.site.alias:site') + '/' + i18n.__('nav.mission.alias:mission'), common.mission);
    // site/contact
    app.get('/' + i18n.__('nav.site.alias:site') + '/' + i18n.__('nav.contact.alias:contact'), common.contact); 
    // site/staff
    app.get('/' + i18n.__('nav.site.alias:site') + '/' + i18n.__('nav.staff.alias:staff'), common.staff); 
    
// =============================================================================
// Common Contact Pages - Support / Sales/ Advertising / Billing / Shipping / Receiving
// =============================================================================
    // contact
    app.get('/' + i18n.__('nav.contact.alias:contact'), common.contact);  
    // contact/sales
    app.get('/' + i18n.__('nav.contact.alias:contact') + '/' + i18n.__('nav.sales.alias:sales'), common.sales);  
    // contact/advertising
    app.get('/' + i18n.__('nav.contact.alias:contact') + '/' + i18n.__('nav.support.alias:support'), common.support); 
    // contact/billing
    app.get('/' + i18n.__('nav.contact.alias:contact') + '/' + i18n.__('nav.advertising.alias:advertising'), common.advertising); 
    // site/mission
    app.get('/' + i18n.__('nav.contact.alias:contact') + '/' + i18n.__('nav.billing.alias:billing'), common.billing);
    // contact/shipping
    app.get('/' + i18n.__('nav.contact.alias:contact') + '/' + i18n.__('nav.shipping.alias:shipping'), common.shipping); 

    
// =============================================================================
// Stories / Projects / Articles - Multimedia content
// =============================================================================
    // stories
    app.get('/' + i18n.__('nav.stories.alias:stories'), story.landing);

    
// =============================================================================
// Content - Browse or Search user provided digital media content
// =============================================================================
    // content
    app.get('/' + i18n.__('nav.content.alias:content'), content.landing); 
    
        
// =============================================================================
// People - "Find the RIGHT Person" driven interface
// =============================================================================
    // people
    app.get('/' + i18n.__('nav.people.alias:people'), people.landing); 
    
   
// =============================================================================
// Directory - Data focused interface to a company or person, links to profiles.
// =============================================================================
    // directory
    //app.get('/' + i18n.__('nav.directory.alias:directory'), directory.landing); 
    
    
// =============================================================================
// Profile - Marketing focused interface to a company or person, in directory.
// =============================================================================
    // profile
    app.get('/' + i18n.__('nav.profile.alias:profile'), profile.landing);
    
    
// =============================================================================
// Shop Listings - differentiated from business becasue of the sense of location
// =============================================================================
    // shops
    app.get('/' + i18n.__('nav.shops.alias:shops'), shop.landing);
    // shop/:shop_alias
    app.get('/' + i18n.__('nav.shop.alias:shop'), shop.single);   
    
    
// =============================================================================
// Entry point for Applications supported by this site. Doesn't require Authentication.
// This provides persistent evergreen target for members and visitors alike.
// =============================================================================
    // apps
    app.get('/' + i18n.__('nav.webapp.alias:apps'), webapp.landing);
    // apps/accounts
    app.get('/' + i18n.__('nav.webapp.alias:apps') + '/' + i18n.__('nav.webapp.profiles.alias:profiles'), webapp.profiles);
    // apps/maps
    app.get('/' + i18n.__('nav.webapp.alias:apps') + '/' + i18n.__('nav.webapp.maps.alias:maps'), webapp.maps);
    // apps/stories
    app.get('/' + i18n.__('nav.webapp.alias:apps') + '/' + i18n.__('nav.webapp.stories.alias:stories'), webapp.stories);  
    // apps/calendars
    app.get('/' + i18n.__('nav.webapp.alias:apps') + '/' + i18n.__('nav.webapp.calendars.alias:calendars'), webapp.calendars); 
    
// =============================================================================
// Login Options
// =============================================================================
    // show the auth options page
    app.get('/' + i18n.__('nav.auth.alias'), function(req, res) {
        render('pages/auth/options', 'page.auth.html.title:Login Options', req, res);
    });


// =============================================================================
// Member Account Routes
// =============================================================================

    // Require Login for ALL /account URL's
    app.all('/' + i18n.__('nav.account.alias') + '*', requireLogin);

    // account
    app.get('/' + i18n.__('nav.account.alias'), account.landing);

    // account/auths
    app.get('/' + i18n.__('nav.account.alias') + '/' + i18n.__('nav.account.auths.alias'), account.auths);

    // account/contact
    app.get('/' + i18n.__('nav.account.alias') + '/' + i18n.__('nav.account.contact.alias'), account.contact);
    app.post('/api/' + i18n.__('nav.account.alias') + '/' + i18n.__('nav.account.contact.alias'), accountContact.create);
    app.get('/api/' + i18n.__('nav.account.alias') + '/' + i18n.__('nav.account.contact.alias'), accountContact.read);
    app.put('/api/' + i18n.__('nav.account.alias') + '/' + i18n.__('nav.account.contact.alias'), accountContact.update);
    app.delete('/api/' + i18n.__('nav.account.alias') + '/' + i18n.__('nav.account.contact.alias'), accountContact.delete);

    // saccount/billing
    app.get('/' + i18n.__('nav.account.alias') + '/' + i18n.__('nav.account.billing.alias'), account.billing);
 
    // account/content
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
            successRedirect : '/account', // redirect to the secure profile section
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
                    successRedirect : '/account',
                    failureRedirect : '/'
            }));

    // twitter --------------------------------

    // send to twitter to do the authentication
    app.get('/auth/twitter', passport.authenticate('twitter', { scope : 'email' }));

    // handle the callback after twitter has authenticated the user
    app.get('/auth/twitter/callback',
            passport.authenticate('twitter', {
                    successRedirect : '/account',
                    failureRedirect : '/'
            }));


    // google ---------------------------------

    // send to google to do the authentication
    app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

    // the callback after google has authenticated the user
    app.get('/auth/google/callback',
            passport.authenticate('google', {
                    successRedirect : '/account',
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
            successRedirect : '/account', // redirect to the secure profile section
            failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
    }));

    // facebook -------------------------------

    // send to facebook to do the authentication
    app.get('/connect/facebook', passport.authorize('facebook', { scope : 'email' }));

    // handle the callback after facebook has authorized the user
    app.get('/connect/facebook/callback',
            passport.authorize('facebook', {
                    successRedirect : '/account',
                    failureRedirect : '/'
            }));

    // twitter --------------------------------

    // send to twitter to do the authentication
    app.get('/connect/twitter', passport.authorize('twitter', { scope : 'email' }));

    // handle the callback after twitter has authorized the user
    app.get('/connect/twitter/callback',
            passport.authorize('twitter', {
                    successRedirect : '/account',
                    failureRedirect : '/'
            }));


    // google ---------------------------------

    // send to google to do the authentication
    app.get('/connect/google', passport.authorize('google', { scope : ['profile', 'email'] }));

    // the callback after google has authorized the user
    app.get('/connect/google/callback',
            passport.authorize('google', {
                    successRedirect : '/account',
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
                res.redirect('/account');
        });
    });

    // facebook -------------------------------
    app.get('/unlink/facebook', requireLogin, function(req, res) {
        var user            = req.user;
        user.facebook.token = undefined;
        user.save(function(err) {
                res.redirect('/account');
        });
    });

    // twitter --------------------------------
    app.get('/unlink/twitter', requireLogin, function(req, res) {
        var user           = req.user;
        user.twitter.token = undefined;
        user.save(function(err) {
                res.redirect('/account');
        });
    });

    // google ---------------------------------
    app.get('/unlink/google', requireLogin, function(req, res) {
        var user          = req.user;
        user.google.token = undefined;
        user.save(function(err) {
                res.redirect('/account');
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
        vlayout = 'spa';
    } 
    
    return vlayout;
}
