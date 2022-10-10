`Reference:` [TutorialRepublic](https://www.tutorialrepublic.com/javascript-tutorial/javascript-es6-features.php), [Wikipedia](https://en.wikipedia.org/wiki/Ecma_International), 

# ES6 Features

ES6 stands for ECMAScript 6.

ECMAScript 2015 (or ES6) is the sixth and major edition of the ECMAScript language specification standard. It defines the standard for the JavaScript implementation.

ECMAScript is a JavaScript standard intended to ensure the interoperability of web pages across different browsers. It is standardized by Ecma International in the document [ECMA-262](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/).

## What is ECMA?

`Ecma International` is a nonprofit standards organization for information and communication systems. It acquired its current name in 1994, when the `European Computer Manufacturers Association` (ECMA) changed its name to reflect the organization's global reach and activities.

Ecma aims to develop standards and technical reports to facilitate and standardize the use of information communication technology and consumer electronics; encourage the correct use of standards by influencing the environment in which they are applied; and publish these standards and reports in electronic and printed form

# ES6 Feature

## 1. The let Keyword
ES6 introduces the new let keyword for declaring variables. Prior to ES6, the only way to declare a variable in JavaScript was the var keyword. Let's see what's the difference between them is.

There are two critical differences between the var and let. Variables declared with the var keyword are function-scoped and hoisted at the top within its scope, whereas variables declared with let keyword are block-scoped ({}) and they are not hoisted.

**Hoisting:** In JavaScript, all variable and function declarations are moved or hoisted to the top of their current scope, regardless of where it is defined. This is the default behavior of JavaScript interpreter which is called hoisting.

**Function Scoped:** Within the function 
**Block Scoped:** Within the curly brackets(braces)

> `var` keyword is function-scoped whereas `let` keyword is block scoped.

```
// ES6 syntax
for(let i = 0; i < 5; i++) {
    console.log(i); // 0,1,2,3,4
}
console.log(i); // undefined


// ES5 syntax
for(var i = 0; i < 5; i++) {
    console.log(i); // 0,1,2,3,4
}
console.log(i); // 5
```

## 2. The const Keyword

The new const keyword makes it possible to define constants. Constants are read-only, you cannot reassign new values to them. They are also block-scoped like let.

> `const` keyword is block-scoped and read-only.

```
const PI = 3.14;
console.log(PI); // 3.14

PI = 10; // error
```

However, you can still change object properties or array elements:

```
// Changing object property value
const PERSON = {name: "Peter", age: 28};
console.log(PERSON.age); // 28
PERSON.age = 30;
console.log(PERSON.age); // 30

// Changing array element
const COLORS = ["red", "green", "blue"];
console.log(COLORS[0]); // red
COLORS[0] = "yellow";
console.log(COLORS[0]); // yellow
```

## 3. The for...of Loop

The new `for...of` loop allows us to iterate over arrays or other iterable objects very easily.

> `for...of` loop gives the value from an iterable in each loop.

```
// Iterating over array
let letters = ["a", "b", "c", "d", "e", "f"];

for(let letter of letters) {
    console.log(letter); // a,b,c,d,e,f
}
```

## 4. Template Literals

Template literals are created using back-tick (\` \`). Variables or expressions can be placed inside the string using the ${...} syntax.

> (\` \`) Used to create multi-line strings and embed variables inside the string.

```
// Simple multi-line string
let str = `The quick brown fox
    jumps over the lazy dog.`;

// String with embedded variables and expression
let a = 10;
let b = 20;
let result = `The sum of ${a} and ${b} is ${a+b}.`;
console.log(result); // The sum of 10 and 20 is 30.
```

## 5. Default Values for Function Parameters

> In ES6 we can specify default values to the function parameters. In case no parameters are provided while calling the function, default value will be used.

```
function sayHello(name='World') {
    return `Hello ${name}!`;
}

console.log(sayHello()); // Hello World!
console.log(sayHello('John')); // Hello John!
```

## 6. Arrow Functions

> Arrow fucntions provide a more concise syntax for writing function expressions by opting out the `function` and `return` keywords.

Arrow functions are defined using a new syntax, the fat arrow (`=>`) notation.

```
// Function Expression
var sum = function(a, b) {
    return a + b;
}
console.log(sum(2, 3)); // 5

// Arrow function
var sum = (a, b) => a + b;
console.log(sum(2, 3)); // 5
```

> We can also skip the parentheses i.e. () in case when there is exactly one parameter, but we will always need to use it when we have zero or more than one parameter.

> Additionally, if there's more than one expression in the function body, we need to wrap it braces ({}). In this case we need to use the `return` statement to return a value.


## 7. Classes

In ECMAScript 5 and earlier, classes were never existed in JavaScript. Classes are introduced in ES6.

ES6 classes make it easier to create objects, implement inheritance by using the extends keyword, and reuse the code.

```
class Rectangle {
    // Class constructor
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    
    // Class method
    getArea() {
        return this.length * this.width;
    }
}

// Square class inherits from the Rectangle class
class Square extends Rectangle {
    // Child class constructor
    constructor(length) {
        // Call parent's constructor
        super(length, length);
    }
    
    // Child class method
    getPerimeter() {
        return 2 * (this.length + this.width);
    }
}
```

## 7. The Rest Parameters

A rest parameter is specified by prefixing a named parameter with rest operator (...) i.e. three dots. Rest parameter can only be the last one in the list of parameters, and there can only be one rest parameter.

> Rest parameters allows us to pass an arbitrary number of parameters to a function in the form of an array.

```
function sortNames(...names) {
    return names.sort();
}

alert(sortNames("Sarah", "Harry", "Peter")); // Harry,Peter,Sarah
alert(sortNames("Tony", "Ben", "Rick", "Jos")); // John,Jos,Rick,Tony

function myFunction(a, b, ...args) {
    return args;
}

alert(myFunction(1, 2, 3, 4, 5)); // 3,4,5
```

## 8. The Spread Operator

> The spread operator spreads out (i.e. splits up) an array and passes the values into the specified function.

```
function addNumbers(a, b, c) {
    return a + b + c;
}

let numbers = [5, 12, 8];

// ES5 way of passing array as an argument of a function
alert(addNumbers.apply(null, numbers)); // 25

// ES6 spread operator
alert(addNumbers(...numbers)); // 25
```

## 9. Destructuring Assignment

Prior to ES6, to get an individual value of an array we need to write something like this:

```
// ES5 syntax
var fruits = ["Apple", "Banana"];

var a = fruits[0];
var b = fruits[1];
alert(a); // Apple
alert(b); // Banana
```

In ES6, we can do the same thing in just one line using the array destructuring assignment:

```
// ES6 syntax
let fruits = ["Apple", "Banana"];

let [a, b] = fruits; // Array destructuring assignment

alert(a); // Apple
alert(b); // Banana
```

We can also use rest operator while destructuring.

```
// ES6 syntax
let fruits = ["Apple", "Banana", "Mango"];

let [a, ...r] = fruits;

alert(a); // Apple
alert(r); // Banana,Mango
alert(Array.isArray(r)); // true
```

Objects can also be destructured as show below.

```
// ES6 syntax
let person = {name: "Peter", age: 28};

let {name, age} = person; // Object destructuring assignment

alert(name); // Peter
alert(age); // 28
```

## 10. Module

> ES6 introduces file based module, in which each module is represented by a separate `.js` file. Now, you can use the `export` or `import` statement in a module to export or import variables, functions, classes or any other entity to/from other modules or files.

```
//Exporting from main.js file

let greet = "Hello World!";
const PI = 3.14; 

function multiplyNumbers(a, b) {
    return a * b;
}

// Exporting variables and functions
export { greet, PI, multiplyNumbers };
```

```
//Importing to another file

import { greet, PI, multiplyNumbers } from './main.js';

alert(greet); // Hello World!
alert(PI); // 3.14
alert(multiplyNumbers(6, 15)); // 90
```