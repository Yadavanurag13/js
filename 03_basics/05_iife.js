// iife function is used to prevent form global polution

// immediately invoked function expressions
//()()


(function anurag() {

    //named iife
    console.log(`DB connected`);
})();

//we need to stop function explicitely this time by adding

// (() => {
//     console.log(`DB connected`);
// }) ()
//every function will work out wheather it is regular funtion or arrow function

( (name) => {
    console.log(`DB connected two ${name}`);
} ) ("anurag")