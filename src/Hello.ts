console.log("welcome to typescript");

var a:number= 10;
let b:number =100;
const c={"test":100,
    "test1":100,
    "test2":100,
    "test3":100
};
var a= 100;
b =500;
c.test =400;

let arr:number[] =[1,9,4];
arr.push(5);
arr[0] =5;
console.log(arr);

arr.forEach((value)=>{
    console.log(value);
})

console.log(arr.reverse());
let ar = ["abs","jsdhk","sffdsdf","sd"]
console.log(ar.sort((a,b)=>a.length-b.length));

let ourTuple: [number, boolean, string] = [5, false, 'Coding God was here'];
console.log(ourTuple[0]);
ourTuple.push(true);
console.log(ourTuple);
let m:Map<string,string> = new Map<string,string>();
m.set("hanuma","abcd");


//Create array of values and reverse using for loop
// create map of value and sort by key
//a =" welcome to a playwright session";
//i want words to be printed based on the length
//a.split() --array
//a.sort.compartor  using length



// arrays
// tuples
// list
// map





// var:
//  varibale can be redeclared and re assigned on both global scope and block scope

// let:
//     varibale declared with let is blocked scope.
//     Not alloed redeclare the values
//     allowed to reinitilise the let values

// const:
//     const varibales can't be changed after initilisation
//     cann't be declared
//     can't allowed to initilise the values
//     can be allowed changing the values in the object scope

