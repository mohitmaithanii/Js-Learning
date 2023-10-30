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
