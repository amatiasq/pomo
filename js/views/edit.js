define(function(require) {

	var Promise = require('promise');
	var Task = require('data/tasks').Model;
	var template = require('tmpl!page/edit');

	return new (Backbone.View.extend({

		el: 'section#edit',

		events: {
			'click .estimated li': 'removePomo',
			'click #edit-add-pomo': 'addPomo',
			'click #edit-cancel': 'back',
			'click #edit-do': 'editTask',
		},

		render: function(id) {
			var task = id ? new Task.Model({ id: id }) : null;
			this.current = id;

			Promise.normalize(task && task.fetch()).then(function() {
				this.$('header h2').html(id ? 'EDIT TASK' : 'NEW TASK');
				this.$('section').html(template(task));
			});
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
				id: this.current,
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
