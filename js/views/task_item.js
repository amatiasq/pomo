define(function(require) {
	"use strict";

	var itemTpl = require('tmpl!page/tasks/item');

	return Backbone.View.extend({

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

});
