//a test for  require.js,   AMD   standard.
//Tab between.
require.config({
	paths: {
		'jquery': 'jquery.min',
		'site': 'site' 
	},
});

require(['jquery', 'site',],function (jquery, site){})
