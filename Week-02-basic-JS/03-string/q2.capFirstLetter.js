var sentence = 'good afternoon, mr mike.';
var newSentence = capFirstLetter(sentence);
console.log(newSentence);

function capFirstLetter(sentence) {
  var newArr = sentence.split(' ');
  for (var index = 0, len = newArr.length; index < len; index++) {
    newArr[index] = newArr[index].replace(newArr[index][0], newArr[index][0].toUpperCase());
  }
  var result = newArr.join(' ');
  return result;
}