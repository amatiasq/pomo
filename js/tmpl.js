define(function(require) {

	var Model = require('Backbone').Model;
	var Handlebars = require('Handlebars');

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
