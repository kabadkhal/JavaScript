const acountId ="51515358";
let gmail = "abcd@gmail.com"
var count = "5465";
acountCity = "Jaipur";

count = "20";
// acountId = "265645852" we cannot able to apply such value to constant.
console.log(acountId);
/*
Avoid using var due to issue of 
block scope and function scope 
*/

console.table([acountId,gmail,count,acountCity])