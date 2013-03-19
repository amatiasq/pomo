define(function(require) {
	'use strict';

	var settings = require('data/settings');

	return new (Backbone.View.extend({

		el: 'section#settings',

		events: {
		},

		render: function(id) {
			this.$('#longpause-after').val(settings.get('longpause-after'));
			this.$('#longpause-duration').val(settings.get('longpause-duration'));
		},

		save: function() {
			settings.set({
				'longpause-after': this.$('#longpause-after').val(),
				'longpause-duration': this.$('#longpause-duration').val(),
			});

			return settings.save().then(this.back.bind(this));
		},

		back: function() {
			window.history.back();
		}
	}));
})
