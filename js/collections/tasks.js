define(function(require) {
	return require('Backbone').Collection.extend({
		model: require('models/task')
	});
});
