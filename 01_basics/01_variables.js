const accountId = 13333
let accountEmail = "anurag@gmail.com"
var accountPassword = "1356"
accountCity = "Jaipur"

let accountState;

// accountId = 2 // is not allowed
accountEmail = "anuragggg@gmail.com"
accountPassword = "2233"
accountCity = "Benglore"



console.log(accountId);
/*
Prefer not to use var and without decleartion
Block Scope issue
*/ 
console.table([accountEmail, accountPassword, accountCity, accountState]);