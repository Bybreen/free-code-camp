function titleCase(str) {
  var outcome = [];
  str = str.toLowerCase().split(" ");
  outcome = str.map(capitalize).join(" ");
  return outcome;
}

function capitalize(x) {
 var originalLetter = x.charAt(0);
  var capitalLetter = originalLetter.toUpperCase();
  x = x.replace(originalLetter, capitalLetter);
  return x;
}
titleCase("I'm a little tea pot");
