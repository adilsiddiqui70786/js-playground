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
	return num > 4;
});

console.log(newNums);

// const newNums = [];

// myNums.forEach((num) => {
// 	if (num > 4) {
// 		newNums.push(num);
// 	}
// });

// console.log(newNums);

const books = [
	{
		title: "Book One",
		genre: "Fiction",
		published: 2010,
	},
	{
		title: "Book Two",
		genre: "Non-Fiction",
		published: 2011,
	},
	{
		title: "Book Three",
		genre: "Historical Fiction",
		published: 2012,
	},
	{
		title: "Book Four",
		genre: "Non-Fiction",
		published: 2013,
	},
	{
		title: "Book Five",
		genre: "Science",
		published: 2014,
	},
	{
		title: "Book Six",
		genre: "Non-Fiction",
		published: 2015,
	},
	{
		title: "Book Seven",
		genre: "Fiction",
		published: 2016,
	},
	{
		title: "Book Eight",
		genre: "Non-Fiction",
		published: 2017,
	},
	{
		title: "Book Nine",
		genre: "Fiction",
		published: 2018,
	},
	{
		title: "Book Ten",
		genre: "Non-Fiction",
		published: 2019,
	},
];

let userBooks = books.filter((book) => {
	return book.genre === "Fiction";
});

userBooks = books.filter(
	(book) => book.published > 2015 && book.genre === "Fiction"
);
console.log(userBooks);
