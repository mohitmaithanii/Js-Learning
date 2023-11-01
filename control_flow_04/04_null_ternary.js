// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10; // 5
val1 = null ?? 10; // 10
val1 = undefined ?? 15; // 15
val1 = null ?? 10 ?? 20; // 10

console.log(val1);

// Ternary Operator =>

/* condition ? true : false */
const teaPrice = 100;
teaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
