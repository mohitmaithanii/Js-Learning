//! Datatypes in Js

/* 
1. number => 1234567890
2. null => standalone value/empty value
3. boolean => true/false
4. bigInt => big numbers
5. string => '',""
6. symbol => defined uniqueness 
7. undefined => not assigned value 
*/

let number = 1234567890; //number
console.log(typeof number);

let age = null; //null
console.log(typeof age);

let isLoggedIn = false; //boolean
console.log(typeof isLoggedIn);

let bigNumber = BigInt(1121212221); //bigInt
console.log(typeof bigNumber);

let name = "mohit"; //string
console.log(typeof name);

let sym1 = Symbol("hello"); //symbol
console.log(typeof sym1);

let anything; //undefined
console.log(typeof anything);
