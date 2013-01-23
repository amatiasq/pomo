define(function(require) {

	require('lib/promise').debug = true;
	var Model = require('Backbone').Model;
	var Router = require('Backbone').Router;
	var data = require('data');
	var list = require('collections/tasks');
	var sections = {
		tasks: require('views/task_list'),
		edit: require('views/edit'),
	};



	function instance(Type) {
		return function(item) {
			return new Type(item);
		};
	}

	function show(id) {
		$('.page.visible').removeClass('visible');
		$('.page#' + id).addClass('visible');
	}

	return Router.extend({

		routes: {
			'tasks': 'tasks',
			'create': 'create',
			'^retrospective': 'render',
			'^settings': 'render',

			'edit/:id': 'edit',
			'^pomodoro/:id': 'render',
			'^break/:id': 'render',

			'*actions': 'render'
		},

		init: function() {
			return data.tasks.list().then(list.reset.bind(list));
		},

		tasks: function() {
			show('tasks');
		},

		create: function() {
			show('edit');
			sections.edit.render({
				name: 'Mi tarea de ejemplo',
				pomos: 2
			})
		},

		edit: function(id) {
			show('edit');
			sections.edit.render(list.get(id));
		},

		render: function() {
			console.log('dentro');
		}
	});

});
