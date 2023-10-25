// Conversion Operation

// example 1=>
let score = "33"; // String

// check type of variable
console.log(typeof score);

//convert String value to Number
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // Number
console.log(valueInNumber); // print value = 33


// example 2=>
let value = null;

console.log(typeof value);

let valueInNull = Number(value);
console.log(typeof valueInNull);
console.log(valueInNull); // print value = 0

/* 
string "33" => Number 33
"33abc" => NaN
Boolean => true => 1 / false => 0
undefined => NaN
null => 0
*/


let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

/* 
1 => true
0 => false
" " => false
"mohit" => true
*/


let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber); // string
