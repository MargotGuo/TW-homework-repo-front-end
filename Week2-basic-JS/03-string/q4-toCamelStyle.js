function toCamelStyle(sentence) {
  var strArr = sentence.split('_');
  if (strArr[0] !== '') {
    var startIndex = 1;
    var beginner = '';
  }
  else {
    var startIndex = 2;
    var beginner = '_';
  }
  strArr = firstCap(startIndex, strArr);
  var newStr = beginner + strArr.join('');
  return newStr;
}

function firstCap(startIndex, strArr) {
  for (var index = startIndex, len = strArr.length; index < len; index++) {
    strArr[index] = strArr[index].replace(strArr[index][0], strArr[index][0].toUpperCase());
  }
  return strArr;
}

var name1 = toCamelStyle('abc_bcd');  // 输出 'abcBcd'
var name2 = toCamelStyle('a_3_c_d_ef');  // 输出 'a3CDEf'
var name3 = toCamelStyle('_a_b_c_d_ef');  // 输出 '_aBCDEf
var name4 = toCamelStyle('__a_b_c_d_ef');  // 输出 '__aBCDEf
console.log(name1);
console.log(name2);
console.log(name3);
console.log(name4);