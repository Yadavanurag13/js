//for fo loop

// [{}, {}]

//kind of for each loop of java

const arr = [1, 2, 3, 4, 5, 6, 7]

for (const i of arr) {
    //console.log(i);
}

const greeting = "hello world"

for(const greet of greeting) {
    if(greet == ' ') {
        continue;
    }else {
        //console.log(`each char of greeting ${greet}`);
    }
}

const map = new Map()
map.set('In', "India")
map.set('USA', "United States of America")

console.log(map)

for(const key of map) {
    //console.log(key);
}

for(const [key] of map) {
    //console.log(key);
}

for(const [key, value] of map) {
    //console.log(key, value);
}

const myObject = {
    'game1': 'bgmi', 
    'game2': 'pubg'
}

// for(const key of myObject) {
//     console.log(key);
// }


//Objects are not iterable by for of loop