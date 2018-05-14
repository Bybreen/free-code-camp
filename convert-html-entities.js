function convertHTML(str) {
  // split string into a character array
  var characters=str.split("");
  // iterate through character array
  for(var i=0; i<characters.length; i++){
    // check current value of character
    switch(characters[i]){
        // if case is met replace with html entities
      case '&':
        characters[i]='&amp;';
        break;
      case '<':
        characters[i]='&lt;';
        break;
      case '>':
        characters[i]='&gt;';
        break;
      case '"':
        characters[i]='&quot;';
        break;
        case"'":
        characters[i]='&apos;';
        break;
    }
  }
  // join character array back into string
  str=characters.join("");
  // &colon;&rpar;
  return str;
}

convertHTML("Dolce & Gabbana");
