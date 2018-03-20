function chunkArrayInGroups(arr, size) {
  var chunky = [];
  for(var i = 0; i < arr.length/size; i++){
    chunky.push(arr.slice(i * size, (i + 1) * size));
  }
  return chunky;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
