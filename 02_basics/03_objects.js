
const mySym = Symbol("key1")
//by default key are treated as string
const Jsuser = {
    name: "Anurag",
    //mySym: "myKey1",

    [mySym] : "myKey1",
    //in case when there is gap in full and name it can be accesed by . notation
    "fullname": "Anurag Yadav",

    //this can not be solved
    "father name": "Shrawan Kumar Yadav",

    age: 21,
    location: "Greater Noida",
    email: "yadavanurag@gmail.com"
}
//this method will not work when any key is defined in string form
//console.log(Jsuser.full);

//another method 
// console.log(Jsuser["fullname"]);
// console.log(Jsuser["father name"]);

// console.log(Jsuser[mySym]);

Jsuser.email = "anurag@google.com"

// console.log(Jsuser);

//we have freeze the object no more changes will reflect in object
//Object.freeze(Jsuser)

Jsuser.email = "anurag@microsoft.com"

// console.log(Jsuser);



Jsuser.greeting = function() {
    console.log("Hello ");
}

console.log(Jsuser.greeting());

Jsuser.greetingTwo = function() {
    console.log(`Hello Js Developer ${Jsuser.name}`);
}

console.log(Jsuser.greetingTwo());


