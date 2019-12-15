var outputStar = star(6);
console.log(outputStar);

function star(maxLine) {
  var result = '';
  for (var row = 1; row <= maxLine; row++) {
    for (var column = row; column <= maxLine; column++) {
      result += '* ';
    }
    result += '\n';
  }
  return result;
}