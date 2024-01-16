// Immediately Invoked Function Expression (IIFE)

/* 
An Immediately Invoked Function Expression (IIFE) 
is a JavaScript design pattern that involves defining
and executing a function immediately after its creation.

And There is problem with Global Scope Pollution. preventing them from polluting the global scope
 */

(function MongoDb() {
	//named iife
	console.log("Database Connected");
})();

((name) => {
	console.log("Database Two Connected " + name);
})("Kia");

// IIFE with return value
var result = (function () {
	var name = "Kia";
	return name;
})();
