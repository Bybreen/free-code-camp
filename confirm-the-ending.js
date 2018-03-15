function confirmEnding(str, target) {
  var rightPosition = str.length - target.length;
  if (str.substr(rightPosition) === target) {
      return true;
} 
  else {
  
  return false;
      }
}
confirmEnding("Bastian", "n");
