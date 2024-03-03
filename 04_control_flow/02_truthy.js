const userEmail = []

if(userEmail) {
    //console.log("Got user email")
}else {
    //console.log("Don't have user email");
}


//falsey valuese
//false, 0, -0, BigInt 0n, "", null, undefined, Nan

//turthy values
//"0", 'false' ," ", [], {}, function() {}


if(userEmail.length === 0) {
//    console.log("Array is empty");
}


const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    //console.log("Object is empty");
}


// nullish coalescing Operator

let val1;

//val1 = 5 ?? 10;

//val1 = null ?? 19;

//val1 = undefined ?? 10

//use for avoiding null value
val1 = 19 ?? undefined
console.log(val1);