// async await >> promise chains >> callback hell

//synchronous programme - in which order we are writinhg code , in only that way one by one syncronously code runs
//example
// console.log("one");
// console.log("two");
// console.log("three");

//setTimeout function
//setTimeout(function, milliseconds)
//example
// function hello(){
//     console.log("hello");
// }
// setTimeout(hello, 3000); //after 3 seconds it will print hello //3s = 3000 ms
//in arrow function format
// setTimeout(()=>{
//     console.log("hello");
// }, 4000);//timeout
//example
// console.log("one");
// console.log("two");
// setTimeout(()=>{
//     console.log("hello");
// },4000);
// console.log("three");
// console.log("four");

//Callbacks
//def: A function that is passed as an argument to another function and is executed after the completion of that function.
//example
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b, sumCallback){
    sumCallback(a,b);
}
calculator(5,10,sum);//5+10 = 15 , here sum is a callback function passed as an argument to calculator function
//another way to write above code
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b, sumCallback){
    sumCallback(a,b);   
}
calculator(5,10,(a,b)=>{
    console.log(a+b);
}); //5+10 = 15 , here sum is a callback function passed as an argument to calculator function in arrow function format


//Callback Hell  problem->how it comes?
//def: Nested callbacks(callbacks under callbacks) stacked over one another forming a pyramid structure(pyramid of Doom)
//example-> suppose we want to print data one after another in timestamp of 2s, such that first print after 2s then second after 2s then 3rd print and so on
function getData(dataId, getNextData){//getNextData is Callback function
    //2s time
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();//call getNextData function
        }
    },2000);
}
//callback hell -> to solve this we have Promises
//here the problem is that we have to write getData function again and again for each dataId
//getData function is called 4 times with different dataId
//at this point we have to wait for 2s to get data1, then again 2s to get data2, then again 2s to get data3 and so on
//so we have to wait for 8s to get all data
//thus all the time we have to pass the dataId as in arrow function format
//and we have to pass getNextData function as a callback function to get the next data
//thus it is a callback hell problem
//and due to this problem code becomes difficult to read and maintain
//example of callback hell
//thus we have to write getData function 4 times with different dataId
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