//contains different datatypes
const arr = [0, 1, 2, 3, 4, "Anurag", true]

const myarr = new Array(1, 3, 4, 5, 6)

//console.log(myarr[5]);


//arrray method

myarr.push(7)
myarr.push(8)
// console.log(myarr);

myarr.unshift(9)
// console.log(myarr);

// console.log(myarr.includes(10));
// console.log(myarr.indexOf(9));

//convert array into string
const newArr = myarr.join();

// console.log(typeof newArr);

//slice and splice

// console.log("A", myarr);

// const narr1 = myarr.slice(1, 3);
// console.log(narr1);
// console.log("b", myarr);

//include the range and modifies the original array
const narr2 = myarr;
narr2.push(10);

console.log(myarr);
console.log(narr2);

// console.log(narr2);
// console.log("c", myarr);
