Array.prototype.last = function(){
  return this[this.length-1];
};
Array.prototype.secondToLast = function(){
  return this[this.length-2];
};
function sumFibs(num) {
  var order = [1, 1];
  while (order.secondToLast() + order.last() <= num) {
    order.push(order.secondToLast() + order.last());
  }

  return order.filter(function(num){
    return num % 2 !== 0;
}).reduce(function(a, b){
    return a + b;
  });
}
sumFibs(4);

// store into an array. And create your own array method. Objects are key value pairs. Could use dot or bracket notation. It's a new property that all arrays can inherit.
