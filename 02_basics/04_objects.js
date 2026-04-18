// const tinderUser = new Object ()
const tinderUser = {}
tinderUser.Id = "1234sd"
tinderUser.name = "kafka"
tinderUser.isLoggedIn = false 


// console.log(tinderUser)
 /////////Object Inside Object//////////
//  const marvel_heros ={
//     teamname:"Ironman",
//     Ironman_Family :{
//         gf_name: "natasha",

//     } 
// }
// console.log(marvel_heros.Ironman_Family.gf_name)///// how to acces obejct using log .
//////How to Merge object /////
const obj1 = {1:"A", 2:"B"}
const obj2 = {3:"C", 4:"D"}
const obj3 = Object.assign({},obj1,obj2)
// const obj3 = {obj1,obj2}/////same problem in array 
console.log(obj3) 


 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign