// Array part 2 =>

const marvelHeros = ["thor", "ironman", "spiderman"];
const dcHeros = ["superman", "flash", "batman"];

marvelHeros.push(dcHeros);

console.log(marvelHeros); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvelHeros[3]); //[ 'superman', 'flash', 'batman' ]

//concat => Combines two or more arrays. This method returns a new array without modifying any existing arrays
const allHeros = marvelHeros.concat(dcHeros);

console.log(allHeros); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//spread => The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments or elements are expected.
const allNewHeros = [...marvelHeros, ...dcHeros];

console.log(allNewHeros); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//flat => Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const realAnotherArr = anotherArr.flat(Infinity);

console.log(realAnotherArr);
/* [
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
] */

console.log(Array.isArray("mohit")); //false

//form => Creates an array from an iterable object.
console.log(Array.from("mohit")); //[ 'm', 'o', 'h', 'i', 't' ]
console.log(Array.from({ name: "mohit" })); //[]

let score1 = 100;
let score2 = 200;
let score3 = 300;

//of => Returns a new array from a set of elements
console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]
