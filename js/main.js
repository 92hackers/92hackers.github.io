//a test for  require.js,   AMD   standard.
//Tab between.
require.config({
	paths: {
		'jquery': 'jquery.min',
		'site': 'site',  
		'demo2': 'demo2'
	},
});

require(['jquery', 'site', 'demo2'],function (jquery, site, demo2){})
