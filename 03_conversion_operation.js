// Conversion of datatypes

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

// Operations =>

let val = 3;
let negValue = -val;
console.log(negValue); // -3

/* 
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2); 
*/

let str1 = "hello";
let srt2 = " mohit";

let str3 = str1 + srt2;
console.log(str3);

/* 
don't use these type of tricky operations =>

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log(1 + 2 + "2");

console.log(((3 + 4) * 5) % 3);
console.log(+true);
console.log(+"");
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
*/

/* link to study =>

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
*/

//increment operator
let gameCounterInc = 100;
gameCounter++;
++gameCounter;
console.log(gameCounter);

//decrement operator
let gameCounterDec = 100;
gameCounter--;
--gameCounter;
console.log(gameCounter);
