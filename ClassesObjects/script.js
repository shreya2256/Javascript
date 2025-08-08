//inheritance
//syntax:
// class Parent{
//     hello(){
//         console.log("hello");
//     }
// }
// class Child extends Parent{}   

// let obj = new Child();
//Example1
class Person{
    eat(){
        console.log("eating");
    }
    sleep(){
        console.log("sleeping");
    }
}

class Engineer extends Person{
    work(){
        console.log("working");
    }
}
let shreyaObj = new Engineer();