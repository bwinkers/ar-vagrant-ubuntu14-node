// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '189004527780605', // your App ID
		'clientSecret'          : '871f00ae1438a39e9ebd7049d56ec561', // your App Secret
		'callbackURL'           : 'http://dev.izzup.com/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'VSLsrUzj6VADEsvgqvTVEKmUB', //Consumer Key (API Key)
		'consumerSecret' 	: 'mgFyiPlI2pPUaHWwxkbKZ9oyBzjNRwTYayN0FrMrqWqUOd2sd6', // Consumer Secret (API Secret)
		'callbackURL' 		: 'http://dev.izzup.com/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: '79458853238-alafa1a2a6gcmur5l1f6lusrmoljs83e.apps.googleusercontent.com', // CLIENT ID
		'clientSecret'          : 'z6x8LtMDuIH8-gw-tK-N18_q', // CLIENT SECRET
		'callbackURL'           : 'http://dev.izzup.com/auth/google/callback'
	}

};