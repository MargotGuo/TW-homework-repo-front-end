var table = multiplicationTable(9);
console.log(table);

function multiplicationTable(max) {
  var result = '';
  for (var row = 1; row <= max; row++) {
    for (var column = 1; column <= row; column++) {
      result += row + '*' + column + '=' + row * column + ' ';
    }
    result += '\n';
  }
  return result;
}