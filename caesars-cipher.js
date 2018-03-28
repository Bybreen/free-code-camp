
function rot13(str) { // LBH QVQ VG!
  str = str.split("").map(cipher).join("");
  return str;
}
function cipher(letter){
  var whichSymbolRegex = /[^a-zA-Z]/g;
  if(whichSymbolRegex.test(letter)){
    return letter;
  }
  var codeAscii = letter.charCodeAt(0);
 if(codeAscii > 77) {
   codeAscii -= 13;
 } else {
   codeAscii += 13;
 }
  return String.fromCharCode(codeAscii);
}
// Change the inputs below to test
rot13("SERR PBQR PNZC");
