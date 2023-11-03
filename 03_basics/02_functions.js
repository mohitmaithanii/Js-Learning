//rest operator ->
function calculateCratePrice(num1) {
   return num1;
}
console.log(calculateCratePrice(200, 400, 500, 2000)); //200

function calculateCratePrice(...num1) {
   return num1;
}
console.log(calculateCratePrice(200, 400, 500, 2000)); //[ 200, 400, 500, 2000 ]

function calculateCratePrice(val1, val2, ...num1) {
   return num1;
}
console.log(calculateCratePrice(200, 400, 500, 2000)); //[ 500, 2000 ]

// function with object ->
const user = {
   username: "mohit",
   age: 21,
};
function handleObject(anyobject) {
   console.log(
      `username is ${anyobject.username} and price is ${anyobject.age}`
   );
}
handleObject(user); //username is mohit and price is 21

handleObject({
   username: "sam",
   age: 18,
}); //username is sam and price is 18

// function with array ->
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
   return getArray[1];
}
console.log(returnSecondValue(myNewArray)); //400
