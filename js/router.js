define(function(require) {
	"use strict";

	var page = require('views/page');

	var Router = Backbone.Router.extend({

		routes: {
			'': 'tasks',
			'tasks': 'tasks',
			'create': 'create',
			'^retrospective': 'render',
			'^settings': 'render',

			'edit/:id': 'edit',
			'^pomodoro/:id': 'render',
			'^break/:id': 'render',

			'*actions': 'render'
		},

		initialize: function() {
			Backbone.history.start();
		},

		tasks: function() {
			page.show('tasks');
			require('views/task_list').render();
		},

		create: function() {
			page.show('edit');
			require('views/edit').render();
		},

		edit: function(id) {
			page.show('edit');
			require('views/edit').render(id);
		},

		render: function() {
			page.show('');
			console.log('Default handler');
		}

	});

	return new Router();

});
