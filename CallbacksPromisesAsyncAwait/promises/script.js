//Promises-> to overcome from Callback Hell problem
//Promise is for "eventual" completion of task.It is an object in js
//Promises are used to handle asynchronous operations in a synchronous way
//Promises are used to avoid callback hell problem  
//Syntax
//let promise = new Promise((resolve,reject)=>{......})
//resolve, reject = Function with 2 handlers
//by writing 'promise' on console we can get state of promise 
//promise having 3 states
//1)pending  2)fullfilled(resolved) 3)rejected
//Promise is used to handle asynchronous operation in a synchronous way
//1)suppose we dont get any msg about rejected or not then that condition is in 'pending' state
//2)if we get msg then that condition is in 'fulfilled' state
//3)if we get msg but that msg is not what we want then that condition is in rejected state
//example of promise=> pending state
// let promise = new Promise(()=>{
//     console.log("I am a promise");
// });
// //example of promise => resolve state
// let promise = new Promise((resolve, reject)=>{
//     console.log("I am a promise");
//     resolve("success");
// });
//example of promise => reject state
// let promise = new Promise((resolve, reject)=>{
//     console.log("I am a promise");
//     reject("some error");
// });
//Example - promise- to get data after 5s->resolved promise

// function getData(dataId,getNextData){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("sucess");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// };
//after above function -write this in console
//1) let promise = getData(123);
//2) promise
//if data appears after 5s
//then write to get final value
//3)promise

//Example - promise- to get data after 5s->rejected promise

// function getData(dataId,getNextData){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             reject("error");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// };
//after above function -write this in console
//1) let promise = getData(123);
//2) promise
//if data appears after 5s
//error shows

//so the conclusion is this way as::
//Prmises => A javascrpt Promise Object can be: 1)pending= the result is undefined 2)fulfilled=the result is a value(fullfilled) 3)rejected= the result is an error object



//Promises .then() & .catch()
//if promise get fullfilled then use //promise.then((res)=>{...})
//if promise get rejected then use //promise.catch((err)=>{...})
//example
/*
const getPromise =() => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        //resolve("sucess");
        reject("error");
    });
};

let promise = getPromise(); 
promise.then((res)=> {
    console.log("fulfilled promise", res);//if promise is rejected then this will not execute
});

promise.catch((err)=>{
    console.log("rejected promise", err);//here err is the error msg that we get from reject , here for example 'error' we passed to reject
})
*/


//Promise chain
//Promise chaining is a way to execute multiple asynchronous operations in sequence
//example 
/* 
function asyncFun1(){
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000);
    });
}

function asyncFun2(){
    return new Promise((resolve,reject)=>{
        setTimeout( ()=> {
            console.log("data2");
            resolve("success");
        },4000)
    })
}

console.log("fetching data1");
let p1 = asyncFun1();
p1.then((res) => {
    console.log(res);
});

console.log("fetching data2");
let p2 = asyncFun2();
p2.then((res) => {
    console.log(res);
})
*/


//explanation of above code
// here as "console.log("fetching data1");" this line is firstly printed as it is synchronous code
// then asyncFun1() is called which returns a promise p1 
// then "console.log("fetching data2");" is printed as it is synchronous code
// then asyncFun2() is called which returns a promise p2    
// then p1.then() is executed when asyncFun1() is resolved after 4s and "data1" is printed
// then p2.then() is executed when asyncFun2() is resolved after 4s,then "data2" is printed
//thus we get data1 and data2 together after 4s, becuase both asyncFun1() and asyncFun2() are executed in parallel due to promises
// and both promises are resolved after 4s, so we get "success" printed after "data1" and "data2" respectively
// this is how promises work in parallel and we can handle asynchronous operations in a synchronous way
// so the output will be:
// fetching data1   
// fetching data2
// data1
// success
// data2
// success

///
//exam



//example of promises chaining
/*
function asyncFun1(){
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000);
    });
}

function asyncFun2(){
    return new Promise((resolve,reject)=>{
        setTimeout( ()=> {
            console.log("data2");
            resolve("success");
        },4000)
    })
}

console.log("fetching data1");
asyncFun1().then((res)=>{
    console.log("fetching data2");
    asyncFun2().then((res)=>{})
})
*/

//output of above code will be
// fetching data1
// data1    
// fetching data2
// data2

//comaprison example of promise chaining with callback hell problem according to syntaxes
function getData(dataId){//getNextData is Callback function
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },2000);
    });
}
//callback hell example
/*
getData(1,()=>{
    console.log("getting data2.....");
    getData(2,()=>{
        console.log("getting data3.....");
        getData(3,()=>{
            console.log("getting data4.....");
            getData(4);
        });
    });
});
*/

//promise chaining with better and easiest syntax , so it can be write like this way as
console.log("getting data1....");
getData(1)
.then((res)=> {
    console.log("getting data2.....");
    return getData(2);
})
.then((res) => {
    console.log("getting data3.....");
    return getData(3);
})
.then((res)=>{
    console.log(res);
})






















