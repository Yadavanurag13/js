const name = "anurag"
const repoCount = "10"

//console.log(name + repoCount + " value");

//this is standard way of doing contenation

//string interpolation
console.log(`My name is ${name} and my repo count ${repoCount}`);


const gameName = new String('anuragyadav');

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.toUpperCase());

console.log(gameName.length);
console.log(gameName.charAt(9));

//exclusive h
const newString = gameName.substring(0, 4);
console.log(newString);

//it will give result from opposite side too
const newstring = gameName.slice(-8, 4);
console.log(newstring);

//trim whitespace hata deta h
const n = "   anurag"
console.log(n.trim());

const m = "anurag-yadav-shg"
//it will give array of string and split on the basis of this
console.log(m.split('-'));