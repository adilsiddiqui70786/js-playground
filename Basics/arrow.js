/* THIS:  this keyword refered current context*/

const user = {
	username: "Hayato",
	price: 99,

	welcomeMessage: function () {
		console.log(`${this.username}, Welcome to Website`);
		// console.log(this);
	},
};

user.welcomeMessage(); // Andrew, Welcome to Website

user.username = "Sonia";

user.welcomeMessage(); // Sonia, Welcome to Website

console.log(this); // {}

// function sayThis() {
// 	console.log(this);
// }

// sayThis(); // window object

// function Chai() {
// 	const user = "Dimtri";
// 	console.log(this.user);
// }

// Chai(); // undefined

// const Chai = function () {
// 	const user = "Dimtri";
// 	console.log(this.user);
// };

// Chai(); // undefined

const Chai = () => {
	const user = "Dimtri";
	console.log(this.user);
};

Chai(); // undefined

// Arrow function : concise way to write function expressions

// const addTwo = (num1, num2) => num1 + num2;

const addTwo = (num1, num2) => num1 + num2; // We don't have to use return keyword
const addThree = (num1, num2, num3) => {
	return num1 + num2;
}; // We have to use return keyword if we use {}

console.log(addTwo(2, 3)); // 5

const myArray = [2, 4, 5, 6, 7, 8, 9, 10];
