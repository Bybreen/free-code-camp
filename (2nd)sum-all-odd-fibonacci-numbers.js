Array.paradigm.last = function(){
  return this[this.length-1];
};
Array.paradigm.secondToLast = function(){
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

//ERROR  Can't set property 'last' of undefined!
