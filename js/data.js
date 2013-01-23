define(function(require) {

	var Promise = require('lib/promise');
	var fn = require('core/functional');

	if (!localStorage.tasks) {
		localStorage.tasks = JSON.stringify([{
			id: 0,
			name: "Lost somewhere",
			pomos: 3
		}, {
			id: 1,
			name: "A good rule for rocket experimenters to follow",
			pomos: 2
		}, {
			id: 2,
			name: "Flight Control will be known",
			pomos: 3
		}, {
			id: 3,
			name: "The view of the Earth from the Moon",
			pomos: 2
		}]);
	}


	function get(key) {
		return JSON.parse(localStorage[key]);
	}
	function set(key, value) {
		localStorage[key] = JSON.stringify(value);
	}
	function nextId(list) {
		return list.length ? Math.max.apply(Math, list.map(fn.prop('id'))) + 1 : 0
	}


	return {
		tasks: {

			list: function() {
				return Promise.resolved(get('tasks'));
			},

			save: function(data) {
				return 'id' in data ? this.update(data) : this.create(data);
			},

			create: function(data) {
				var list = get('tasks');
				data.id = nextId(list);
				list.push(data);
				set('tasks', list);
				return Promise.resolved(_.extend({}, data));
			},

			retrieve: function() {
				return Promise.resolved();
			},

			update: function() {
				return Promise.resolved();
			},

			delete: function(data) {
				return Promise.resolved();
			}

		}
	}

});
