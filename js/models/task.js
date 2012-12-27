define(function(require) {
	return require('Backbone').Model.extend({

		defaults: {
			name: 'Untitled',
			pomos: 3
		}

	});
});
