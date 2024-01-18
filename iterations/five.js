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
