const coding = ["js", "rubby", "java", "cpp"]


//call back function don't have name
coding.forEach(function (item) {
  //  console.log(item);
})

coding.forEach((item) => {
//    console.log(item);
})

function printme(item) {
    //console.log(item);
}

coding.forEach(printme)
 
//this function not only carry item but also index and arr too
coding.forEach((item, index, arr) => {
    //console.log(item, index, arr);
})

const myCoding = [
    {
        languageName : "javascript",
        languagefile: "js",
    },
    {
        languageName : "java",
        languagefile: "java",
    },
    {
        languageName : "c++",
        languagefile: "cpp",
    },
    {
        languageName : "python",
        languagefile: "py",
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
    console.log(item.languagefile);
})