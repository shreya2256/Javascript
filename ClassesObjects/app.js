//classes & objects
// const student = {
//     fullName : "Shreya Shinde",
//     marks : 94.4,
//     printMarks: function (){
//         console.log("marks = ",this.marks);
//     },
// };

// const employee = {
//     calcTax(){
//         console.log("tax rate is 10%");
//     },
//     // calctax2 : function () {
//     //     console.log("tax rate is 10%");
//     // }
// };

// const karanArjun = {
//     salary: 50000
// }
// //to set prototype-> to acess other objects properties
// karanArjun.__proto__ = employee;

//Classes in JS
class ToyotaCar{
    // constructor(){
    //     console.log("creating new object");
    // }
    constructor(brand){
        console.log("creating new object");
        this.brandName = brand;
    }
    start(){
        console.log("Toyota Car Started");
    }
    stop(){
        console.log("stop");
    }
    // setBrand(brand){
    //     this.brandName = brand;
    // }
}
// let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner");
// let lexus = new ToyotaCar();
// lexus.setBrand("lexus");

//constructor invoking
//let fortuner = new ToyotaCar();//constructor automatically invoked
let fortuner = new ToyotaCar("fortuner");//constructor automatically invoked
let lexus = new ToyotaCar();//constructor automatically invoked



















