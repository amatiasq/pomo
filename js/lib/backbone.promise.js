define(function(require) {

	var Promise = require('promise');

	function toProm(options, promise) {
		return _.extend(options || {}, {
			success: promise.resolve.bind(promise),
			error: promise.reject.bind(promise),
		});
	}


	var model = Backbone.Model.prototype;
	Backbone.Model = Backbone.Model.extend({
		fetch: function(options) {
			var prom = new Promise();
			model.fetch.call(this, toProm(options, prom));
			return prom.future;
		},

		save: function(attributes, options) {
			var prom = new Promise();
			if (model.save.call(this, attributes, toProm(options, prom)))
				prom.reject(false);
			return prom.future;
		},

		destroy: function(options) {
			var prom = new Promise();
			if (model.destroy.call(this, toProm(options, prom)))
				prom.reject(false);
			return prom.future;
		}
	});


	var collection = Backbone.Collection.prototype;
	Backbone.Collection = Backbone.Collection.extend({
		fetch: function(options) {
			var prom = new Promise();
			collection.fetch.call(this, toProm(options, prom));
			return prom.future;
		}
	});
});
