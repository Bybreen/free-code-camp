function bouncer(arr) {
  arr = arr.filter(removeFalsy); 
  return arr;
}
function removeFalsy(arg){
  return (Boolean(arg) === true);
}
bouncer([7, "ate", "", false, 9]);
