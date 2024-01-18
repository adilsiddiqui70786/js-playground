// const teachers = ["Assaf", "Josh", "Andrew", "Justine", "Zach"];

// teachers.forEach((item) => {
// 	console.log(item);
// });

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.forEach((num) => {
// 	let square = num * num;
// 	console.log(`The Square of ${num} is = ${square}`);
// });

//For each does not return anything.

// Filter: It returns a new array with the elements that pass the condition.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNums = myNums.filter((num) => num > 4);
// console.log(newNums);

const newNums = myNums.filter((num) => {
	return num == 4;
});

console.log(newNums);
