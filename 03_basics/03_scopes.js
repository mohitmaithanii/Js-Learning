// Scopes =>

let a = 300; // global scope
const b = 400;
var c = 500;

if (true) {
   //block scope
   let a = 10;
   console.log(a); //10

   const b = 20;
   console.log(b); //20

   var c = 30;
   console.log(c); //30
}

console.log(a); //300
console.log(b); //400
console.log(c); //30 avoid var

//nested functions ->
function one() {
   const username = "mohit";

   function two() {
      const website = "youtube";
      console.log(username); //mohit
   }
   console.log(website); //not defined
   two();
}
one();

if (true) {
   const username = "mohit";
   if (username === "mohit") {
      const website = " youtube";
      console.log(username + website); //mohit youtube
   }
   console.log(website); //not defined
}
console.log(username); //not defined

// interesting ->
console.log(addOne(5)); //6
function addOne(num) {
   return num + 1;
}

console.log(addTwo(5)); //Cannot access 'addTwo' before initialization
const addTwo = function (num) {
   return num + 2;
};
