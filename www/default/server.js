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
var passport        = require('passport');          // Auth library
var flash           = require('connect-flash');     // Pass flash (one-time) messages to a view
var hbs             = require('express-hbs');       // Handlbars package with i18n and partials support
var i18n            = require("i18n");              // Internationaliztion
var vhost           = require('vhost')              // Vhost support

// =============================================================================
// Create the Default Express Application
// This extends a connect class. It can do anything connect can.
// =============================================================================
    var app      = express();

    // Environment =================================================================
    // Set the app environment to development by default. 
    // Override in Gruntfile.
    app.set('env', process.env.NODE_ENV || 'development');

    // Database ====================================================================
    // Load the DB config, pass in the ap to use the environment and other settings.
    var appDatabase        = require('./config/database.js');
    // Connect to the Database using the config url
    mongoose.connect(appDatabase.url); // connect to our database

    // Basic =======================================================================
    app.use(morgan('dev')); // log every request to the console
    app.use(cookieParser()); // read cookies (needed for auth)
    app.use(bodyParser.json()); // get information from html forms
    app.use(bodyParser.urlencoded({ extended: true }));

    // i18n ========================================================================
    i18n.configure({
        locales: ['en-US', 'es-US'],
        defaultLocale: 'en-US',
        cookie: 'locale',
        directory: "" + __dirname + "/locales",
        objectNotation: true
    });
    // init i18n module for this loop
    app.use(i18n.init);
    // register hbs helpers in res.locals' context which provides this.locale
    hbs.registerHelper('__', function () {
    return i18n.__.apply(this, arguments);
    });
    hbs.registerHelper('__n', function () {
    return i18n.__n.apply(this, arguments);
    });

    // Templating engine ===========================================================
    // HBS - Handlebars with blocks and i18n
    // Static files are handled in routes below
    app.set('views', __dirname + '/views');
    app.engine('hbs', hbs.express3({
      defaultLayout:  app.get('views') + '/layouts/main',
      //layout:false,
      partialsDir: app.get('views') + '/partials',
      layoutsDir: app.get('views') + '/layouts',
      i18n: i18n,  // registers __ and __n helpers
    }));
    app.set('view engine', 'hbs');

    // Passport Authentication =====================================================
    require('./config/passport')(passport, app); // pass passport for configuration
    app.use(session({ secret: 'UltriActiveRules', // session secret
                     saveUninitialized: true, // Required for Express 4
                     resave: true }));  // Required for Express 4
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions
    app.use(flash()); // use connect-flash for flash messages stored in session

    // Routes and File Handling ====================================================
    // Serve anything in the /public directory statically 
    app.use('/', express.static(path.join(__dirname, 'public')));
    // load our routes and pass in our app and fully configured passport
    require(__dirname + '/app/routes.js')(app, passport); 




// =============================================================================
// Create the Izzup Application 
// This extends a connect class. It can do anything connect can.
// =============================================================================
    var izzup      = express();

    // Set the app environment to development by default. 
    // Override in Gruntfile.
    izzup.set('env', process.env.NODE_ENV || 'development');

    // Database ====================================================================
    // Load the DB config, pass in the ap to use the environment and other settings.
    //var database        = require('./config/database.js');
    // Connect to the Database using the config url
    //mongoose.connect(database.url); // connect to our database

    // Basic =======================================================================
    izzup.use(morgan('dev')); // log every request to the console
    izzup.use(cookieParser()); // read cookies (needed for auth)
    izzup.use(bodyParser.json()); // get information from html forms
    izzup.use(bodyParser.urlencoded({ extended: true }));

    // i18n ========================================================================
    i18n.configure({
        locales: ['en-US', 'es-US'],
        defaultLocale: 'en-US',
        cookie: 'locale',
        directory: "" + __dirname + "/locales",
        objectNotation: true
    });
    // init i18n module for this loop
    izzup.use(i18n.init);

    // Templating engine ===========================================================
    // HBS - Handlebars with blocks and i18n
    // Static files are handled in routes below
    izzup.set('views', __dirname + '/views');
    izzup.engine('hbs', hbs.express3({
      defaultLayout:  app.get('views') + '/layouts/main',
      //layout:false,
      partialsDir: app.get('views') + '/partials',
      layoutsDir: app.get('views') + '/layouts',
      i18n: i18n,  // registers __ and __n helpers
    }));
    izzup.set('view engine', 'hbs');

    // Passport Authentication =====================================================
    require('./config/passport')(passport, izzup); // pass passport for configuration
    izzup.use(session({ secret: 'UltriIzzupActiveRules', // session secret
                     saveUninitialized: true, // Required for Express 4
                     resave: true }));  // Required for Express 4
    izzup.use(passport.initialize());
    izzup.use(passport.session()); // persistent login sessions
    izzup.use(flash()); // use connect-flash for flash messages stored in session

    // Routes and File Handling ====================================================
    // Serve anything in the /public directory statically 
    izzup.use('/', express.static(path.join(__dirname, 'public')));
    // load our routes and pass in our app and fully configured passport
    require(__dirname + '/app/routes.js')(izzup, passport); 


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
ar.use(vhost('dev.izzup.com', app));

// Launch ActiveRules ======================================================
ar.listen(port);
// console.log('The server has started on port ' + port);