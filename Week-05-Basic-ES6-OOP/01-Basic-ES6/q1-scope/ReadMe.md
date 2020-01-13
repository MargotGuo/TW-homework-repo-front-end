# 主观题

### 1. 请参考推荐资料的内容，理解为什么需要块级作用域？如果能有可能会出现哪些问题，请举例说明。

#### 为什么需要块级作用域？

解决JavaScript的变量提升特性导致的变量覆盖、变量污染等缺陷

#### 没有块级作用域可能出现的问题

ES5只有与全局作用域和函数作用域，如果没有块级作用域，会带来很多不合理的场景

**场景1：内层变量覆盖外层变量**

```javascript
var temp = new Date();

function f() {
  console.log(temp);
  if (false) {
    var temp = "hello world";
  }
}

f(); //undefined
```

- 在上述代码中，`if`代码块的外部使用外层的`tmp`变量，内部使用内层的`tmp`变量
- 但是，函数`f`执行后，输出结果为`undefined`
- 原因在于变量提升，导致内层的`tmp`变量覆盖了外层的`tmp`变量。

**场景2：用来计数的循环变量泄露为全局变量**

````javascript
var s = 'hello';

for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}

console.log(i); // 5
````

- 上面代码中，变量`i`只用来控制循环
- 但是循环结束后，它并没有消失，泄露成了全局变量