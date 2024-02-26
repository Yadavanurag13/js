// const tinderUser = new Object();  this is singlenton object

// const tinderUser = {} ye non singlenton object h both are samen internally 

const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "Anurag"
tinderUser.isLoggedIn = "false"

//console.log(tinderUser);

const regularUser = {
    email: "anurag@google.com",
    fathername : {
        firstName : "Shrawan Kumar",
        lastName : "Yadav"
    }
}


//console.log(regularUser.fathername.firstName);

const obj1 = {1: "1", 2: "2"}
const obj2 = {3: "2", 4: "2"}

const obj3 = {obj1, obj2}
//array ke under array wali problem 
//console.log(obj3);

//object ke under object aa jayega so avoid it

//const obj4 = Object.assign({}, [obj1, obj2])

//console.log(obj4);

const obj4 = {...obj1,...obj2}

//console.log(obj4);


//when data come form database it will come in form of array of object

const user = [
    {
        id: "1",
        name: "anurag",
    },
    {
        id: "1",
        name: "anurag",
    },
    {
        id: "1",
        name: "anurag",
    }
]

user[1].id

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//object destructure

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh",
}

// const {courseInstructor} = course

// console.log(courseInstructor);

const {courseInstructor : instructor} = course

console.log(instructor);

