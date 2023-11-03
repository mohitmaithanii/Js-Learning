// singleton objects =>

/* 
object literals => It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax
*/
const mySym = Symbol("key1");

const jsUser = {
   name: "mohit",
   "full name": "mohit maithani",
   age: 21,
   location: "Gauchar",
   email: "xyz@gmial.com",
   isLoggedIn: false,
   lastLoginDays: ["Monday", "Saturday"],
   [mySym]: "myKey1",
};

console.log(jsUser.email); //xyz@gmial.com
console.log(jsUser["email"]); //xyz@gmial.com
console.log(jsUser["full name"]); //mohit maithani
console.log(jsUser[mySym]); //myKey1

jsUser.email = "abc@gmail.com"; //change value
console.log(jsUser.email); //abc@gmail.com

Object.freeze(jsUser); //value locked
jsUser.email = "insta@gmail.com";
console.log(jsUser);

//object function =>
jsUser.greeting = function () {
   console.log("Hello js user");
};

console.log(jsUser.greeting()); //hello js user
console.log(jsUser.greeting); //[Function (anonymous)]

jsUser.greeting2 = function () {
   console.log(`Hello js user, ${this.name}`);
};

console.log(jsUser.greeting2()); //Hello js user, mohit
