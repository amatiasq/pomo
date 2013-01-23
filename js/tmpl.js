define(function(require) {

	var Model = require('Backbone').Model;
	var Handlebars = require('Handlebars');

	Handlebars.registerHelper('dots', function(count, options) {
		return (count * 20) + 'px';
	});

	Handlebars.registerHelper('times', function(count, options) {
		return Handlebars.helpers['each'].call(this, new Array(count || 0).join().split(','), options);
	});

	return {
		load: function(name, parentRequire, done) {
			var fn = Handlebars.compile(document.getElementById(name).innerHTML);
			done(function(config) {
				if (config.toJSON)
					config = config.toJSON();

				return fn(config || {})
			})
		}
	}

});
