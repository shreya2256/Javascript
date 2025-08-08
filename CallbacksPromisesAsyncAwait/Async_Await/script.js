//async function always returns a promise
// async function myFunc(){...}
// await pauses the execution of its surrounding async function until the promise is settled
//example
// async function hello(){
//     console.log("Hello");
// }
//output of above program in console looalike

// >hello() //write this in console it will return a promise
// script.js:6 Hello
// Promise {<fulfilled>: undefined}
// [[Prototype]]
// : 
// Promise
// [[PromiseState]]
// : 
// "fulfilled"
// [[PromiseResult]]
// : 
// undefined

//Note: await function can only be used inside an async function
//example
/* 
function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather data");
            resolve(200);
        },2000);
    })
}

async function getWeatherData(){
    await api(); //waits for the promise to resolve
    await api(); //waits for the promise to resolve
}
*/

/*
in console o/p lookalike:
getWeatherData
async ƒ getWeatherData(){
    await api(); //waits for the promise to resolve
}
>getWeatherData() //write this in console it will return a promise
Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
script.js:29 Weather data
getWeatherData()
Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: undefined
script.js:29 Weather data
*/ 

//example : async-await
/*
function getData(dataId){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        },2000);    
    });
}

//async-await
async function getAllData(){
    console.log("getting data1.............");
    await getData(1);
    console.log("getting data2.............");
    await getData(2);
    console.log("getting data3.............");
    await getData(3);
    console.log("getting data4.............");
    await getData(4);
    console.log("getting data5.............");
    await getData(5);
}
*/

//IIFE- Immediately Invoked Function Expression
//IIFE is a function that runs as soon as it is defined
//IIFE is a function that is called immediately as soon as it is defined
//IIFE - these are the functions, but it dont have any name,it write one time and whenever it write it will executes there, there is no need to execute these functions explicitely
//structure in diffrent ways as: 
/*
(function(){
    //code
})();//function IIFE

(() => {
    //code
}) (); //arrow function IIFE

(async () => {
    //code
})(); //async IIFE
*/

//example of IIFE
function getData(dataId){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        },2000);    
    });
}

(async function () {
    console.log("getting data1.............");
    await getData(1);
    console.log("getting data2.............");
    await getData(2);   
    console.log("getting data3.............");
    await getData(3);
}) (); //IIFE





