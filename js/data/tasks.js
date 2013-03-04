define(function(require) {
	"use strict";

	var Task = Backbone.Model.extend({
		localStorage: new Backbone.LocalStorage("tasks"),

		defaults: {
			name: 'Untitled',
			pomos: 3
		}
	});

	if (!localStorage.initialized) {
		[{
			id: 0,
			name: "Lost somewhere",
			pomos: 3
		}, {
			id: 1,
			name: "A good rule for rocket experimenters to follow",
			pomos: 2
		}, {
			id: 2,
			name: "Flight Control will be known",
			pomos: 3
		}, {
			id: 3,
			name: "The view of the Earth from the Moon",
			pomos: 2
		}].forEach(function(data) {
			new Task(data).save();
		});

		localStorage.initialized = "true";
	}

	return _.extend(Backbone.Collection.extend({
		localStorage: new Backbone.LocalStorage("tasks"),
		model: Task,
	}), { Model: Task });

});
