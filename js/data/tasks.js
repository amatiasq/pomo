define(function(require) {

	var Task = Backbone.Model.extend({
		localStorage: new Backbone.LocalStorage("tasks"),

		defaults: {
			name: 'Untitled',
			pomos: 3
		}
	});

	return _.extend(Backbone.Collection.extend({
		localStorage: new Backbone.LocalStorage("tasks"),
		model: Task,
	}), { Model: Task });

});
