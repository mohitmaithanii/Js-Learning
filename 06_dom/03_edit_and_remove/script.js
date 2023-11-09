// edit and remove DOM element =>

function addLanguage(langName) {
   const li = document.createElement("li");
   li.innerHTML = `${langName}`;
   document.querySelector(".language").appendChild(li);
}
addLanguage("typescript");

function addOptLang(langName) {
   const li = document.createElement("li");
   li.appendChild(document.createTextNode(langName));
   document.querySelector(".language").appendChild(li);
}
addOptLang("react");

// edit 1 =>
const secondLang = document.querySelector("li:nth-child(2)");
const newLi = document.createElement("li");
newLi.textContent = "python";
secondLang.replaceWith(newLi);

//edit 2 =>
const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = "<li>TypeScript</li>";

