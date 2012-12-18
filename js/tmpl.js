define(function(require) {

	var Handlebars = require('Handlebars');

	return {
		load: function(name, parentRequire, done) {
			var fn = Handlebars.compile(document.getElementById(name).innerHTML);
			done(function(config) { return fn(config || {}) })
		}
	}

});
