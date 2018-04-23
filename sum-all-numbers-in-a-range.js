function sumAll(arr) {
  
  var maxNum = Math.max.apply(null, arr);
  var minNum = Math.min.apply(null, arr);
  
  var range = maxNum-minNum;
  var total = 0;
  
  for(var i = 1;i<range;i++){
    total = total + minNum + i;
    
  }
  total=total + maxNum + minNum;
  return total;
}

sumAll([1, 4]);
