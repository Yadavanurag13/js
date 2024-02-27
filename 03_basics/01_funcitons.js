function sayMyName() {
    console.log("A")
    console.log("N")
    console.log("u")
    console.log("R")
    console.log("A")
    console.log("g")
}

//sayMyName()

function addTwoNumber(number1, number2) {
    console.log(number1 + number2);
}


//addTwoNumber(2, 4)

// const result = addTwoNumber(3, 4)
// console.log(result);

function addTwoNumber(number1, number2) {
    // let result = number1 + number2;

    // return result;

    return number1 + number2
}

const ans = addTwoNumber(2, 3)
// console.log(ans);

function loginUserMessage(username) {
    // if(username === undefined) {
    //     console.log("Please enter a username");
    //     return 
    // }
    if(!username) {
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("anurag"));
//when nothing is passed it will return undefined
// console.log(loginUserMessage());

