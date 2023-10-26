const score = 100;
console.log(score); // 100

const balance = new Number(100);
console.log(balance); //[Number: 100]

console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 100.00

const otherNumber = 213.2321;
console.log(otherNumber.toPrecision(4)); //213.2

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // 10,00,000

// Maths =>

console.log(Math); //Object [Math] {}