// For Loop: Repeatedly execute a block of code

for (let i = 1; i <= 10; i++) {
	if (i == 11) {
		console.log("I am at 5");
	}
	console.log(i);
}

for (let i = 1; i <= 10; i++) {
	console.log(`Table of ${i}`);

	for (let j = 1; j <= 10; j++) {
		// console.log(`Inner loop: ${j} and inner loop: ${i}`);
		console.log(i + "*" + j + "=" + i * j);
	}
}

// break and continue

// break: to break any control flow

// for (let i = 1; i <= 20; i++) {
// 	if (i == 5) {
// 		console.log(`Detected ${i}`);
// 		break;
// 	}
// 	console.log(`Value of i is ${i}`);
// }

// continue: to skip or ignore any iteration

for (let i = 1; i <= 20; i++) {
	if (i == 5) {
		console.log(`Detected ${i}`);
		continue;
	}
	console.log(`Value of i is ${i}`);
}
