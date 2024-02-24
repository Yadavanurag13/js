const marvel_heros = ["thor", "ironman", "spiderman"]

const dc_heros = ["superman", "flash", "batman"];

//marvel_heros.push(dc_heros)

const newarr = marvel_heros.concat(dc_heros)
console.log(newarr);

//it can take two or more array to combine
const newHeros = [...marvel_heros, ...dc_heros]
console.log(newHeros);

//combine array in array situation
const another_array = [1, 2, 3, 4, [5, 6, 7], 8, [9, [10, 11]]]
const real_anothe_array = another_array.flat(Infinity)

console.log(real_anothe_array);


console.log(Array.isArray("Anurag"));
console.log(Array.from("Anurag"));

console.log(Array.from({name: "Anurag"})); //interesting 


let a = 10
let b = 20
let c = 30

console.log(Array.of(a, b, c));
