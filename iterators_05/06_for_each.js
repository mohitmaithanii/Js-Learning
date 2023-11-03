// for each => A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

const coding = ["js", "rb", "py", "java", "cpp"];

coding.forEach(function (value) {
   console.log(value);
});

coding.forEach((value) => {
   console.log(value);
});

function printMe(item) {
   console.log(item);
}
coding.forEach(printMe);

coding.forEach((item, index, arr) => {
   console.log(item, index, arr);
});

const myCoding = [
   {
      languageName: "javascript",
      languageFileName: "js",
   },
   {
      languageName: "java",
      languageFileName: "java",
   },
   {
      languageName: "python",
      languageFileName: "py",
   },
];
myCoding.forEach((item) => {
   console.log(item.languageName);
});

