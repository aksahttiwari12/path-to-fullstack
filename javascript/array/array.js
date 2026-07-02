//An Array is an ordered collection of items (strings, numbers, or other things)
/*An array is a special kind of object. The square brackets used to access a property arr[0] actually come from the object syntax. 
That’s essentially the same as obj[key], where arr is the object, while numbers are used as keys.*/
let fruits=["Apple", "Banana", "Cherry"];

//Accessing items in an array
console.log(fruits[0]); //Output: Apple

//Adding an item to the end of an array
fruits.push("Date");
console.log(fruits); 

//Removing the last item from an array
fruits.pop();
console.log(fruits); 

console.log(fruits.at(-1));


console.log(fruits.shift());
//shift extracts the first item from an array
console.log(fruits.unshift("Mango"));
//unshift adds the element to the starting of an array
console.log(fruits);

//Finding the index of an item in an array
console.log(fruits.indexOf("Banana"));

//Checking if an item exists in an array
console.log(fruits.includes("Cherry"));
//push/pop are faster than shift/unshift because they do not require re-indexing of the entire array.
//for.of loop is used to iterate over the elements of an array
for(let fruit of fruits){
    console.log(fruit);
}
//length is actually not the count of values in the array, but the greatest numeric index plus one.
//Another interesting thing about the length property is that it’s writable.
//Another interesting thing about the length property is that it’s writable.
let arr=[1,2,3,4,5,6];
console.log(arr);
arr.length=3;
console.log(arr);
arr.length=5;
console.log(arr);
arr.splice(1,1);
console.log(arr);

let arr2=[10,20,30,40,50];
arr2.splice(0,3,"lets","dance");
console.log(arr2);
//splice method can also insert element for that we need to set the delete count to 0
let arr3=[100,200,300,400,500];
arr3.splice(2,0,"hello","world");
console.log(arr3);
//map methdod creates a new array populated with the results of calling a provided function on every element in the calling array.
function addOne(num){
      return num+1;
}
let arr=[1,2,3,4,5];
let mappedarr=arr.map(addOne);
console.log(mappedarr);
console.log(arr);
//it does not change the original array

//filter method creates a new array with all elements that pass the test implemented by the provided function.
//reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
