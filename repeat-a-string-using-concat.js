function repeatStringNumTimes(str, num) {
  var solutionStr = "";
  while(num > 0) {
    solutionStr = solutionStr.concat(str);
    num --;
  }
  return solutionStr;
}

repeatStringNumTimes("abc", 3);
