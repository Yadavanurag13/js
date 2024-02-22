// primitive type

//7 types : String, Number, Boolean, null, undefined, Symbol, bigInt
const num = 10
const score = 10.3

const bool = true
const outsideTemp = null
let state 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)
//non primitive(reference)

// Array, Objects, funtions

const heros = ["Shaktiman", "krish"]

//object can be declear in two ways
{
    name : "Anurag"
    age : 21
}
let myobj = {
    name : "Anurag",
    age : 21,
}


//function

const myfun = function() {
    console.log("Hello world");
}

