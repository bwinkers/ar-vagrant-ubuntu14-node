// server.js

// Base setup ==================================================================
// Get all the tools we need
var express         = require('express');           // Fast, minimalist web framework
var bodyParser      = require('body-parser');       // Body parsing middleware
var session         = require('express-session');   // Simple session middleware for Express
var path            = require('path');              // Path module
var cookieParser    = require('cookie-parser');     // cookie parsing with signatures
var morgan          = require('morgan');            // Logger
var flash           = require('connect-flash');     // Pass flash (one-time) messages to a view
var vhost           = require('vhost');             // Vhost support
var hbs             = require('express-hbs');       // Handlebars wrapper
var mongoose        = require('mongoose');          // Mongo database model/schema 
var i18n            = require("i18n-2");              // Internationaliztion

// ActiveRules Site Root =======================================================
// This is used by initSite as the base directory for site 
var sitesRoot        = __dirname + '/site/';         

// =============================================================================
// Create the individual apps for each site.
// These map sites to customized content and routing.
// The string passed to initSite must match a directory within the sitesRoot above.
// =============================================================================
var ratedink = initSite('ratedink');
var izzup = initSite('izzup');


// =============================================================================
// Define the ActiveRules app used to server all the vhosts.
// This is the app that actually listens for incoming connections.
// It uses the vhost module to send request for a particular hostname to the proper app.
// Any valid express app should be able to bve used as a vhost, just make sure it has a unique name. 
// =============================================================================

// Set the port the Node.js server will listen on to 808 if not defined
// Define it in the Gruntfile used to start the app
var port     = process.env.PORT || 8080;

// The Vhost server Express app
var ar = express();

// Send requests for the izzup domains to the izzup app.
ar.use(vhost('local.izzup.com', izzup));
ar.use(vhost('local.rated.ink', ratedink));
ar.use(vhost('dev.izzup.com', izzup));

// Launch ActiveRules ==========================================================
ar.listen(port);
console.log('The server has started on port ' + port);


// =============================================================================
// =============================================================================
// Utility Functions 
// =============================================================================
// =============================================================================


/*******************************************************************************
 * Create a customized vhost for a site
 * 
 * @param string siteAlias
 * @returns express object with localized site content
 */
function initSite(siteAlias) {
    
    app = express();
    
    // Set the app site root for locating site specific files
    app.set('siteRoot', sitesRoot + siteAlias + '/');

    // Environment =============================================================
    // Set the app environment to development by default. 
    // Override in Gruntfile.
    app.set('env', process.env.NODE_ENV || 'development');

    // Database ================================================================
    // Load the DB config, pass in the app to use the environment and other settings.
    dbConfig    = require(app.get('siteRoot') + 'config/database.js');
    // Connect to the Database using the config url
    db = mongoose.createConnection(dbConfig.url); // connect to our database

    // Basic ===================================================================
    app.use(morgan('dev')); // log every request to the console
    app.use(cookieParser()); // read cookies (needed for auth)
    app.use(bodyParser.json()); // get information from html forms
    app.use(bodyParser.urlencoded({ extended: true }));
    
    // Templating engine =======================================================
    // Handlbars package with i18n and partials support
    localhbs = hbs.create();

    // i18n ====================================================================
    i18nConfig = {
        locales: ['en-US', 'es-US'],
        defaultLocale: 'en-US',
        cookie: 'locale',
        directory: "" + app.get('siteRoot') + "locales",
        objectNotation: true
    };
    
    i18n.expressBind(app, i18nConfig);
    
    // init i18n module for this loop
    // app.use(i18n.init);
    // register hbs helpers in res.locals' context which provides this.locale
    //localhbs.registerHelper('__', function () {
    //return i18n.__.apply(this, arguments);
   // });
   // localhbs.registerHelper('__n', function () {
   // return i18n.__n.apply(this, arguments);
   // });

    // Templating engine =======================================================
    // HBS - Handlebars with blocks and i18n
    // Static files are handled in routes below
    app.set('views', app.get('siteRoot') + 'views');
    app.engine('hbs', localhbs.express3({
      defaultLayout:  app.get('views') + '/layouts/main',
      //layout:false,
      partialsDir: app.get('views') + '/partials',
      layoutsDir: app.get('views') + '/layouts'
      // i18n: i18n,  // registers __ and __n helpers
    }));
    app.set('view engine', 'hbs');

    // Passport Authentication =================================================
    passport = require('passport');                                 // Auth library
    require(app.get('siteRoot') + 'config/passport.js')(passport, app); // pass passport for configuration
    app.use(session({ secret: 'UltriActiveRules' +  siteAlias,      // session secret
                     saveUninitialized: true,                       // Required for Express 4
                     resave: true }));                              // Required for Express 4
    app.use(passport.initialize());
    app.use(passport.session());                               // persistent login sessions
    app.use(flash()); // use connect-flash for flash messages stored in session

    // Routes and File Handling ================================================
    // Serve anything in the /public directory statically 
    app.use('/', express.static(path.join(app.get('siteRoot'), 'public')));
    // load our routes and pass in our app and fully configured passport
    require(app.get('siteRoot') + 'config/routes.js')(app, passport); 
    
    return app;
}