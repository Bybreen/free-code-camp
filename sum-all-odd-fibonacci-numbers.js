Array.paradigm.last = function(){
  // add custom array methods with new code
  // all arrays in this code will inherit these methods
  return this[this.length -1];
};
Array.paradigm.secondToLast = function(){
  return this[this.length -2];
};
function sumFibs(num) {
  var order = [1, 1];
  // start with 1, 1 because the fibonacci sequence starts with it
  while(order.secondToLast() + order.last() <= num){
    // if when you add these 2 numbers they are less than or equal to the number argument, we pass them. 
    order.push(order.secondToLast() + order.last());
    // add these 2 numbers together then push it at the end of the array.
    // keep going through this until the condition is false. That's why you use the while loop.
  }
  }
  return order.filter(function(num){
    return num % 2 !== 0;
}).reduce(function(a, b){
    return a + b;
    // after adding all of the numbers you filter out the odd numbers using the filter method. Then you reduce it by adding the filter values. In this case you're keeping the odd ones
  });
};
sumFibs(4);
// 5
