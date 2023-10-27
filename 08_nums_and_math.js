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
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.3)); //4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.9)); //4
console.log(Math.min(4, 9, 2, 0, 8)); //0
console.log(Math.max(4, 9, 2, 0, 8)); //9

//Math.random = value 0 - 1
console.log(Math.random()); // random value 0.09224943588528767
console.log(Math.random() * 10); //3.7700616303522816
console.log(Math.random() * 10 + 1); // avoid 0 value

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
