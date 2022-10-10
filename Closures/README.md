`Reference:` [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

# Closures

## Lexical scoping

For nested function, inner functions can used the variables declared and initiated outside them (parent functions)

```
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
```