//fetch('https://somting.com').then().catch().finally()


//promises is Object
const promise1 = new Promise(function(resolve, reject) {
    //do ans async task
    //DB calls

    setTimeout(function() {
        //console.log('async task is complete');
        resolve()
    }, 3000)
})

//promise consumption
promise1.then(function() {
    //console.log("promise consumed");
})

new Promise(function(resolve, reject) {
    setTimeout(function() {
        //console.log("async2 is completed");
        resolve()
    }, 4000)
}).then(function() {
    //console.log("async is consumed");
})


const promise3 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "anurag", email: "anurag@google.in"})        
    }, 1000)
})

promise3.then(function(user) {
    //console.log(user);
})


const promise4 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;

        if(!error) {
            resolve({username:"anurag", password: "123"})
        }else {
            reject('ERROR: Something went wrong')
        }
    }, 3000)
})

//promise4.then().catch()

// const userName = promise4.then((user) => {
//     console.log(user);

//     return user.username
// })

// console.log(userName);


promise4.
then((user) => {
    return user.username
})
.then((userName) => {
    console.log(userName);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("The Promise is either rejected of resolved");
})



promise5 = new Promise(function(reject, resolve) {
    setTimeout(function() {
        let error = true;

        if(!error) {
            resolve({username:"javascript", password: "123"})
        }else {
            reject('Error: JS wend wrong')
        }
    }, 3000)
})

async function consumePromiseFive() {
    // const response = await promise5
    // console.log(response);
    try{
        const response = await promise5
        console.log(response)
    }catch{
        console.log(error);
    }
}


async function getAllUsers() {
    fetch('')
}

