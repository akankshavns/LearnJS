/*
* The problems mentioned here is taken from the website https://www.jschallenger.com/
*/

// Write a function that takes a value as argument
// Return the type of the value
function myFunction(a) {
    return typeof a
}


// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
function myFunction(a, b) {
    if (typeof a == typeof b && a == b) {
        return true
    }
    return false
}

function myFunction(a, b) {
    if (a === b) {
        return true
    }
    return false
}

// console.log(myFunction(1, '1'))

// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

function myFunction(str) {
    return str.substring(str.length-3, str.length)
}

// Write a function that takes an array (a) as argument
// Return the number of elements in a

function myFunction(a) {
    return a.length
}

// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
function myFunction(a, n) {
    return a[n-1]
}

// Write a function that takes a string as argument
// Create an object that has a property with key 'key' and a value equal to the string
// Return the object
function myFunction(a) {
    return {
        "key": a
    }
}

// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
function myFunction(a, n) {
    return a[n-1]
}

// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
function myFunction(a) {
    return a.substring(0, 3)
}

// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b'
// Return false otherwise
// Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined
// But the property itself exists
function myFunction(a, b) {
    if (b in a) {
        return true
    }
    return false
}
//Another better Solution
function myFunction(a, b) {
    return b in a
}

// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result
function myFunction(arr) {
    return arr.sort()
}

// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
function myFunction(a) {
    return a.slice(0, a.length-3)
}
//Another Better Solution
function myFunction(a) {
    return a.slice(0, -3)
}

// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
function myFunction(a) {
    return a.slice(3, a.length)
}
//Another Better solution
function myFunction(a) {
    return a.slice(3)
}

// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array
function myFunction(a) {
    return a.slice(0, 3)
}

// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
function myFunction(a) {
    return a.slice(3)
}

// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
function myFunction(a, b) {
    return a * b/100
}

// Write a function that takes an array (a) as argument
// Extract the last 3 elements of 'a'
// Return the resulting array
function myFunction(a) {
    return a.slice(-3)
}

// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
function myFunction(a, b) {
    if (a < b) {
        return a / b
    }
    return a * b
}
// Another best solution
function myFunction(a, b) {
    return a < b ? a /b : a * b
}

// Write a function that takes a Set and a value as arguments
// Check if the value is present in the Set
function myFunction(Set, a) {
    return a in Set
} // Wrong Answer
//TODO: Learn set in JavaSript