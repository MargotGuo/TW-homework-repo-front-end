# What is Object-oriented Programming?

 A programming **paradigm** centered around object rather than **functions**.

## Languages who support OOP

* c#
* Java
* Ruby
* Python
* JavaScript

## 4 core concept of OOP

### Encapsulation

**procedural programming**

so much inter-dependency between functions

eg. 1 (highly de-coupled !!)

```javascript
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}
```

**object-oriented programming**

eg. 0

```javascript
let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function() {                   // no parameters
        return this.baseSalary + (this.overtime * this.rate);
    }
}
employee.getWage();
```

> The best function are those with no parameters!

eg.1

```
car --> object

make, model, color --> property

start(), stop(), move() --> method
```

eg. 2

```
local Storage --> object

length --> property

set Item(), remove Item() --> method
```

**Encapsulation**

group related variables and functions that operate on them into objects

### Abstraction

### Inheritance

### Polymorphism

