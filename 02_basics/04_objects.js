// // const tinderUser = new Object ()
// const tinderUser = {}
// tinderUser.Id = "1234sd"
// tinderUser.name = "kafka"
// tinderUser.isLoggedIn = false 

// console.log(Object.keys(tinderUser))/////used for taking out key from database 
// console.log(Object.values(tinderUser)) ///used for taking out values
// console.log(Object.entries(tinderUser))////used for entries
// // console.log(tinderUser)
//  /////////Object Inside Object//////////
// //  const marvel_heros ={
// //     teamname:"Ironman",
// //     Ironman_Family :{
// //         gf_name: "natasha",

// //     } 
// // }
// // console.log(marvel_heros.Ironman_Family.gf_name)///// how to acces obejct using log .
// //////How to Merge object /////
// const obj1 = {1:"A", 2:"B"}
// const obj2 = {3:"C", 4:"D"}
// // const obj3 = Object.assign({},obj1,obj2)
// // // const obj3 = {obj1,obj2}/////same problem in array 
// // console.log(obj3) 
// /////SPREADING THE OBJECT////
// const obj3 ={...obj1, ...obj2}
// console.log(obj3)


// ////While Receivg data in array of object////
// const array = [
    
// ]

//Destructing the object 

const course = {
    coursename : "Jshindi",
    price : "999",
    courseInstructutor : "hitesh"

}

const {coursename} = course 

console.log(coursename)
/////JSON/////

{


}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign