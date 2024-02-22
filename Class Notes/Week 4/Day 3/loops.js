
// // ///////////////////////////////for Loop///////////////////////////////////////////////
// // // For loop structure
// // for(initialization, condition, increment/decrement){
// //     // code goes here
// //   }


// for(let i=0; i<=5; i++ ){
//     //task code
// }

// for(let i=5; i>=0; i-- ){
//     console.log(i)
// }

// // 0*0=0
// // 1*1=1
// // 2*2=4
// // 3*3=9
// // 4*4=16
// // 5*5=25

// /////////////////////////////////////////while loop///////////////////////////////////////
// // while(condition){
// //     //task code 
// // }
// // let i=0;

// // while(i<=5){
// //     console.log(i)
// //     i++
// // }




// //////////////////////////////////////// do while loop////////////////////////////////////

// // let i=8;
// // // do{
// // //     //task code 
// // // } while(condition)
// // do{
// //     console.log(i)
// //     i++
// // } while(i<=5)

// // ///////////////////////////// for of loop//////////////////////////////////////////////
// // for (const element of arr) {
// //     // code goes here
// //   }

// const listofNumbers=[1,2,3,4,5,6,7]
// for(const numberinTheList of listofNumbers){
//     console.log(numberinTheList)
// }

// const country=["US","Thiland","Canada"]
// for(const names of country){
//     console.log(names)
// }

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]
// // ///////////////////////////////////////////break/////////////////////////////////////
// //Break is used to interrupt a loop.




// /////////////////////////////////////// continue///////////////////////////////////////
// //We use the keyword continue to skip a certain iterations.








// //..........................................To do .......................................
// // Use for loop to iterate from 0 to 100 and print only even numbers
// // let i=0
// // for(let i=0; i<100; i+=2){
// //     console.log('count',i)
// // }

// // Use for loop to iterate from 0 to 100 and print only odd numbers
// // let i = 0
// // while (i <= 100){
// //     console.log('count', i)
// //     i+=2
// // }

// //Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// // for (let i = 0; i <= 10; i++) {
// //     console.log(i)
// // }



// ///////////////////////////////////////////Challenge///////////////////////////////////////
// let countries=["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// //Using the above countries array, create an array for countries length'.
// //Expected outcome is [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]



// // let count = 0; 
// // while (count < 3) { 
// //   console.log("Hello"); 
// //  count++; 
// // }

// for (let i = 0; i < 5; i++) { 
//     if (i === 2) { 
//     continue; 
//    } 
//     console.log(i); 
//   }

  let x = 5; 
do { 
  console.log("Hello"); 
 x--; 
} while (!x > 0);