define(function(require) {

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
			require('views/tasks').render();
		},

		create: function() {
			page.show('create');
			require('views/create').render();
		},

		edit: function() {
			page.show('edit');
			require('views/edit').render();
		},

		render: function() {
			page.show('');
			console.log('Default handler');
		}

	});

	return new Router();

});
