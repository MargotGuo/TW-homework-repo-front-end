var score = 72;
var rate = rateScore(score);
console.log(rate);

function rateScore(score) {
  if (score<101 && score>=0) {
    if (score>=95) {
      return "卓越";
    } else if (score>=85) {
      return "优秀";
    } else if (score>=75) {
      return "一般";
    } else if (score>=60) {
      return "及格";
    }
    return "不及格";
  }
  return"请输入有效数字";
}