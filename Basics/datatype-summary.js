/*

JS is dynamicaly typed language. We don't
have to specify that this variable is 
using what , which datatypes..

On the basis of => 
How data are stored in memory and access 
there is two categories of datatypes in javaScript.

*/

// 1. Primitive     
// 7 types: String, Number, Boolean, null, undefined, bigInt, Symbol

const score = 10;

const scoreValue = 100.3

const name = "David M";

const isLoggedIn = false;

const outsidetemp = null;
typeof null; // "object"


let  userEmail;

//Symbol
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // false

const bigIntValue = 1234567890123456789012345678901234567890n;
console.log(typeof bigIntValue);   // big int
/* 
 References (Non primitive)

 // Array, Functions, object

*/



let heroes = ["Shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Mohd Adil",
    age: 20,
    marks: 76,
}

const myFunction = function() {
    console.log("Hello javaScript");
}

myfunction();   // calling myfunction
