function calculate(...num1) {
    return num1
}

//console.log(calculate(200, 300, 400, 500, 600));


function calculate(val1, val2, ...num1) {
    return val2
}

//console.log(calculate(200, 300, 400, 500, 600));





const user = {
    userName: "Anurag",
    price: "100"
}

function handleObject(joObjectAaayaHai) {
    console.log(`username is ${joObjectAaayaHai.userName} and price is ${joObjectAaayaHai.price}`);
}

handleObject(user)


const a = [200, 100, 3993, 993]

function result(array) {
    return array[1]
}

console.log(result(a));
