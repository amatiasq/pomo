define(function(require) {

	var Promise = require('lib/promise');

	return {
		tasks: {

			list: function() {
				return Promise.resolved([
					{ name: "Cosa" },
					{ name: "Otra" },
					{ name: "Ala" },
					{ name: "Mas" },
				]);
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
