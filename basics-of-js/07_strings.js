// String in Js =>

const name = "mohit";
const repoCount = 50;

console.log(name + repoCount + " Value"); // don't use

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
// string interpolation

const gameName = new String("mohit.com");

console.log(gameName[0]); // key value pair
console.log(gameName.__proto__); // prototypes methods

//some strings methods
console.log(gameName.length); // 5
console.log(gameName.toUpperCase()); //MOHIT
console.log(gameName.charAt(2)); // h
console.log(gameName.indexOf("t")); //4

const newString = gameName.substring(0, 3);
console.log(newString); // moh

const anotherString = gameName.slice(0, 3);
console.log(anotherString); // moh

const newString1 = "    mohit    ";
console.log(newString1); //     mohit
console.log(newString1.trim()); // mohit

const url = "https://google.com/xyz%12abc";
console.log(url.replace("%12", "-")); // https://google.com/xyz-abc
console.log(url.includes("abc")); // true
console.log(url.split("/")); // [ 'https:', '', 'google.com', 'xyz%12abc' ]

/* 
Study link =>

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String */
