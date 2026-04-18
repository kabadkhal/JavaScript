//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

/*const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);*/

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

//const heros = ["shaktiman", "naagraj", "doga"];
/*let myObj = {
    name: "hitesh",
    age: 22,
}*/

/*const myFunction = function(){
    console.log("Hello world");
}*/

//console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



////-----------------------------------------------------------
// Stack Memory (primitive)   heap Memory(Non primitive object array function)
// Stack save copy of the input while 


let youfirstname = "kartik"
let yourSecondName = youfirstname;
yourSecondName = "karan";
console.log(yourSecondName)
console.log(youfirstname)

let user1 = {
    email:'kab@gmail.com',
    UPI: "23"
}

let user2 = user1
user2.email = "kaka@gmail.com"
console.log(user1)
console.log(user2)