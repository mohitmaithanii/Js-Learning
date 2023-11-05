// getElementById => Returns a reference to the first object with the specified value of the ID attribute.

document.getElementById("title");
/* <h1 id="title" class="heading">
            DOM learning on Youtube
        </h1> 
*/

document.getElementById("title").id;
// 'title'

document.getElementById("title").class;
// 'undefined'

document.getElementById("title").className;
// 'heading'

// getAttribute => Returns element's first attribute whose qualified name is qualifiedName, and null if there is no such attribute otherwise.

document.getElementById("title").getAttribute("id");
// 'title'

document.getElementById("title").getAttribute("class");
// 'heading'

// setAttribute => Sets the value of element's first attribute whose qualified name is qualifiedName to value.

document.getElementById("title").setAttribute("class", "test heading");
// class="test heading"

const title = document.getElementById("title");

// styling =>
title.style.backgroundColor = "green";
title.style.padding = "15px";
title.style.borderRadius = "15px";

title.innerText;
// 'DOM learning on Youtube'

title.textContent;
// 'DOM learning on Youtube test text'

title.innerHTML;
/* DOM learning on Youtube <span style="display:none;">test text</span> */

// querySelector => Returns the first element that is a descendant of node that matches selectors.

document.querySelector("h1");
/* <h1 id="title" class="heading">
            DOM learning on Youtube <span style="display:none;">test text</span>
        </h1> 
*/

document.querySelector("h2");
// <h2>Lorem ipsum dolor sit amet.</h2>

document.querySelector("#title");
/* <h1 id="title" class="heading">
            DOM learning on Youtube <span style="display:none;">test text</span>
        </h1> 
*/

document.querySelector(".heading");
/* <h1 id="title" class="heading">
            DOM learning on Youtube <span style="display:none;">test text</span>
        </h1> 
*/

document.querySelector('input[type="password"]');
// input

const myUl = document.querySelector("ul");
const changeColor = myUl.querySelector("li");

/* changeColor.style.backgroundColor = "orange";
changeColor.style.padding = "10px";
changeColor.style.borderRadius = "10px"; */

// querySelectorAll =>
document.querySelectorAll("li");
/* NodeList(3) [li, li, li] */

const tempList = document.querySelectorAll("li");

/* tempList[1].style.backgroundColor = "purple";
tempList[1].style.padding = "10px";
tempList[1].style.borderRadius = "10px";

tempList.forEach(function(l) {
    l.style.backgroundColor = "yellow"
}) */

// getElementsByClassName =>
const tempClass = document.getElementsByClassName("list-item");
const myConvertedArray = Array.from(tempClass);

myConvertedArray.forEach(function (li) {
   li.style.color = "orange";
});
