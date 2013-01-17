define(function(require) {

	var Model = require('Backbone').Model;
	var Handlebars = require('Handlebars');

	Handlebars.registerHelper('dots', function(count, options) {
		return (count * 20) + 'px';
	})

	return {
		load: function(name, parentRequire, done) {
			var fn = Handlebars.compile(document.getElementById(name).innerHTML);
			done(function(config) {
				if (config instanceof Model)
					config = config.toJSON();

				return fn(config || {})
			})
		}
	}

});
