/*  truthy value =>
    "0", "false", " ", [], {}, function(){} */

const userEmail = "xyz@gmail.com";

if (userEmail) {
   console.log("Got user email"); // true
} else {
   console.log("don't have user email ");
}

/* falsy value =>
null, undefined, false, "", 0, NaN, BigInt 0n, -0 */

const userGmail = "";
if (userGmail) {
   console.log("Got user email");
} else {
   console.log("don't have user email "); // true
}

// check array/object is empty

const emptyArr = "";
if (emptyArr.length === 0) {
   console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
   console.log("Object is empty");
}
