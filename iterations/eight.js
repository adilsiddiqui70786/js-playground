// reduce

const myNumbers = [1, 2, 3, 4, 5];

// const totalNumber = myNumbers.reduce(function (acc, currVal) {
// 	console.log(`acc: ${acc}, currVal: ${currVal}}`);
// 	return acc + currVal;
// }, 0);

// Arrow function

const totalNumber = myNumbers.reduce((acc, curr) => acc + curr);

console.log(totalNumber);

const shoppingCart = [
	{
		id: 1,
		name: "Laptop",
		price: 1000,
	},
	{
		id: 2,
		name: "Mobile",
		price: 500,
	},
	{
		id: 3,
		name: "Headphone",
		price: 100,
	},
	{
		id: 4,
		name: "Keyboard",
		price: 50,
	},
	{
		id: 5,
		name: "Mouse",
		price: 20,
	},
];

const totalAmountToPay = shoppingCart.reduce(
	(acc, item) => acc + item.price,
	0
);

console.log(totalAmountToPay);
