// Stack (Primitive) , Heap (Non-primitive)

// Stack => changes in copy value

let myName = "mohit";

let anotherName = myName;
anotherName = "spiderman";

console.log(anotherName);
console.log(myName);

// Heap => changes in reference value (original value)
let userOne = {
   email: "user@gmail.com",
};

let userTwo = userOne;

userTwo.email = "xyz@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
