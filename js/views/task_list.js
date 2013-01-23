define(function(require) {

	var View = require('Backbone').View;
	var Tasks = require('collections/tasks');
	var Task = require('views/task_item');

	var List = View.extend({

		el: $('.page#tasks').get(0),

		initialize: function() {
			this.listenTo(Tasks, 'reset', this.render.bind(this));
		},

		render: function() {
			var doc = document.createDocumentFragment();

			Tasks.forEach(function(item) {
				doc.appendChild(new Task({ model: item }).render().get(0));
			});

			this.$('#tasks-list').empty().append(doc);
		}
	});

	return new List();
});
