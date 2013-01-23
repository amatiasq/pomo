define(function(require) {
	var fn = require('core/functional');

	return new (require('Backbone').Collection.extend({
		model: require('models/task'),

		nextId: function() {
			if (!this.length)
				return 0;

			return Math.max.apply(Math, this.map(fn.funct('get', 'id'))) + 1;
		}
	}));
});
