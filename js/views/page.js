define(function(require) {

	return new (Backbone.View.extend({

		el: 'div#page-content',

		show: function(id) {
			this.$el.children().addClass('hidden');
			this.$('#' + id).removeClass('hidden');
		}

	}));

});
