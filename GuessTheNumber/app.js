let randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector("#subt");
const userInput = document.querySelector(".guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastresult");
const startOver = document.querySelector(".resultParas");
const lowOrHi = document.querySelector(".lowOrhi");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
	submit.addEventListener("click", function (e) {
		e.preventDefault();
		const guess = parseInt(userInput.value);
		validateGuess(guess);
	});
}

function validateGuess(guess) {
	if (isNaN(guess)) {
		alert("Please enter a valid number");
	} else if (guess < 1) {
		alert("Please enter a number greater than 1!");
	} else if (guess > 100) {
		alert("Please enter a number less than 100!");
	} else {
		prevGuess.push(guess);
		if (numGuess === 11) {
			displayGuess(guess);
			displayMessage("Game Over!. Random number was: " + randomNumber);
			endGame();
		} else {
			displayGuess(guess);
			checkGuess(guess);
		}
	}
}

function checkGuess(guess) {
	if (guess === randomNumber) {
		displayMessage("Congratulations! You got it right!");
		endGame();
	} else if (guess < randomNumber) {
		displayMessage("Too Low! Try again!");
	} else if (guess > randomNumber) {
		displayMessage("Too High! Try again!");
	}
}

function displayGuess(guess) {
	userInput.value = "";
	guessSlot.innerHTML += guess + ", ";
	numGuess++;
	remaining.innerHTML = `Remaining Guesses: ${12 - numGuess}`;
}

function displayMessage(message) {
	lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
	userInput.value = "";
	userInput.setAttribute("disabled", "");
	p.classList.add("button");
	p.innerHTML = ` <h3 id="newGame">Start New Game</h3>`;
	startOver.appendChild(p);
	playGame = false;
	newGame();
}

function newGame() {
	const newGameButton = document.querySelector("#newGame");
	newGameButton.addEventListener("click", function () {
		randomNumber = Math.floor(Math.random() * 100) + 1;
		prevGuess = [];
		numGuess = 1;
		guessSlot.innerHTML = "";
		lowOrHi.innerHTML = "";
		remaining.innerHTML = `Remaining Guesses: ${12 - numGuess}`;
		userInput.removeAttribute("disabled");
		startOver.removeChild(p);
		playGame = true;
	});
}
