// reduce

const myNumbers = [1, 2, 3, 4, 5];

const totalNumber = myNumbers.reduce(function (acc, currVal) {
	console.log(`acc: ${acc}, currVal: ${currVal}}`);
	return acc + currVal;
}, 0);

console.log(totalNumber);
