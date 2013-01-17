define(function(require) {

	var Collection = require('Backbone').Collection;
	var View = require('Backbone').View;
	var Task = require('views/task_item');

	var List = View.extend({

		el: $('.page#tasks').get(0),

		initialize: function() {
			this.list = new Collection();
			this.listenTo(this.list, 'reset', this.render.bind(this));
		},

		render: function() {
			var doc = document.createDocumentFragment();

			this.list.forEach(function(item) {
				doc.appendChild(new Task({ model: item }).render().get(0));
			});

			this.$('#tasks-list').empty().append(doc);
		}

	});

	return new List();
});
