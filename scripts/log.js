var Main;
(function(global, $, Q, Main) {
	var consoleLog = function(message){
		console.log(message);
	},
	consoleAndUILog = function(elementId, message){
		$(elementId).append("<div>"+ message +"</div>");
		consoleLog(message);
	};

	Main.consoleLog = consoleLog;
	Main.consoleAndUILog = consoleAndUILog;	
})(window, window.$, window.Q, Main || (Main = {}));