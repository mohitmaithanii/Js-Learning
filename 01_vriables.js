//! const , let , var

const accountId = 144552;
/* const use for declare constance in js */

let accountEmail = "abc@gmail.com";
/* let and var declare variables in Js */

var accountPassword = "12345";
/*  prefer not to use var 
because of issue in block scope and functional scope */

accountCity = "Delhi";
/* in Js this is also way to declare variables 
but don't use it */

let accountState;
/* variable without value declaration */

// accountId = 2 // same const not use again and not change
accountEmail = "xyz@gmail.com";
accountPassword = "654321";
accountCity = "Pune";
accountState = "UK"


console.log(accountId);
/* use for print value */

console.table([
   accountId,
   accountEmail,
   accountPassword,
   accountCity,
   accountState,
]);
//all variables print in table form with index no.
