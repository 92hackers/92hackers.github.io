//a test for  require.js,   AMD   standard.
//Tab between.
require.config({
	paths: {
		'jquery': 'jquery.min',
		'site': 'site',  
		'demo2': 'demo2', 
		'jssor': 'jssor.slider.min', 
		'demo3': 'demo3', 
		'ele': 'ele'
	},
});

require(['jquery', 'site', 'demo2', 'jssor', 'demo3', 'ele'],function (jquery, site, demo2, ele){})
