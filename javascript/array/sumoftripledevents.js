// let arr=[1,2,3,4,5,6,7,8,9,10];

// let filtarr=arr.filter(function(num){
//     return num%2===0;
// });
// console.log(filtarr);
// let mappedarr=filtarr.map(function(num){
//     return num*3;
// });
// console.log(mappedarr);
// let reducedsum=mappedarr.reduce(function(accumulator,currentvalue){
//     return accumulator+currentvalue;
// },0);
// console.log(reducedsum);    

//shorter method
function sumOfTripledEvens(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}
console.log(sumOfTripledEvens([1, 2, 3, 4, 5, 6])); 