function sumPrimes(num) {
  var array = [];
  // create an array to reduce later and store prime numbers
  
  for (var i=2; i<=num; i++){
    // first loop to check if the number is prime
    for (var j=2; j<=i; j++){
      //check imputted number by all numbers leading up to it
      if(i===j){
        // if they are equal it's a prime number
        array.push(i);
      }
      if(i%j===0){
        // if true break the loop, and isn't prime
        break;
      }
    }
  }
  return array.reduce(function(x, y){return x+y;});
  // reduce the array by adding all of its imputs
}
sumPrimes(10);
// 1,2,3,4,5,6,7,8,9,10
// prime numbers are 2, 3, 5, 7
