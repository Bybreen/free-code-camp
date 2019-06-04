// Create a function that looks through an array (first argument) and returns the first element in the array 
// that passes a truth test (second argument). If no element passes the test, return undefined.

function findElement(arr, func) {
var num = arr.filter(func);
if(num.length>1) {

return mum[0];
}
return undefined;
}

findElement([1,2,3,4] function(num){return num % 2 === 0});
