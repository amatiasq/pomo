requirejs.config({
	baseUrl: 'js',

	paths: {
		'promise': 'lib/promise',
	},
})(['promise'], function(promise) {
	promise.debug = true;
	requirejs(['router'])
});

/**
 * Imported Globals:
 *  - $
 *  - _
 *  - Backbone
 *  - Handlebars
 */
