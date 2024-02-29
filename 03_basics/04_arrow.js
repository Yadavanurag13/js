const user = {
    userName : "anurag",
    price: 999,

    welcomeMessage: function() {
        //this refers to current context
        console.log(`${this.userName}, welcome to website`);

        //
        console.log(this);
    }
}

// user.welcomeMessage()

// user.userName = "amaan"

// user.welcomeMessage()

// console.log(this); //this will return {}

function hey() {
    console.log(this);
}
hey();

// function chai() {
//     let userName = "aamn"
//     console.log(this.userName);


        //this function will not work in functions
// }

// chai();

const chai = () => {
    let userName = "hitesh"
    console.log(this.userName);
}

chai();


// const addTow = (num1, num2) => {
//     return num1 + num2
// }
//explicit return 

// console.log(addTow(4, 5));

//diff way of decleration


//implicit return 
// const addTwo = (num1, num2) => (num1 + num2)

//react me use hota h bahut hi jydaa


const addTwo = (num1, num2) => ({username: "anurag"})

console.log(addTwo(2, 4));
