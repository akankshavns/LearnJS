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
    function Ones (x) {
        let numList = ["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"]
        return numList[x]
    }
    function Tens(x) {
        let numList = ["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"]
        return numList[x]
    }
    function Specials(x) {
        let numList = ["", "Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"]
        return numList[x]
    }
    function getNumberRaw(n) {
        let num = `${n}`
        if (num.length == 2 && num[0]==1 && num[1]==0) {
            return "Ten"
        }
        if (num.length == 1) {
            return Ones(num)
        } else if (num.length == 2) {
            if (num[0]=="1") {
                return Specials(num[1])
            }
            return `${Tens(num[0]) + " " + Ones(num[1])}`.trim().replace(/\s{2,}/g, " ")
        } else if (num.length == 3) {
            if (num[1]=="1") {
                return `${Ones(num[0]) + " Hundred " + Specials(num[2])}`.trim()
            }
            return `${Ones(num[0]) + " Hundred " + Tens(num[1]) + " " + Ones(num[2])}`.trim().replace(/\s{2,}/g, " ")
        }
    }
    if (num.length <= 3) {
        return getNumberRaw(n)
    } else if (num.length > 3) {
        part1 = num.substring(0,num.length-3)
        part2 = num.substring(num.length-3, num.length)
        console.log(part1, part2)
        return `${getNumberRaw(Number(part1)) + " Thousand " + getNumberRaw(Number(part2))}`.trim().replace(/\s{2,}/g, " ")
    }
}
//PASSED
// console.log(numberToText(303008))

/**
 * Solution 4
 *
 * @param {number[]} arr1 First sorted array
 * @param {number[]} arr2 Second sorted array
 * @returns {number[]} Merged and sorted array
 */
 function merge (arr1, arr2) {
    if (arr1.length == 0) {
        return arr2
    }
    if (arr2.length == 0) {
        return arr1
    }
    let mergedArr = []
    let counter1 = 0
    let counter2 = 0
    while(counter1<arr1.length || counter2<arr2.length) {
        if (arr1[counter1] == arr2[counter2]) {
            mergedArr.push(arr1[counter1])
            mergedArr.push(arr1[counter1])
            counter1++
            counter2++
        } else {
            if (arr1[counter1] < arr2[counter2]) {
                mergedArr.push(arr1[counter1])
                counter1++
                if (counter1 == arr1.length) {
                    mergedArr = mergedArr.concat(arr2.slice(counter2,arr2.length))
                    break
                }
            } else {
                mergedArr.push(arr2[counter2])
                counter2++
                if (counter2 == arr2.length) {
                    mergedArr = mergedArr.concat(arr1.slice(counter2,arr1.length))
                    break
                }
            }
        }
    }
    return mergedArr
}
//TODO: Incomplete
// console.log(merge([1, 3, 6, 8], [2, 3, 4, 7]))

/**
 * Solution 5
 *
 * @param {number} n The number of item in the sequence.
 * @returns {string} The n-th number in the look-and-say seequence.
 */
 function lookAndSay (n) {
    function something (n) {
        let i = 0
        n = `${n}`
        let finalNum = ""
        second:
        while(i < n.length) {
            let count = 1
            third:
            while (true) {
                if (n[i] == n[count+i]) {
                    count++
                } else {
                    finalNum += count + n[i]
                    i = i + count
                    break third
                }
            }
        }
        return finalNum
    }
    let itr = 2
    let initiator = "1"
    while (itr <= n) {
        let finalNum = something(initiator)
        initiator = finalNum
        itr ++
    }
    return initiator
}
//PASSED
// console.log(lookAndSay(2))