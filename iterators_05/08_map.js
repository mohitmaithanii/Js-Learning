// map => Calls a defined callback function on each element of an array, and returns an array that contains the results.

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newNum = myNumbers.map((num) => num + 10);
//console.log(newNum);

// chaining =>
const newNum = myNumbers
   .map((num) => num * 10)
   .map((num) => num + 1)
   .filter((num) => num >= 40);
console.log(newNum); 
