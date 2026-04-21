// how to check type 
// console.log(typeof score)
// console.log(typeof (score))

const score = undefined 
const valueInNumber = Number(score);
// console.log(valueInNumber);

// if score = "33aabc -> Nan Not an Number"
// if score = null -> 0
// if score =  -> 0
// if score = undefined -> NaN 

const isLoggedIn = "kartik"
const booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn);

// for isLoggedIn = null -> false
// for isLoggedIn = undefined -> false
// for isLoggedIn = kartik -> true

let someNumber = 33 
const someString = String(someNumber)
console.log(typeof someString);


