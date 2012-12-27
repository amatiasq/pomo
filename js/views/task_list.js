define(function(require) {

	var Collection = require('Backbone').View;
	var View = require('Backbone').View;
	var Task = require('views/task');

	var List = View.extend({

		$el: $('.page.tasks'),

		initialize: function() {
			this.list = new Collection();
			this.listenTo(this.list, 'reset', this.render.bind(this));
		},

		render: function(task) {
			var doc = document.createDocumentFragment();

			this.list.forEach(function(item) {
				doc.appendChild(new Task(item).$el[0]);
			});

			this.$('.content').empty().append(doc);
		}

	});

	return new List();
});
