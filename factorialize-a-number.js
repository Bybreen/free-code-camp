function factorialize(num) {
  var outcome = num;
  
  if (outcome === 0) {
    return 1;
  }
    else {
 
  for (var i=1; i<outcome; i++){
    num=num*i;  
  }
  }
    return num;
}

factorialize(5);
factorialize (10);
factorialize (20);
factorialize (0);
