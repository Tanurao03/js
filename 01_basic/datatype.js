"use strict"; // treat all JS code aas newer version

// alert(3 + 3); // we are using nodejs not browser

console.log(3+3);

let name = "tanu";
let age = 18;
let isloggedin = false

// number => 2 to power 53
// bigint
// string => "
// boolen => true or false
//null => standalone value
//undefined => not assigned value
// symbol => unique


//object


console.log(typeof age);
console.log(typeof name);
console.log(typeof null);
console.log(typeof undefined);

const id = Symbol('123');   // unique
const id2 = Symbol('123');

console.log(id == id2);
//JavaScript is dynamically typed:

//primitive

// 7 types : strung, no. n Boolean, null, undefined, symbol, BigInt

//

// Reference 

// array, objects, functions, 

const tvd_chr = ["Stefan", "Damon", "Elena"];
let my_obj = {
    name: "Tanu",
    age: 20,
}

const myFunction = function(){
    console.log("Hello guyssss");
}

//(function) object

console.log(typeof tvd_chr);

//object

//stack(primitive), Heap(non-primitive)->reference 