const score = 400
console.log(score); // 400

const balance = new Number(100)
console.log(balance);   // [Number: 100]


console.log(balance.toString());   // "100"
console.log(balance.toString().length);   //3
console.log(balance.toFixed(2));  // 100.00


const otherNum = 123.98
console.log(otherNum.toPrecision(3));  //124

const hundreds = 1000000
console.log(hundreds.toLocaleString());  //1,000,000  Us standards
console.log(hundreds.toLocaleString("en-IN"));  //10,00,000


// +++++++++++++++++++++++ Maths +++++++++++++++++

console.log(Math.PI);  // 3.1415926535897934

console.log(Math.abs(-5)); // 5   Absolute - neg to positive
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4, 8, 7 , 9 , 30));  // 4 
console.log(Math.max(4, 8, 7 , 9 , 30));  // 30



console.log(Math.random());   // Returns a pseudorandom number between 0 and 1.
console.log((Math.random()*10) + 1); 
console.log(Math.floor(Math.random()*10) + 1); 


const min = 10
const max = 20

const ranNum = Math.floor(Math.random() * (max - min +1) + min);
console.log(ranNum);



function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const ranNumber = getRandomNumber(10, 20)
  console.log(ranNumber);
