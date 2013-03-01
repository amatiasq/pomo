define(function(require) {

	var Tasks = require('data/tasks');
	var Task = require('views/task_item');

	var list = new Tasks();

	return new (Backbone.View.extend({

		el: '.page#tasks',

		initialize: function() {
			this.listenTo(list, 'reset', this.render.bind(this));
			list.fetch();
		},

		render: function() {
			var doc = document.createDocumentFragment();

			list.forEach(function(item) {
				doc.appendChild(new Task({ model: item }).render().get(0));
			});

			this.$('#tasks-list').empty().append(doc);
		}
	}));
});
