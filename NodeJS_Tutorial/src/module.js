const sum = (num1, num2) => num1 + num2;
const PI = 3.14
class someJSObject {
    constructor () {
        console.log('Object export successfully!!')
    }
}

module.exports = {
    sum: sum,
    PI: PI,
    someJSObject: someJSObject,
}