
//these are primitive datatype and anothername will get copy of myName and if any changes would occur
// it will occur in copy of myname so it does not impact on myName
let myName = "Anurag"
let anothername = myName;

anothername = "Aman"

console.log(myName);
console.log(anothername);


//heap will be allocted
//non pritmtive type it will get the reference it change would reflect in both of the object's value
let userOne = {
    email: "anurag@google.com",
    name: "anurag",
}

let userTwo = userOne;

userTwo.email = "aman@google.com"

console.log(userOne.email);
console.log(userTwo.email);