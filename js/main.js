requirejs.config({
	baseUrl: 'js',

	paths: {
		'promise': 'lib/promise',
	},
})(['promise', 'lib/backbone.promise'], function(promise) {
	promise.debug = true;
	requirejs(['router']);

	if ($('#cosa').length) {
		var a = true;
		setInterval(function() {
			$('#cosa').toggleClass('hidden');
			$('div#page-content').css('opacity', (a=!a) ? 0.5 : 1);
		}, 500);
	}
});

/**
 * Imported Globals:
 *  - $
 *  - _
 *  - Backbone
 *  - Handlebars
 */
