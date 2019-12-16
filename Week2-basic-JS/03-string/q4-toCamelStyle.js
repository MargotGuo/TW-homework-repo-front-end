function toCamelStyle(sentence) {
  var underlineLength = split(sentence);
  var str1 = sentence.substr(0, underlineLength);
  var str2 = sentence.substr(underlineLength);

  var str3 = toCaption(str2);
  var result = str1.concat(str3);
  return result;
}

function split(sentence) {
  var underlineLength = 0;
  for (var index = 0, len = sentence.length; index < len; index++) {
    if (sentence[index] !== '_') {
      break;
    }
    underlineLength++;
  }
  return underlineLength;
}

function toCaption(inputStr) {
  var outputStr = inputStr.charAt(0);
  for (var index = 1, len = inputStr.length; index < len; index++) {
    if (inputStr.charAt(index) === '_') {
      continue;
    } else if (inputStr.charAt(index - 1) === '_') {
      outputStr += inputStr.charAt(index).toUpperCase()
    } else {
      outputStr += inputStr.charAt(index);
    }
  }
  return outputStr;
}

var name1 = toCamelStyle('abc_bcd');  // 输出 'abcBcd'
var name2 = toCamelStyle('a_3_c_d_ef');  // 输出 'a3CDEf'
var name3 = toCamelStyle('_a_b_c_d_ef');  // 输出 '_aBCDEf
var name4 = toCamelStyle('__a_b_c_d_ef');  // 输出 '__aBCDEf
var name5 = toCamelStyle('__a_b___c_d_ef');  // 输出 '__aBCDEf
console.log(name1);
console.log(name2);
console.log(name3);
console.log(name4);
console.log(name5);