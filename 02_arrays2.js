// Array part 2 =>

const marvelHeros = ["thor", "ironman", "spiderman"];
const dcHeros = ["superman", "flash", "batman"];

marvelHeros.push(dcHeros);

console.log(marvelHeros); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvelHeros[3]); //[ 'superman', 'flash', 'batman' ]


//concat =>
const allHeros = marvelHeros.concat(dcHeros);

console.log(allHeros); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


//spread =>
const allNewHeros = [...marvelHeros, ...dcHeros];

console.log(allNewHeros); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


//flat =>
const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const realAnotherArr = anotherArr.flat(Infinity);

console.log(realAnotherArr);
/* [
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
] */


console.log(Array.isArray("mohit")); //false
console.log(Array.from("mohit")); //[ 'm', 'o', 'h', 'i', 't' ]
console.log(Array.from({ name: "mohit" })); //[]

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]
