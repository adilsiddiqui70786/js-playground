// For in loop

const myObj = {
	country: "India",
	state: "Maharashtra",
	city: "Mumbai",
	pin: 400001,
};

for (const key in myObj) {
	console.log(key + "-" + myObj[key]);
}

const programmingLanguage = ["JavaScript", "Python", "Java", "C++", "C"];

for (const key in programmingLanguage) {
	console.log(programmingLanguage[key]);
}
