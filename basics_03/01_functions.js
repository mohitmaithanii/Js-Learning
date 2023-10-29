//function => a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output.

function sayMyName() {
   console.log("m");
   console.log("o");
   console.log("h");
   console.log("i");
   console.log("t");
}
sayMyName();

function addTwoNumbers(num1, num2) {
   //(parameter)
   console.log(num1 + num2);
}

addTwoNumbers(3, 4); //arguments

function addTwoNumbers(num1, num2) {
   //let result = num1 + num2;
   //return result;
   return num1 + num2;
}

const result = addTwoNumbers(3, 5);

console.log("result:", result); //result: 8

function loginUserMessage(username) {
   return `${username} just logged in`;
}
console.log(loginUserMessage("mohit")); //mohit just logged in

function loginUserMessage(username) {
   return `${username} just logged in`;
}
console.log(loginUserMessage()); //undefined just logged in

//default parameters ->
function loginUserMessage(username = "sam") {
   return `${username} just logged in`;
}
console.log(loginUserMessage()); //sam just logged in

//if statement ->
function loginUserMessage(username) {
   //if (username === undefined)
   if (!username) {
      console.log("Please enter a username");
      return;
   }
   return `${username} just logged in`;
}
console.log(loginUserMessage());


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

/* 
study link =>

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
*/
