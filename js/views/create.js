define(function(require) {

	var View = require('Backbone').View;
	var template = require('tmpl!page/edit')

	var Create = View.extend({

		el: $('.page#create').get(0),

		render: function() {
			this.$('section').html(template({
				name: 'Task name...',
				pomos: 1
			}));
		}
	});

	return new Create();
});
