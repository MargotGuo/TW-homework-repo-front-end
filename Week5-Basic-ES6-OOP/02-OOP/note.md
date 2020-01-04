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
let baseSalary = 30000;
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
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWage: function() {                   // no parameters
        return this.baseSalary + (this.overtime * this.rate);
    }
}
employee.getWage();
```

> The best function are those with no parameters!
>
> -- uncle Bob

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

Think of a DVD player as an object. This DVD player has a complex logic board inside, and a few buttons on the outside. You simply play the button and you don't care what happens inside. All the **complexity is hidden**.

several benefits:

1. simpler interface
2. reduce the impact of changes

### Inheritance

Inheritance is a mechanism that allows you to eliminate redundant code.

Think of several HTML element, such as `textBox`, `Select`, `CheckBox`, they have some properties and methods in common, such as `hidden`, `innerHTML`, `click()`, `focus()`; We define them once using a general object.

### Polymorphism

Polymorphism means many forms. Polymorphism allows you to get rid of long `if` and `else`, or `switch` and `case` statement.

render all HTML element in procedure way:

```javascript
switch(...) {
	case "select": renderSelect();
	case "text": renderTextBox();
	case "checkbox": renderCheckBox();
	case ...
	case ...
	case ...
}
```

the `render` method might be differently depend on the object

render in OOP way:

```
element.render()
```

## Benefit of OOP

**Encapsulation: **

- we group related variables and functions together - Reduce complexity
- We reuse the object in different part of programs or different programs - increase reusability

**Abstraction:**

- We hide the details and the complexity, and show only the essentials - Reduce complexity & isolate impact of changes

**Inheritance:**

- We can eliminate redundant code

**Polymorphism:**

- Refactor ugly switch/case statements

## Object

### Factories and Constructors

**Factories**

```javascript
function createCircle(radius) {
	return {
		radius,
		draw: function() {
			console.log("draw");
		}
	};
}
const circle = createCircle(1);
circle.draw;
```

**constructor function**

```javascript
function Circle(radius) {
	this.radius = radius;
	this.draw = function() {
		console.log("draw");
	}
}
const another = new Circle(1)
```

the key word `new` will create an empty object `{}`, and it set `this` to point to the object

**class method**

```javascript
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  draw() {
    console.log("draw");
  }
}
const circle3 = new Circle(1);
circle3.draw();
```

### Private Properties

**bad practice**

```javascript
function Circle(radius) {
	this.radius = radius;
    
    this.defaultLocation = {x: 0, y: 0};
    
    this.computeOptimumLocation = function() {
        //...
    }
    
	this.draw = function() {
        this.computeOptimumLocation();
		console.log("draw");
	}
}
```

Note all the properties should be accessible for the client!!! (such as `defaultLocation`, and the method `computeOptimumLocation` should only be called inside the `draw` method)

**good practice**

display the essentials, i.e., the `radius` and the `draw` method

```javascript
function Circle(radius) {
	this.radius = radius;
    
    let defaultLocation = {x: 0, y: 0};
    
    let computeOptimumLocation = function(factor) {
        //...
    }
    
	this.draw = function() {
        computeOptimumLocation(factor);
		console.log("draw");
	}
}
```

### Getters/Setters

in the last example, `defaultLocation` is a private property, and we cannot access `defaultLocation` outside.

How we can read `defaultLocation`?

```javascript
function Circle(radius) {
	this.radius = radius;
    
    let defaultLocation = {x: 0, y: 0};
    
    let computeOptimumLocation = function(factor) {
        //...
    }
    
	this.draw = function() {
        computeOptimumLocation(factor);
		console.log("draw");
	}
    
    Object.defineProperty(this, "defaultLocation", {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y) {
                throw new Error("Invalid location");
            }
            defaultLocation = value;
        }
    });
}
const circle = new Circle(10);
circle.defaultLocation = {x: 1, y: 5};
circle.defaultLocation;
```

Reference: [OOP Intro](https://www.youtube.com/watch?v=PFmuCDHHpwk&t=250s)