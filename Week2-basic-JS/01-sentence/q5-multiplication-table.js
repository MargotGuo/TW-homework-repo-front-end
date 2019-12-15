var table = multiplicationTable(9);
console.log(table);

function multiplicationTable(max) {
  var temp = '';
  for (var row = 1; row <= max; row++) {
    for (var column = 1; column <= row; column++) {
      temp += row + '*' + column + '=' + row * column + ' ';
    }
    temp += '\n';
  }
  return temp;
}