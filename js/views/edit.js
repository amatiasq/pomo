define(function(require) {
	'use strict';

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
			var title = this.$('header h2');
			var content = this.$('article');

			this.current = id;
			if (id) {
				var task = new Task({ id: id });
				task.fetch().then().then(function() {
					title.html('EDIT TASK');
					content.html(template(task, { isNew: false }));
				});
			} else {
				title.html('NEW TASK');
				content.html(template({
					name: 'Mi tarea de ejemplo',
					pomos: 2,
					isNew: true,
				}));
			}
		},

		addPomo: function() {
			this.$('.estimated ul').append($('<li>'));
		},

		removePomo: function() {
			this.$('.estimated ul').children().first().remove();
		},

		editTask: function() {
			var id = this.current;
			var task = new Task({
				id: id,
				name: this.$('span').text(),
				pomos: this.$('.estimated ul').children().length,
			});

			return task.save().then(this.back.bind(this));
		},

		back: function() {
			window.history.back();
		}
	}));
});
