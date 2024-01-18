const course = ["BCA", "MCA", "Btech"];

// course.forEach(function (item) {
// 	console.log(item);
// });

course.forEach((item) => {
	// console.log(item);
});

function PrintMe(item) {
	console.log(item);
}

course.forEach((item) => PrintMe(item));

course.forEach((item, index, arr) => {
	console.log(item, index, arr);
});

const myCoding = [
	{
		id: 1,
		name: "HTML",
	},
	{
		id: 2,
		name: "CSS",
	},
	{
		id: 3,
		name: "JS",
	},
	{
		id: 4,
		name: "PHP",
	},
	{
		id: 5,
		name: "Python",
	},
	{
		id: 6,
		name: "Java",
	},
	{
		id: 7,
		name: "C++",
	},
	{
		id: 8,
		name: "C#",
	},
	{
		id: 9,
		name: "C",
	},
	{
		id: 10,
		name: "Ruby",
	},
];

myCoding.forEach((item) => {
	console.log(item.id, item.name);
});
