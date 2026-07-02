//require statement lets you import code/functions export from another file/module
const fs = require('fs');
//fs(file system) is a library
// const contents = fs.readFileSync('a.txt','utf-8');
// console.log(contents);
// const contents2= fs.readFileSync('b.txt','utf-8');
// console.log(contents2);
// functional arguments are passing a function as an argument to another function
//basically the code above is synchronous code because the execution of the code is done one by one and this is not a very optimised approach
function print(err,data){
    console.log(data);
}
const asynccontent1 = fs.readFile('a.txt','utf-8',print);
const asynccontent2 = fs.readFile('b.txt','utf-8',print);

console.log('Done!');
//The above code is an example of asynchronous code

