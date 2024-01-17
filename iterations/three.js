// For-of

// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
	// console.log(num);
}

const greetings = "Asslam o Alaikum";

for (const greet of greetings) {
	console.log(`Character is ${greet}`);
}

// Maps: Unique , Holds key-value pairs and remembers the original insertion order of the keys.

const map = new Map();
map.set("name", "Hayatoh");
map.set("age", 20);

// console.log(map);

for (const [key, value] of map) {
	console.log(`${key} :- ${value}`);
}

// const myobj = {
//   "game1": "free fire",
//   "game2": "pubg",
//   "game3": "call of duty"
// }
