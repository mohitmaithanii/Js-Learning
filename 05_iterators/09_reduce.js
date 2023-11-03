// reduce => Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

const myNum = [1, 2, 3, 4];

const myTotal = myNum.reduce(function (acc, currVal) {
   console.log(`acc: ${acc} and currVal: ${currVal}`);
   return acc + currVal;
}, 0);

//const myTotal = myNum.reduce((acc, currVal) => acc + currVal, 0);

console.log(myTotal);

const shoppingCart = [
   {
      itemName: "js course",
      price: 2999,
   },
   {
      itemName: "py course",
      price: 999,
   },
   {
      itemName: "mobile dev course",
      price: 5999,
   },
   {
      itemName: "data science course",
      price: 1999,
   },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
