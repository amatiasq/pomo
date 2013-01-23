requirejs.config({

	baseUrl: 'js',

	paths: {
		$: 'lib/jquery-1.8.3',
		Underscore: 'lib/underscore',
		Handlebars: 'lib/handlebars-1.0.rc.1',
		Backbone: 'lib/backbone'
	},

	shim: {
		Underscore: { exports: '_' },
		Handlebars: { exports: 'Handlebars' },
		Backbone: {
			exports: 'Backbone',

			deps: [
				'$',
				'Underscore'
			]
		}
	}

});

requirejs([ 'Backbone', 'router' ], function(Backbone, PomoRouter) {
	new PomoRouter().init()
		.then(Backbone.history.start.bind(Backbone.history));
});

var a = true;
if (typeof cosa !== 'undefined')
;//	setInterval(function() {a=!a;cosa.style.display=a?'block':'none'}, 200)
