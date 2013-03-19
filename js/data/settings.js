define(function() {
	'use strict';

	var settings = new (Backbone.Model.extend({
		localStorage: new Backbone.LocalStorage('settings'),

		defaults: {
			'longpause-after': 3,
			'longpause-duration': 15
		}
	}));

	settings.fetch();

	return settings;

});
