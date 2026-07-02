//A promise in javascript is an object that represents the eventual completion of an asynchronous operation and its resulting value
// function setTimeoutpromisified(ms){
//      return new Promise(resolve => setTimeout(resolve,ms));
// }
// function callback(){
//     console.log("3 seconds are passed");
// }
// setTimeoutpromisified(3000).then(callback);

// function wait3sec(resolve){
//     setTimeout(resolve,3000);
// }
// function main(){
//     console.log("hello there");
// }
// wait3sec(main);
 
// setTimeout(function(){
//     console.log("hi");
//       setTimeout(function(){
//         console.log("hello");

//         setTimeout(function(){
//             console.log("Hello there!");
//         },5000)
//       },3000)}
//  ,1000)
//promisified version
// function setTimeoutPromisified(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// setTimeoutPromisified(1000).then(function () {
//   console.log("hi");
//   setTimeoutPromisified(3000).then(function () {
//     console.log("hello");
//     setTimeoutPromisified(5000).then(function () {
//       console.log("hello there");
//     });
//   });
// });

 
 
 