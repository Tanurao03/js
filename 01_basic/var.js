const account_id = 144553;
let account_email = "xyz@gmail.com";
var account_pw = "12345";
account_city = "Jaipur";
let accout_state;

// account_id = 2

account_email = "x@gmail.com";
account_pw = "2343";

/*
don't use var because of issue in block scope and functional scope
*/
console.log(account_id);

console.table([account_email, account_id, account_pw, account_city, accout_state]);
