const num = [1, 2, 3]

// const total = num.reduce(function(acc, curr) {
//     console.log(`acc: ${acc} and curr: ${curr}`);
//     return acc + curr;
// }, 0)

const total = num.reduce((acc, curr) => {
    return acc + curr
}, 1)

//after the bracket we assign with the intial value

console.log(total);


const shoppingCart = [
    {
        iterName: "jscourse",
        price: 2999,
    },
    {
        itemName: "data science",
        price: 5999,
    },
    {
        iterName: "mobile dev",
        price: 4999,
    },
]

const totalPrice = shoppingCart.reduce((acc, curr) => {
    return acc + curr.price;
}, 0)

console.log(totalPrice);