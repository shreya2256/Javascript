//functions & Methods

// syntax 
// function definition
// function functionName(){
//     //do some work
// }

// function functionName(param1, param2){
//     //do some work
// }
// function call
// functionName();
//example
// function myFunction(){
//     console.log("Hello, World!");
//     console.log("we are learning js");
// }
// myFunction();
// myFunction();
// Parameter passing
// function myFunction(msg,){//parameter
//     //parameter -> input
//     console.log(msg);
// }
// myFunction("Hello, World!");//argument
// addition of 2 numbers

// function sum(num1,num2){
//     console.log("Addition is ", num1+num2);
// }
// sum(5,4);
//sum function
// function sum(x,y){
//     return x+y;
// }
// function mul(x,y){
//     return x*y;
// }

//Arrow Functions
// const functionName = () => {
//     //do some work
// }
// const sum = (a,b) => {
//     console.log("a+b = ",a+b)
// }
// sum(5,4);

// let arrowMul = (a,b) => {
//     return a*b;
// }
//forEach loop in an array => method
// arr.forEach(callBackFunction)=>callBack is a function passed as an argument to another function
// syntax
// arr.forEach((val) =>{
//     console.log(val);
// })
//example
// let arr = [1,2,3,4,5];

// arr.forEach((val)=>{
//     console.log(val);
// })

// let arr = ["pune","delhi","mumbai"];

// arr.forEach((val,idx, arr) =>{
//     console.log(val.toUpperCase(),idx,arr);
// })
//map in array
//arr.map(callbackfunc(value,index,array))
// syntax:
// let newArr = arr.map((val)=>{
//     return val*2;
// })

// let nums = [67,52,39];

// let newArr = nums.map((val)=>{
//     return val;
// });
// console.log(newArr);

//arr.filter((val)=>{})
//example
// let arr = [1,2,3,4,5,6,7];

// let evenArr = arr.filter((val)=>{
//     return val % 2 === 0;
// });
// console.log(evenArr);
//arr.reduce((prev,curr)=>{});
//example
let arr = [5,6,2,1,101,3];

const output= arr.reduce((prev,curr)=>{
    return prev > curr ? prev : curr;
});
console.log(output);






