//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++ Memory ++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

// Call by value(Stack)

let myYoutubeName = "AmitGfx.com"
let anotherName = myYoutubeName
anotherName = "Anjan.com"
console.log(anotherName)
console.log(myYoutubeName)

// Call by reference(Heap)

let student1 = {
    name: "Amit",
    rollno: 12,
    class: "CSE-1"
}

let student2 = student1
student2.rollno = 13

console.log(student2)
console.log(student1)