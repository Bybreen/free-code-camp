function translatePigLatin(str) {
  var ofLetters = str.split("");
   // break original string into an array of characters
  var vowelRegex = /[aeiou]/;
  // regex for strings that contain array of aeiou
  if(vowelRegex.test(ofLetters[0])){
    // test the first character of the array
    return ofLetters.join("") + "way";
    // upon matching adds way to the end of the string
  }
  while (true) {
    // for cases not matching vowels
    if(!vowelRegex.test(ofLetters[0])) {
      // if regex doesn't contain a vowel char
      ofLetters.push(ofLetters.splice(0, 1));
      // push it to the end and splice the first letter
    }
    else{
      // breaks upon finding a vowel
      break;
    }
  }
  str = ofLetters.join("") + "ay";
  // adds ay to the end and adds string back together
  return str;
}
translatePigLatin("consonant");
