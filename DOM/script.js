//console.log("hello");
/*
in console type'window'=> we can get all properties and methods list
*/
// window.console.log("hello2");
// window.alert("hello")

//dom = document object model
// in window->document , in document we can get acess to all html code written and all their detailsalso specified

// 1) window.document
// 2) console.dir(window.document)
//console.dir to print document and its properties & methods
// 3)console.log(document.body);
// 4) console.dir(document.head);
//console.dir(document.body.childNodes[3]);
//document.body.childNodes[3].innerText ="abcd";=>error

// DOM manipulation
// selecting with id
// document.getElementById("id");
// selecting with class
// document.getElementsByClassName("class");
// selecting with tag
// document.getElementsByTagName("tag");
// let heading = document.getElementById("heading");//h1
// console.dir(heading);
// let headings = document.getElementsByClassName("heading-class");
// console.dir(headings);
// console.log(headings);
// let  parahs = document.getElementsByTagName("p");
// console.dir(parahs);
//Query Selector
//document.querySelector("myId/myClass/tag") =>returns first element
//document.querySelectorAll("myId/myClass/tag") =>returns a NodeList
// let elements = document.querySelector("p");
// console.dir(elements);

// let firstEl = document.querySelector("p");//1st ele
// console.log(firstEl);

// let allEl = document.querySelectorAll("p")//all ele
// console.log(allEl);

//Attributes
// getAttribute(attr)//to get attribute value
// setAttribute(attr,value)//to set attribute value

// style=>
// node.style

// let div = document.querySelector("div");
// console.log(div); 

// let id = div.getAttribute("id");
// console.log(id);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));

// let div = document.querySelector("div");
// div.style.backgroundColor = "green";
// //div.style.visibility ="hidden";
// div.style.fontSize ="26px";
// div.innerText ="Hello";

// //insert Elements
// node.append(el)
// node.prepend(el)
// node.before(el);
// node.after(el);

// //delete element
// node.remove(el);

let newBtn = document.createElement("button");
newBtn.innerText = "Click me";
console.log(newBtn);

//to add button in div ,firstly acess the div

let div = document.querySelector("div");
div.append(newBtn);
div.prepend(newBtn);
div.before(newBtn);
div.after(newBtn);

let para = document.querySelector("p");
para.remove();



























