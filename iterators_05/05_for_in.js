// for in =>

const myObject = {
   js: "Javascript",
   cpp: "C++",
   rb: "ruby",
   swift: "swift by apple",
};

for (const key in myObject) {
   console.log(`${key} shortcut if for ${myObject[key]}`);
}
