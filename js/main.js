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
	new PomoRouter;
	Backbone.history.start();
});
