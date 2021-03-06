define(function(require) {
	'use strict';

	var Tasks = require('data/tasks');
	var Task = require('views/task_item');

	var list = new Tasks();

	return new (Backbone.View.extend({

		el: 'section#tasks',

		initialize: function() {
			this.listenTo(list, 'reset', this.update.bind(this));
		},

		render: function() {
			list.fetch();
		},

		update: function() {
			var doc = document.createDocumentFragment();

			list.forEach(function(item) {
				doc.appendChild(new Task({ model: item }).render().get(0));
			});

			this.$('#tasks-list').empty().append(doc);
		}
	}));
});
