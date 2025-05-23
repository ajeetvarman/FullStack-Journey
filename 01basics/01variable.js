const accountId = 2342
let accountEmail = "ajeet@gmail.com"
var accountPassword = "5334"


// accountId = 2 // not allowed

accountEmail = "vijay@gmail.com"
accountPassword = "4666"

/*
prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword ]); 