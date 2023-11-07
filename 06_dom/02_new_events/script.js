const parent = document.querySelector(".parent");
console.log(parent);
// <div class="parent">…</div>

console.log(parent.children);
// HTMLCollection(6) [div.day, div.day, div.day, div.day, div.day, div.day]

console.log(parent.children[1].innerHTML);
// Tuesday

for (let i = 0; i < parent.children; i++) {
   console.log(parent.children[i].innerHTML);
}

// firstElementChild
parent.children[1].style.color = "orange";
console.log(parent.firstElementChild);
// <div class="day">Monday</div>

// lastElementChild
console.log(parent.lastElementChild);
//<div class="day">Saturday</div>

const dayOne = document.querySelector(".day");
console.log(dayOne);
// <div class="day">Monday</div>

console.log(dayOne.parentElement);
// <div class="parent">…</div>

console.log(dayOne.nextElementSibling);
// <div class="day" style="color: orange;">Tuesday</div>

console.log("NODES: ", parent.childNodes);
// NODES:  NodeList(13) [text, div.day, text, div.day, text, div.day, text, div.day, text, div.day, text, div.day, text]