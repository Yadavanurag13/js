const score = 400

const balance = new Number(400)

// console.log(score);
// console.log(balance);

// console.log(balance.toString().length);

// console.log(balance.toFixed(3));

const otherNumb = 123.876
//console.log(otherNumb.toPrecision(6));

const num = 1000000
//us style
// console.log(num.toLocaleString());
// //indian standard
// console.log(num.toLocaleString('en-IN'));




//++++++++++++++++++++++++++++MATH+++++++++++++++++++++

//console.log(Math);

//zer0 - 1 random number 
console.log(Math.random());

console.log(Math.random() * 10);

console.log(Math.floor(Math.random() * 10));
//this will give random number from 1 to 
console.log(Math.floor(Math.random() * 10) + 1);


//if in case there is cap for min and max so we would use given formula 
const min = 10
const max = 20


//it will give random number between min and max
console.log(Math.floor(Math.random() * (max - min + 1)) + min);