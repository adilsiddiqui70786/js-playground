const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// MAp : It is similar to forEach but it returns a new array automatically.

const newNums = myNums.map((num) => {
	return (num = num + 10);
});

console.log(newNums);
