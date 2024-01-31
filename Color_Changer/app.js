const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
	button.addEventListener("click", function (e) {
		// console.log(button);
		// if (button.id === "grey") {
		// 	body.style.backgroundColor = button.id;
		// }

		// if (button.id === "blue") {
		// 	body.style.backgroundColor = button.id;
		// }
		// if (button.id === "green") {
		// 	body.style.backgroundColor = button.id;
		// }
		// if (button.id === "yellow") {
		// 	body.style.backgroundColor = button.id;
		// }

		switch (button.id) {
			case "grey":
				body.style.backgroundColor = button.id;
				break;

			case "blue":
				body.style.backgroundColor = button.id;
				break;

			case "green":
				body.style.backgroundColor = button.id;
				break;

			case "yellow":
				body.style.backgroundColor = button.id;
				break;

			default:
				break;
		}
	});
});
