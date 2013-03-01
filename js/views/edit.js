define(function(require) {

	var data = require('data');
	var template = require('tmpl!page/edit');
	var Task = require('data/tasks').Model;

	return new (Backbone.View.extend({

		el: 'section#edit',

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
			var self = this;
			return new Task({
				name: this.$('span').text(),
				pomos: this.$('.estimated ul').children().length,
			}).save({
				success: function() { self.back() }
			});
		},

		back: function() {
			window.history.back();
		}
	}));
});
