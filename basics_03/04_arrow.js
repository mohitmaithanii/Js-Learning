//this keyword =>

const user = {
   username: "mohit",
   age: 21,

   welcomeMessage: function () {
      console.log(`${this.username} , welcome to website`);
      console.log(this);
   },
};

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

console.log(this); //{}

function fun() {
   let username = "mohit";
   console.log(this.username);
}
fun(); //undefined

const fun2 = function () {
   let username = "mohit";
   console.log(this.username);
};

fun2(); //undefined

const fun3 = () => {
   let username = "mohit";
   console.log(this.username);
};
fun3(); //undefined

//Arrow function =>

const addTwo = (num1, num2) => {
   return num1 + num2;
};

//const addTwo = (num1, num2) => num1 + num2;

//const addTwo = (num1, num2) => ( num1 + num2 );

//const addTwo = (num1, num2) => ({ username: "mohit" }); //{ username: 'mohit' }

console.log(addTwo(3, 4));

