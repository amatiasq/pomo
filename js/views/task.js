define(function(require) {

	var itemTpl = require('tmpl!page/tasks/item')
	var View = require('Backbone').View;

	var Item = View.extend({

		tagName: 'li',

		initialize: function() {
			this.$el.addClass('item-task');
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
		},

		render: function(task) {
			this.$el.html(itemTpl(task));
		}

	})

})
