define(function(require) {

	var data = require('data');
	var templates = {
		taskItem: require('tmpl!page/tasks/item')
	};

	return require('Backbone').Router.extend({

		routes: {
			'tasks': 'tasks',
			'create': 'render',
			'retrospective': 'render',
			'settings': 'render',

			'edit/:id': 'render',
			'pomodoro/:id': 'render',
			'break/:id': 'render',

			'*actions': 'init'
		},

		init: function() {
			console.log('init');
			this.navigate('tasks');
			this.tasks();
		},

		tasks: function() {
			$('.page.visible').removeClass('visible');
			$('.page#tasks').addClass('visible');
			var container = $('.page#tasks .content');

			data.tasks.list()
				.method('map', templates.taskItem)
				.method('join', '')
				.then(container.html.bind(container));
		}
	});

});
