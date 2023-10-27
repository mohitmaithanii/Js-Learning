// array =>

const myArr = [0, 1, 2, 3, 4];
const myHeros = ["spiderman", "batman", "superman"];

console.log(myArr); //[ 0, 1, 2, 3, 4 ]
console.log(myArr[1]); //1
console.log(myHeros); //[ 'spiderman', 'batman', 'superman' ]

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr2[0]);

// Arrays methods =>

//Appends new elements to the end of an array
myArr.push(6);
console.log(myArr); //[0, 1, 2, 3, 4, 6]

//Removes the last element from an array
myArr.pop();
console.log(myArr); //[ 0, 1, 2, 3, 4 ]

//Inserts new elements at the start of an array
myArr.unshift(9);
console.log(myArr); //[ 9, 0, 1, 2, 3, 4 ]

//Removes the first element from an array
myArr.shift();
console.log(myArr); // [ 0, 1, 2, 3, 4 ]

console.log(myArr.includes(9)); //false
console.log(myArr.indexOf(3)); //3
console.log(myArr.indexOf(9)); //-1

const newArr = myArr.join();

console.log(myArr); //[ 0, 1, 2, 3, 4 ]
console.log(newArr); //0,1,2,3,4
console.log(typeof newArr); //string

//slice =>
console.log("A", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1); //[ 1, 2 ]
console.log("B", myArr); //B [ 0, 1, 2, 3, 4 ]

//splice => 
const myn2 = myArr.splice(1, 3);

console.log("C", myArr); //C [ 0, 4 ]
console.log(myn2); //[ 1, 2, 3 ]
