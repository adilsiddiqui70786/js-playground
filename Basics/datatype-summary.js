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

myFunction();   // calling myfunction


// +++++++++++++++++++++++++++++++++++++++++++++++++
/* 
Memory Concepts in Js

 Stack (Primitive)  - All primitive types of data 
                         are stored in Stack 
                         
                         
 Heap(Non- Primitive) - non primitive datayped ARE stored 
                       in Heap.

    Changes are in Original
   */     

let myOldName = "Broken Aedil"

let myNewName = myOldName

myNewName = "Mohd Adil"

console.log(myOldName);  // Broken Aedil
console.log(myNewName);  // Mohd Adil



let userOne = {
    email: "userone@gmail.com",
    password: 6578,
}

let userTwo = userOne;

userTwo.password = 12345;
userTwo.email = "usertwo@gmail.com"

console.log(userOne);  // { email: 'usertwo@gmail.com', password: 12345 }
console.log(userTwo);  // { email: 'usertwo@gmail.com', password: 12345 }
