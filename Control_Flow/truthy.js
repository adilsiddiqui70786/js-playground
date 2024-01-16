let userEmail = "Hayato@gmail.com";

if (userEmail) {
	console.log("Got the user Email");
} else {
	console.log("User does not have the email");
}

let emptyUser = "";

if (emptyUser) {
	console.log("Got the user Email");
} else {
	console.log("User does not have the email");
}

/* 
Falsey values:

false , 0 , -0, BigInt 0n, "" ,
null , undefined , NaN


Truthy values

true , 1 , " " , "0" 
, [] , {} , function(){} ,
 "false" , -1 , 1.1 , Infinity , -Infinity 

*/

// const array = [];

// if (array.length == 0) {
// 	console.log("Array is empty");
// }

const emObj = {};

if (Object.keys(emObj).length == 0) {
	console.log("Object is empty");
}

/* 
True : 

 false == 0
 false == ''
 0 == ''

*/
