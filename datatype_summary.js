//primitive =>

/*
7 types -> typeof value:

String -> string
Number -> number
Boolean -> boolean
null -> object
undefined -> undefined
symbol -> symbol
bigInt -> bigint
*/

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = true;
const temp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); //false

const bigNumber = 223527872832836232686287n;
console.log(typeof bigNumber); //bigInt

//Reference (Non-primitive) =>

/* 
Array 
Object,
Function
*/

const myArr = ["batman", "superman", "spiderman"];
console.log(typeof myArr); //object


const myObj = {
   name: "mohit",
   age: 21,
};
console.log(typeof myObj); //object


const myFunc = function () {
   console.log("hello");
};
console.log(typeof myFunc); //object function


/*
link to study =>

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures 
*/