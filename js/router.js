define(function(require) {

	var Model = require('Backbone').Model;
	var Router = require('Backbone').Router;
	var data = require('data');
	var sections = {
		tasks: require('views/task_list')
	};

	function instance(Type) {
		return function(item) {
			return new Type(item);
		};
	}

	return Router.extend({

		routes: {
			'/tasks': 'tasks',
			'/create': 'render',
			'/retrospective': 'render',
			'/settings': 'render',

			'/edit/:id': 'render',
			'/pomodoro/:id': 'render',
			'/break/:id': 'render',

			'*actions': 'init'
		},

		init: function() {
			console.log('init');
			this.navigate('/tasks');
			this.tasks();
		},

		tasks: function() {
			var tasks = new sections.tasks();
			tasks.list.reset = task.list.reset.bind(task.list);

			this.tasks = function() {
				$('.page.visible').removeClass('visible');
				$('.page#tasks').addClass('visible');

				data.tasks.list()
					.method('map', instance(Model))
					.then(task.list.reset);
			};

		}
	});

});
