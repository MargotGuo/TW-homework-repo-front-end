function add(x) {
  return function(y) {
    if (y) {
      return add(x+y);
    }
    return x;
  };
}

var a1 = add(1)(2)(3)();
var a2 = add(1)(2)(3)(4)(5)(6)();
console.log(a1);
console.log(a2);