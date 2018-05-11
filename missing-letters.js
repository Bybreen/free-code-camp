function fearNotLetter(str) {
  var alphabet="abcdefghijklmnopqurstuvwyz";
  // create a string that stores the alphabet
    alphabet=alphabet.split("");
  // split alphabet into letter character array
  str=str.split("");
  // split input string into a character letter array
for(var i=0;i<str.length;i++){
  
  if(str[0]!='a'){
    return undefined;
    // if the first letter is not an 'a' return undefined
  }
    if(str[i]!=alphabet[i]){
      return alphabet[i];
      // if letters don't match for an alphabet and string,
      //return current alphabet letter
    }
  }
  
  return str;
}

fearNotLetter("abce");
