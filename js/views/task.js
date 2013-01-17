define(function(require) {

	var itemTpl = require('tmpl!page/tasks/item')
	var View = require('Backbone').View;

	var Item = View.extend({

		tagName: 'li',

		initialize: function() {
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
		},

		render: function() {
			this.$el.html(itemTpl(this.model.toJSON()));
			return this.$el;
		}

	});

	return Item;

})
