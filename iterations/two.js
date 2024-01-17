//While loop : When you don't know the number of iterations

let i = 1;
while (i <= 10) {
	console.log(`Value of i is ${i}`);
	i = i + 2;
}

let myArray = ["flash", "Hayatoh", "Alok"];

let arr = 0;

while (arr < myArray.length) {
	console.log(myArray[arr]);
	arr = arr + 1;
}

// Do while loop: When you want to execute the block of code atleast once

let score = 1;

do {
	console.log(`Score is ${score}`);
	score++;
} while (score <= 10);
