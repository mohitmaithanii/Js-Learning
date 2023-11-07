const parent = document.querySelector(".parent");
console.log(parent);
console.log(parent.children);
console.log(parent.children[1].innerHTML); 

for (let i = 0; i < parent.children; i++) {
   console.log(parent.children[i].innerHTML);
}
// firstElementChild
 parent.children[1].style.color = "orange";
console.log(parent.firstElementChild);
// lastElementChild
console.log(parent.lastElementChild);

