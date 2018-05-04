function pairElement(str) {
  str = str.toUpperCase();
  // change string to upper case for simple checking
  str = str.split("");
  // breaks string up into a character array
  var mainArray = [];
  // empty array to be added to
    for(var i=0;i<str.length;i++){
      // loop to iterate through the character array
      if(str[i]=="G"){
        // checks current character and if equal
        mainArray.push(["G","C"]);
        // it adds to the main array the corresponding dna pair
      } 
      else if(str[i]=="C"){
        mainArray.push(["C","G"]);
        // ditto
      }
      else if(str[i]=="A"){
        mainArray.push(["A","T"]);
        // ditto
      }
      else if(str[i]=="T"){
        mainArray.push(["T","A"]);
        // ditto
      }
    }
    
str=mainArray;
  return str;
 
}

pairElement("T");
