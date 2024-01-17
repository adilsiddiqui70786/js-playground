// For in loop

const myObj = {
	country: "India",
	state: "Maharashtra",
	city: "Mumbai",
	pin: 400001,
};

for (const key in myObj) {
	console.log(key + ":-" + myObj[key]);
}
