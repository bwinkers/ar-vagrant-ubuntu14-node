// server.js

// Base setup ==================================================================
// Get all the tools we need
var express         = require('express');
var morgan          = require('morgan');
var cookieParser    = require('cookie-parser');
var mongoose        = require('mongoose');
var passport        = require('passport');
var flash           = require('connect-flash');
var bodyParser      = require('body-parser');
var session         = require('express-session');
var path            = require('path');
var hbs             = require('express-hbs');
var i18n            = require("i18n");

// Create the Express Application ==============================================
var app      = express();

// Environment =================================================================
// Set the port the Node.js server will listen on
var port     = process.env.PORT || 8080;

// Set the app environment to development by default. 
// Override in Gruntfile.
app.set('env', process.env.NODE_ENV || 'development');

// Database ====================================================================
// Load the DB config, pass in the ap to use the environment and other settings.
var database        = require('./config/database.js');
// Connect to the Database using the config url
mongoose.connect(database.url); // connect to our database

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

// Set i18n in app for accessing in router
app.set('i18n', i18n);

// Templating engine ===========================================================
// HBS
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
app.use(session({ secret: 'UltriIzzupActiveRules', // session secret
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

// Launch ======================================================================
app.listen(port);
console.log('The server has started on port ' + port);


