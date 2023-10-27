// Dates =>

let myDate = new Date();
console.log(myDate); //2023-10-27T00:06:49.082Z

console.log(myDate.toString()); // Fri Oct 27 2023 05:38:05 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); // Fri Oct 27 2023
console.log(myDate.toLocaleDateString()); // 27/10/2023

console.log(typeof myDate); // object

let createdDate = new Date(2023, 9, 27, 5, 3);
console.log(createdDate.toDateString()); // Fri Oct 27 2023
console.log(createdDate.toLocaleString()); // 27/10/2023, 5:03:00 am

let myCreatedDate = new Date("2023-10-27");
console.log(myCreatedDate.toLocaleString()); // 27/10/2023, 5:30:00 am

let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1698365946844
console.log(myCreatedDate.getTime()); // 1698364800000
console.log(Math.floor(Date.now() / 100)); // 16983660921

let newDate = new Date();
console.log(newDate.getMonth()); // 9
console.log(newDate.getDay()); // 5

// customize date, time and anything
newDate.toLocaleString("default", {
   weekday: "long",
});
console.log(newDate);
