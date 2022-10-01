/**
 * Solution 1
 *
 * Implement the solution in this function
 *
 * @param {number} n Output goes from 1 to n
 * @returns {(number|string)[]} An array containing all numbers and strings
 */
 function fizzbuzz (n) {
    let finalList = [];
    for (let i=1; i<=n; i++) {
        if (i % 3 != 0 && i % 5 != 0) {
            finalList.push(i)
        } else if (i % 3 == 0 && i % 5 != 0) {
            finalList.push("Fizz")
        } else if (i % 3 != 0 && i % 5 == 0) {
            finalList.push("Buzz")
        } else if (i % 3 == 0 && i % 5 == 0) {
            finalList.push("FizzBuzz")
        }
    }
    return finalList
}
// console.log("Solution 1")
// console.log(fizzbuzz(20))


/**
 * Solution 2
 *
 * Implement the solution in this function
 *
 * @param {number} n Examine this number
 * @returns {boolean} True if n is prime and false otherwise
 */
 function isPrime (n) {

}