define(function(require) {

	var View = require('Backbone').View;
	var data = require('data');
	var template = require('tmpl!page/edit')

	var Edit = View.extend({

		el: $('.page#edit').get(0),

		events: {
			'click .estimated li': 'removePomo',
			'click #edit-add-pomo': 'addPomo',
			'click #edit-cancel': 'back',
			'click #edit-do': 'editTask',
		},

		render: function(data) {
			if (data.toJSON)
				data = data.toJSON();

			this.$('header h2').html('id' in data ? 'EDIT TASK' : 'NEW TASK');
			this.$('section').html(template(data));
		},

		addPomo: function() {
			this.$('.estimated ul').append($('<li>'));
		},

		removePomo: function() {
			this.$('.estimated ul').children().first().remove();
		},

		editTask: function() {
			return data.tasks.save({
				name: this.$('span').text(),
				pomos: this.$('.estimated ul').children().length,
			}).then(this.back.bind(this));
		},

		back: function() {
			window.history.back();
		}
	});

	return new Edit();
});
