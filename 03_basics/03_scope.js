


if(true) {
    let a = 10
    const b = 20
    var c = 30  
}

//console.log(a);
//console.log(b);


//here is problem var is comming out of the scope and printing value this is not good 
// console.log(c);


function one() {
    const userName = "anurag"

    function two() {
        const website = "youtube"
        //userName is accessbile in this function
        //console.log(userName);
    }
    //website is not accessible here outside of scope
    //console.log(website);

    two();
}
one();

// console.log("hello");


if(true) {
    const userName = "Anurag"
    if(userName == "Anurag") {
        const website = "youtube"

        //console.log(userName + website);
    }
    console.log(userName);
}


function addOne(num) {
    return num + 1
}

addOne(5)

// declear hone ke baad variable me rakha h
// to usee 
const addTwo = function() {
    return num + 2
}
//we can not addTwo function upper of that function 
addTwo(2)