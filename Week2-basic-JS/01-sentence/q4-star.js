var outputStar = star(6);
console.log(outputStar);

function star(line) {
  var temp = '';
  for (var row = 1; row <= line; row++) {
    for (var column = row; column <= line; column++) {
      temp += '* ';
    }
    temp += '\n';
  }
  return temp;
}