// Immediately Invoked Function Expressions

(function func() {
   //named IIFE
   console.log("DB connected");
})(); //DB connected

(() => {
   console.log("DB connected 2 ");
})(); //DB connected 2

((name) => {
   //unnamed IIFE /simple
   console.log(`DB connected 2 ${name} `);
})("mohit"); //DB connected 2 mohit
