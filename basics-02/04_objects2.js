const facebookUser = new Object(); //singleton object
console.log(facebookUser);

const twitterUser = {}; //non-singleton object

twitterUser.id = "123abc";
twitterUser.name = "mohit";
twitterUser.isLoggedIn = "false";

console.log(twitterUser);

const regularUser = {
   email: "xyz@gmial.com",
   fullname: {
      userFullName: {
         firstName: "mohit",
         lastName: "maithani",
      },
   },
};
console.log(regularUser.fullname.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" };

const obj2 = { 3: "a", 4: "b" };

const obj3 = { 5: "a", 6: "b" };

//const obj4 = { obj1, obj2, obj3 };
/* {
  obj1: { '1': 'a', '2': 'b' },
  obj2: { '3': 'a', '4': 'b' },
  obj3: { '5': 'a', '6': 'b' }
} */

//const obj4 = Object.assign({}, obj1, obj2, obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj4 = { ...obj1, ...obj2, ...obj3 }; //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

console.log(obj4);

const user = [
   {
      id: 1,
      email: "xyz@gmail.com",
   },
   {
      id: 2,
      email: "xyz@gmail.com",
   },
   {
      id: 3,
      email: "xyz@gmail.com",
   },
];
console.log(user[1].email); //xyz@gmail.com

console.log(twitterUser); //{ id: '123abc', name: 'mohit', isLoggedIn: 'false' }
console.log(Object.keys(twitterUser)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(twitterUser)); //[ '123abc', 'mohit', 'false' ]
console.log(Object.entries(twitterUser)); //[ [ 'id', '123abc' ], [ 'name', 'mohit' ], [ 'isLoggedIn', 'false' ] ]
console.log(twitterUser.hasOwnProperty("isLoggedIn")); //true

/* 
study link =>

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
*/
