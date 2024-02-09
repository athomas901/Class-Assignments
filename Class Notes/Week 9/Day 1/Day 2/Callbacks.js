// //A callback is a function which can be passed as a parameter to other function.  See the
// //example 
// //a callback function, the name of the function could be any name
// const callback = (n) => {
//     return n * 2
// }

// //function that takes other function as a callback
// function cube(callback, n) {
// //     return callbaqck(n) * n
// // }
// // console.log(cube(callback, 3))

// ///Practice 02/08 declare a function set an interval of time
// //Set Interval
// function sayHello() {
//     console.log("Hello")
// }
// setInterval(sayHello, 1000)

//set timeout example
// function myName(){
//     console.log("Angela")
// }
// setTimeout(myName, 2000)

//example for each
// let fruits = ["apple", "orange", "banana", "coconut"];

// fruits.forEach(display);

// function upperCase(element, index, array){
//     array[index] = element.toUpperCase();
// }



// function display(element) {
//     console.log(element);
// }

//Example
const names = ["angela", "shelby", "edwinsr", "edwinjr", "jordan", "mocha"]     //declaring an array
names.forEach((element) => console.log(element.toUpperCase()))     //each name is an element...pass each name into for each and it loops into the index of the array