var Main;
(function(global, $, Q, Main) {
	var obArray = ko.observableArray([]);

	obArray.subscribe(function(newValues) {
		Main.consoleAndUILog("#root", newValues);
	});

	obArray.push("hello");
	obArray.push("world");

})(window, window.$, window.Q, Main || (Main = {}));