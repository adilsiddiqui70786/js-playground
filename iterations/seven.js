const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// MAp : It is similar to forEach  but it returns a new array automatically.

// const newNums = myNums.map((num) => {
// 	return (num = num + 10);
// });

// console.log(newNums);

// Chainig : It is a way to combine multiple methods together.

const newNums = myNums
	.map((num) => num + 10)
	.map((num) => num * 2)
	.filter((num) => num > 20);

console.log(newNums);
