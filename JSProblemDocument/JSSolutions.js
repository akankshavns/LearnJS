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

/**
 * Solution 6
 *
 * @param {number} n The amount of money in cents.
 * @returns {number} The minimum number of coins needed.
 */
 function changeCoins (n) {
    let finalCount = 0
    let finalSum = 0
    let changes = [1, 2, 5, 10, 25]
    let coinCount = 0
    for (coin in changes) {
        if (changes[coin] == n) {
            coinCount = coin
            break
        } else if (changes[coin] > n) {
            coinCount = coin -1
            break
        } else {
            coinCount = 4
        }
    }
    while (coinCount >= 0) {
        let i = 1
        innerLoop:
        while (true) {
            if (changes[coinCount] * i > (n - finalSum)) {
                finalCount += i - 1
                finalSum += changes[coinCount] * (i - 1)
                break innerLoop
            } else if (changes[coinCount] * i == (n - finalSum)) {
                finalCount += i
                finalSum += changes[coinCount] * i
                break innerLoop
            }
            i++
        }
        coinCount--
        if (finalSum == n) {
            return finalCount
        }
    }
}
//PASSED
// console.log(changeCoins(8))

/**
 * Solution 7
 *
 * @param {string[]} script The list of commands.
 * @returns {string[]} The list of string outputs per command.
 */
 function run (script) {
    let db = {}
    let outputs = []
    for (rawCount in script) {
        let rawScript = script[rawCount]
        let splitScript = rawScript.split(' ')
        if (splitScript.length >= 3) {
            if (splitScript[0] !== 'SET' || splitScript[0] === 'GET' || !splitScript[1].match(/^[a-zA-Z0-9]+$/g)) {
                outputs.push('ERROR')
                continue
            }
            if (!db[splitScript[1]]) {
                db[splitScript[1]] = splitScript.slice(2,splitScript.length).join(' ')
                outputs.push('CREATED')
            } else if (db[splitScript[1]] !== splitScript[2]) {
                db[splitScript[1]] = splitScript.slice(2,splitScript.length).join(' ')
                outputs.push('UPDATED')
            } else { outputs.push('UNCHANGED') }
        } else if (splitScript.length === 2 && splitScript[0] == 'GET') {
            db[splitScript[1]] ? outputs.push('VALUE='+db[splitScript[1]]) : outputs.push('NOT FOUND')
        } else {
            outputs.push('ERROR')
            continue
        }
    }
    return outputs
}
//Failed
// console.log(run([ "invalid command"]))


/**
 * Solution 8
 */
// M1
const reverse = string =>
  string
    .split("")
    .reverse()
    .join("");
// M2
const _reverse = string => {
  let result = "";
  for (let character of string) result = character + result;
  return result;
};
// M3
const __reverse = string =>
  string.split("").reduce((result, character) => character + result);

/**
 * Solution 9
 */

/**
 * Solution 10
 */

const max = string => {
  const characters = {};

  for (let character of string)
    characters[character] = characters[character] + 1 || 1;

  let maxCount = 0;
  let maxCharacter = null;

  for (let character in characters) {
    if (characters[character] > maxCount) {
      maxCount = characters[character];
      maxCharacter = character;
    }
  }

  return maxCharacter;
};


/**
 * Solution 11
 */

const reverseArray = array => {
  for (let i = 0; i < array.length / 2; i++) {
    const temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
};

/**
 * Solution 12
 */

const steps = number => {
  let stairs = "";

  for (let row = 0; row < number; row++) {
    let stair = "";

    for (let column = 0; column < number; column++)
      stair += column <= row ? "#" : " ";

    stairs += stair + "\n";
  }

  return stairs;
};

/**
 * Solution 13
 */

function findMax(ar) {
    var max = ar[0];

    for(var i = 0; i < ar.length; i++)
    {
        if (ar[i] > max)
        {
            max = ar[i];
        }
    }

    return max;
}

/**
 * Solution 14
 */

var ar = getCharFrequency("Find the frequency of characters inside a string");
println(JSON.stringify(ar));

function getCharFrequency(text)
{
    var ar = [];

    for(var chr of text)
    {
        updateFrequency(ar, chr);
    }

    return ar;
}

function updateFrequency(ar, chr)
{
    for(var el of ar)
    {
        if (el.chr === chr)
        {
            el.count++;
        }
    }

    ar.push({ chr : chr, count : 1 });
}

/**
 * Solution 15
 */

var text = "Create a function to return the longest word(s) in a sentance.";

println(getLongestWords(text));

function getLongestWords(text)
{
    var words = getWords(text);

    var maxSize = 0;
    var maxPositions = [];

    for(var i = 0; i < words.length; i++)
    {
        var currWordSize = words[i].length;

        if (currWordSize > maxSize)
        {
            maxSize = currWordSize;
            maxPositions = [ i ];
        }
        else if (currWordSize === maxSize)
        {
            maxPositions.push(i);
        }
    }

    return getElements(words, maxPositions);
}

