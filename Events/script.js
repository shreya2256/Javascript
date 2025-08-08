//event handling in js
// let btn1 = document.querySelector("#btn1");

//event object
// btn1.onclick = (event) => {
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX,event.clientY);

// }
// btn1.onclick = () =>{
//     console.log("Brn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);//26
// }



// let div = document.querySelector("div");

// div.onmouseover =(event) =>{
//    console.log("Mouse is over the div");
//    console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX,event.clientY);
// }

// //event object
// btn1.onlick=(e) =>{
//     console.log(e);
// }

//event listener
//syntax
//node.addEventListener(event,callback)
//Example as:
// btn1.addEventListener("click", (event)=> {
//     console.log("button1 was clicked-handler1");
//     console.log(event);
//     console.log(event.type);
// })

let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click",() => {
    console.log("button1 was clicked -handler1");
});
btn1.addEventListener("click",() => {
    console.log("button1 was clicked -handler2");
});
btn1.addEventListener("click",() => {
    console.log("button1 was clicked -handler3");
});
btn1.addEventListener("click",() => {
    console.log("button1 was clicked -handler4");
});

//to remove handler
btn1.addEventListener("click",() => {
    console.log("button1 was clicked -handler1");
});
btn1.addEventListener("click",() => {
    console.log("button1 was clicked -handler2");
});
const handler3 = () =>{
    console.log("button1 was clicked -handler3");
};
btn1.addEventListener("click",() => {
    console.log("button1 was clicked -handler4");
});
//to remove handler : syntax
btn1.removeEventListener("click",handler3);
