const myObjectN = {
    'js': 'Javascript',
    'cpp': 'c++',
    'rb': 'ruby',
}

for(const key in myObjectN) {
   //console.log(key);
}

for(const key in myObjectN) {
    //console.log(`${key} shortcut is for ${myObjectN[key]}`);
}

//by defult array has also key functionality 
//starting with 0 that's why object are designed they don't have predefined key value
const narr =['js', 'java', 'cpp']

for(const key in narr) {
    //console.log(narr[key]);
}



//map are not iterable so we can not use for in loop for then
const map = new Map()
map.set('In', "India")
map.set('USA', "United States of America")

for(const key in map) {
    console.log(key);
}