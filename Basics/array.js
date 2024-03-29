/* 
 In JavaScript, an array is a data structure that allows
 you to store and manipulate a collection of
 values. Arrays can contain elements of any data type,
 including numbers, strings, objects, or even other arrays.

 Array is object, Collection of multiple elements in single variables.
*/

const myArr = [0, 1, 2, 3, 4, 5, 6]
const myHeros = ["Doremon", "pokimon"]

// Using array literal
const fruits = ['apple', 'orange', 'banana'];

// Using Array constructor
let numbers = new Array(1, 2, 3, 4, 5);

console.log(fruits[0]);  // Apple - give the first element of array
console.log(fruits[2]);  // banana  
// Array Methods

myArr.push(7)  // Adds '7 to the end
myArr.pop(); // Removes the last element 


// myArr.unshift(9);  // Adds '9' to the beginning and Time consuming process in big project

fruits.unshift('kiwi'); // Adds 'kiwi' to the beginning
fruits.shift(); // Removes the first element ('kiwi')

// myArr.shift()

console.log(myArr.includes(9));  // false
console.log(myArr.includes(4));  // true

console.log(myArr.indexOf(1)); // 1

console.log(myArr);

// const newArr = myArr.join()  // change arrays into string

// Slice , Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);  //Extracts elements at index 1 and 2
console.log(myn1);  // [ 1, 2 ]
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);  // [ 1, 2, 3 ] 

console.log("C, ", myArr);  // [ 1, 2, 3 ]   it removes what we extract in origin array


fruits.splice(1, 0, 'peach', 'cherry'); // Adds 'peach' and 'cherry' at index 1
fruits.splice(2, 1); // Removes 1 element at index 2

// console.log(fruits);




// console.log(myHeros.length);  // 2

// const flowers = ["lotus", "Rose"];
// let combinedArray = fruits.concat(flowers);  // concat return a new array
// console.log(combinedArray); //  [ 'apple', 'peach', 'orange', 'banana', 'lotus', 'Rose' ]
// fruits.push(flowers);

// console.log(fruits);
// console.log(fruits[4][1]);  // Rose

// Spred

let moreFruits = ['mango', 'pineapple'];

const allfruits = [...fruits, ...moreFruits];
console.log(allfruits);


let newArray = [1, 2, [3, 4, 5], 6, [8, 9], 7];

let realArr = newArray.flat(Infinity);
console.log(realArr);  

console.log(Array.isArray(["Adil"]));  // true
console.log(Array.isArray("name"));  // false

console.log(Array.from("Adil"));  // [ 'A', 'd', 'i', 'l' ]

console.log(Array.from({name: "Adil"})); // []  4

console.log(Array.of("Adil", "Saif",));  // [ 'Adil', 'Saif']