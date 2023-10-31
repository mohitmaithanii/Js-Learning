const user = {
   username: "mohit",
   age: 21,

   welcomeMessage: function () {
      console.log(`${this.username} , welcome to website`);
   },
};

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();
