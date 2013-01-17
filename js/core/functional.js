define(function(require) {

	function instance(Type) {
		return function(item) {
			new Type(item);
		};
	}

	function prop(name) {
		return function(item) {
			return item[name];
		};
	}

	function funct(name) {
		var args = Array.prototype.slice.call(arguments, 1);
		return function(item) {
			return item[name].apply(item, args);
		};
	}

	function seq() {
		var functs = Array.prototype.slice.call(arguments);
		return function(item) {
			for (var i = 0, len = functs.length; i < len; i++)
				item = functs(item);
			return item;
		}
	}


	return {
		instance: instance,
		prop: prop,
		funct: funct,
		seq: seq
	};

});
