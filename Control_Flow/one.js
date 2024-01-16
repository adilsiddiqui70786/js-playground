// If Statement

const temperature = 25;

if (temperature < 20) {
	console.log("It's cold outside");
}

if (3 === "3") {
	console.log("Welcome to the website");
}

if (temperature < 25) {
	console.log("It's cold outside");
} else {
	console.log("It's warm outside");
}

// if (false) console.log("Hello");

const balance = 1000;

if (balance >= 1000) {
	console.log("You can buy a new phone");
} else if (balance >= 500) {
	console.log("You can buy a used phone");
} else if (balance >= 200) {
	console.log("You can buy a headset");
} else {
	console.log("You have no money");
}

const userAdhar = true;
const userPan = true;

if (userAdhar && userPan) {
	console.log("You can open an account");
} else {
	console.log("You can not open an account");
}

const userLoggedInFromEMail = true;
const userLoggedInFromGoogle = true;

if (userLoggedInFromEMail || userLoggedInFromGoogle) {
	console.log("User Can log into Application");
}
