exports.config = {
	allScriptsTimeout: 11000,

	specs: [
		'e2e/*.js'
	],

	capabilities: {
		'browserName': 'chrome'
	},

	chromeOnly: true,

	baseUrl: 'http://www.localhost:3000/',

	framework: 'jasmine',

	jasmineNodeOpts: {
		defaultTimeoutInterval: 30000
	}
};
