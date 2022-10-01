/**
 * Solution 1
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
// PASSED
// console.log(fizzbuzz(20))


/**
 * Solution 2
 *
 * @param {number} n Examine this number
 * @returns {boolean} True if n is prime and false otherwise
 */
 function isPrime (n) {
    if (n <= 1) {
        return false
    }
    let constraint = n/2
    for (let i=2; i<=constraint; i++) {
        if (n % i == 0) {
            return false
        }
    }
    return true
}
//TODO: (manage Time Complexity)
// console.log(isPrime(961748927))

/**
 * Solution 3
 *
 * @param {number} n The number
 * @returns {string} The text version of the number
 */
 function numberToText (n) {
    let num = `${n}`
    if (num.length == 2 && num[0]==1 && num[1]==0) {
        return "Ten"
    }
    function Ones (x) {
        let numList = ["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"]
        return numList[x]
    }
    function Tens(x) {
        let numList = ["","","Twenty","Thirty","Fourty","Fifty","Sixty","Seventy","Eighty","Ninety"]
        return numList[x]
    }
    if (num.length == 1) {
        return Ones(num)
    } else if (num.length == 2) {
        return Tens(num[0]) + " " + Ones(num[1])
    } else if (num.length == 3) {
        return Ones(num[0]) + " Hundred " + Tens(num[1]) + " " + Ones(num[2])
    }
}
//INCOMPLETE
console.log(numberToText(390))