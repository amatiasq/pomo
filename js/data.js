define(function(require) {

	var Promise = require('lib/promise');

	return {
		tasks: {

			list: function() {
				return Promise.resolved([{
					id: 0,
					name: "Cosa",
					pomos: Array(3)
				}, {
					id: 1,
					name: "Otra",
					pomos: Array(1)
				}, {
					id: 2,
					name: "Ala",
					pomos: Array(4)
				}, {
					id: 3,
					name: "Mas",
					pomos: Array(2)
				}]);
				//localStorage.tasks);
			},

			create: function(data) {
				return Promise.resolved();
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
