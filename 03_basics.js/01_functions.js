//function =>

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

function loginUserMessage(username = "sam") {
   //default parameters
   return `${username} just logged in`;
}
console.log(loginUserMessage()); //sam just logged in

