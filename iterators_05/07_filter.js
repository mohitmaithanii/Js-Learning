// filter => Returns the elements of an array that meet the condition specified in a callback function.

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = myNum.filter((num) => num > 4);

/* const newNum = myNum.filter((num) => {
   return num > 4;
}); */
console.log(newNum); //[5, 6, 7, 8, 9, 10];


const newNum = [];

myNum.forEach((num) => {
   if (num > 4) {
      newNum.push(num);
   }
});
console.log(newNum); //[ 5, 6, 7, 8, 9, 10 ]

const books = [
   {
      title: "Book One",
      genre: "Fiction",
      publish: 1981,
   },
   {
      title: "Book Two",
      genre: "Non-Fiction",
      publish: 1992,
   },
   {
      title: "Book Three",
      genre: "History",
      publish: 1981,
   },
   {
      title: "Book Four",
      genre: "Non-Fiction",
      publish: 1999,
   },
   {
      title: "Book Five",
      genre: "Science",
      publish: 1989,
   },
   {
      title: "Book Six",
      genre: "Fiction",
      publish: 2000,
   },
];

const userBooks = books.filter((bk) => bk.genre === "History");

console.log(userBooks); //[ { title: 'Book Three', genre: 'History', publish: 1981 } ]

/* const userBooks = books.filter((bk) => {
   return bk.publish >= 1995 && bk.genre === "Fiction";
}); */

console.log(userBooks); // [ { title: 'Book Six', genre: 'Fiction', publish: 2000 } ]
