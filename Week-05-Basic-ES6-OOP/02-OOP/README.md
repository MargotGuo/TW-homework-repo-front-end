# OO step by step with ES6
适用对象：
1. 没有js面向对象经验的人快速验证自己是否已经具备了用js进行基本的面向对象编程的能力
2. 没有面向对象经验的人通过完成测试来验证自己已经具备了用js进行基本的面向对象编程的能力。

## 需求
根据spec/practice_*/README.md中的需求编写代码，使得测试代码可以运行通过。

## 挑战
* 理解构造器
* 理解封装
* 理解继承
* 理解多态

## 要求
* 根据spec/paractice_*/的README.md完成对应的src/practice_*/的代码。要求测试通过，并符合题目要求。
* 能够理解代码的执行过程中都发生了什么，如果不能够理解，使用调试器进行单步调试来辅助理解。

## 交付物
不修改测试代码，只修改实现代码，使得测试全部通过。

## 环境
* Lodash 3.9.3
* Mocha 4.0.1
* Sinon 4.0.1

## 开始
在命令行中使用以下命令在用户本地任意目录下clone此题目库
```
git clone repo_of_this_template
```

初次下载完需要安装依赖：
```
npm install
```
运行测试：
```
npm test
```
运行特定测试：
```
node_modules/mocha/bin/mocha spec/practice_1/*.js --require babel/register
```

## 学习资源
1. [Introduction to Object Oriented JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
1. [Javascript 面向对象编程（一）：封装](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_encapsulation.html)
1. [Javascript面向对象编程（二）：构造函数的继承](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html)
