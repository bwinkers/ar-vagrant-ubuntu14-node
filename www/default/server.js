// server.js

// Base setup ==================================================================
// Get all the tools we need
var express         = require('express');           // Fast, minimalist web framework
var bodyParser      = require('body-parser');       // Body parsing middleware
var session         = require('express-session');   // Simple session middleware for Express
var path            = require('path');              // Path module
var cookieParser    = require('cookie-parser');     // cookie parsing with signatures
var mongoose        = require('mongoose');          // Mongo database
var morgan          = require('morgan');            // Logger
var flash           = require('connect-flash');     // Pass flash (one-time) messages to a view
var vhost           = require('vhost');             // Vhost support

// ActiveRules Site Root =======================================================
var sitesRoot        = __dirname + '/site/';         

// =============================================================================
// Create the Default Express Application
// This extends a connect class. It can do anything connect can.
// =============================================================================
    var izzup      = express();
    
    // Set the app site root for locating site specific files
    izzup.set('siteRoot', sitesRoot + 'izzup/');

    // Environment =============================================================
    // Set the app environment to development by default. 
    // Override in Gruntfile.
    izzup.set('env', process.env.NODE_ENV || 'development');

    // Database ================================================================
    // Load the DB config, pass in the ap to use the environment and other settings.
    izzupDatabase        = require(izzup.get('siteRoot') + 'config/database.js');
    // Connect to the Database using the config url
    mongoose.connect(izzupDatabase.url); // connect to our database

    // Basic ===================================================================
    izzup.use(morgan('dev')); // log every request to the console
    izzup.use(cookieParser()); // read cookies (needed for auth)
    izzup.use(bodyParser.json()); // get information from html forms
    izzup.use(bodyParser.urlencoded({ extended: true }));
    
    // Templating engine =======================================================
    // Handlbars package with i18n and partials support
    izzuphbs             = require('express-hbs');       

    // i18n ====================================================================
    izzupi18n            = require("i18n");  // Internationaliztion
    izzupi18n.configure({
        locales: ['en-US', 'es-US'],
        defaultLocale: 'en-US',
        cookie: 'locale',
        directory: "" + izzup.get('siteRoot') + "locales",
        objectNotation: true
    });
    // init i18n module for this loop
    izzup.use(izzupi18n.init);
    // register hbs helpers in res.locals' context which provides this.locale
    izzuphbs.registerHelper('__', function () {
    return izzupi18n.__.apply(this, arguments);
    });
    izzuphbs.registerHelper('__n', function () {
    return izzupi18n.__n.apply(this, arguments);
    });

    // Templating engine =======================================================
    // HBS - Handlebars with blocks and i18n
    // Static files are handled in routes below
    izzup.set('views', izzup.get('siteRoot') + 'views');
    izzup.engine('hbs', izzuphbs.express3({
      defaultLayout:  izzup.get('views') + '/layouts/main',
      //layout:false,
      partialsDir: izzup.get('views') + '/partials',
      layoutsDir: izzup.get('views') + '/layouts',
      i18n: izzupi18n,  // registers __ and __n helpers
    }));
    izzup.set('view engine', 'hbs');

    // Passport Authentication =================================================
    izzuppassport        = require('passport');                 // Auth library
    require(izzup.get('siteRoot') + 'config/passport.js')(izzuppassport, izzup); // pass passport for configuration
    izzup.use(session({ secret: 'UltriActiveRules',                 // session secret
                     saveUninitialized: true,                       // Required for Express 4
                     resave: true }));                              // Required for Express 4
    izzup.use(izzuppassport.initialize());
    izzup.use(izzuppassport.session());                             // persistent login sessions
    izzup.use(flash()); // use connect-flash for flash messages stored in session

    // Routes and File Handling ================================================
    // Serve anything in the /public directory statically 
    izzup.use('/', express.static(path.join(izzup.get('siteRoot'), 'public')));
    // load our routes and pass in our app and fully configured passport
    require(izzup.get('siteRoot') + 'config/routes.js')(izzup, izzuppassport); 


// =============================================================================
// =============================================================================
// ActiveRules app to server all the vhosts.
// This is the app that actually listens for incoming connections.
// It uses the vhost module to send request for a particular hostname to the proper app.
// Any valid express app should be able to bve used as a vhost, just make sure it has a unique name. (not app)
// =============================================================================
// =============================================================================

// Set the port the Node.js server will listen on to 808 if not defined
// Define it in the Gruntfile used to start the app
var port     = process.env.PORT || 8080;

// The Vhost server Express app
var ar = express();

// Load the Izzup domains into the default app
ar.use(vhost('dev.izzup.com', izzup));

// Launch ActiveRules ==========================================================
ar.listen(port);
console.log('The server has started on port ' + port);