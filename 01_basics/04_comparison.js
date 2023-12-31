//Comparison In Js =>


//basic comparison =>

console.log(2 > 1); //true
console.log(2 >= 1); //true
console.log(2 < 1); //false
console.log(2 <= 1); //false
console.log(2 == 1); //false
console.log(2 != 1); //true

// deferent datatypes comparison =>

// avoid this type of code and don't use 

console.log("2" > 1); //true
console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// === => strict checking
console.log("2" === 2); //false

/* 
link to study =>

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
*/