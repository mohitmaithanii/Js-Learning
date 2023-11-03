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

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
   console.log(programming[key]);
}
