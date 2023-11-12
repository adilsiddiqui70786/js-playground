/* 
The String object is used to represent and manipulate 
a sequence of characters. 
 
*/


/*
 In JavaScript, you can choose single quotes ('), 
 double quotes ("), or backticks (`) 
 to wrap your strings in.  
 
*/
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);


const name = "Adil"

const repoCount = 25

// console.log(name +  repoCount + " Value"); outdated

console.log(`My Name is ${name}. And my Repo count is ${repoCount}`);

// Declaring Strings

const gameName = new String("Gaming-Aedil");

console.log(gameName); // [String: 'Gaming-Aedil']
console.log(gameName[7]);  // A
console.log(gameName.length);  // 12
console.log(gameName.charAt(7)); // A
console.log(gameName.indexOf("n")); // 4
console.log(gameName.toUpperCase()); // GAMING-AEDIL
console.log(gameName.toLowerCase()); // gaming-aedil
console.log(gameName.__proto__);  // {}

console.log(gameName.length - 5); // 7

const newString = gameName.substring(0, 6) // 6th of is not using
console.log(newString);  // Gaming

const anotherStr = gameName.slice(-12, 2) // Ga
console.log(anotherStr); 


let usermail = "     adilsiddiqui70786@gmail.com       "

console.log(usermail);
console.log(usermail.trim());  // trim removes starting and end spaces

const url = "https://adil.com/adil%20siddiqui"

console.log(url);
console.log(url.replace("%20", ""));  // replace wth empty string

console.log(url.includes("adil"));  // true

console.log(gameName.split("-"));  // [ 'Gaming', 'Aedil' ]

const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`); 
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}

const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/


let text = "Mr. Blue has a blue house";
let position = text.search("e")

console.log(position); // 7