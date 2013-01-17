define(function(require) {

	var Promise = require('lib/promise');

	return {
		tasks: {

			list: function() {
				return Promise.resolved([{
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
