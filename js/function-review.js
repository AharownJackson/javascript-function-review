let practiceQuestions = [
 'Define a function named lowerCase that takes in an input and returns that input as a string in all lower case letters. Returns false if the input passed is not a string.',
    'Define a function named isAllLowerCase that takes in a string and returns true if all characters in the string are lowercase otherwise it should return false.',
    'Define a function named isAllUpperCase that takes in a string and returns true if all characters in the string are uppercase otherwise it should return false.',
    'Define a function named isNotPalindrome that takes in a string and returns true if that string is not palindrome, if the string is palindrome should return false.',
    'Define a function named multiplyBy2 that takes in an input and multiplies it by 2 if the input is numeric. If the input is Not A Number, then return false.',
    'Define a function named convertHourToSec that takes in one input Hours. Return the conversation of the number of hours into total seconds. If the input is not numeric or a numeric string, convertHourToSec, should return false.',
    'Write a function named getLowestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the lowest number. If any of the 3 inputs is missing or non-numeric, then return false.',
    'Write a function named addStringLengths that takes in two inputs. If both inputs provided are strings, addStringLengths returns the sum after adding the length (number of characters) of both strings. If either or both inputs are not strings, return false.',
    'Write a function named subtract that takes in two inputs. If both inputs provided are numeric or numeric strings, subtract will return the difference when the second input is subtracted from the first input. If one or both inputs is not numeric or numeric strings, subtract should return false.',
    'Write a function named calculateChange that takes in two inputs, totalPaid and totalCost. If both inputs are numeric or numeric strings, calculateChange should return the change after subtracting the cost from the amount paid. The return should be in $x.xx format as a string Note: it should return with two decial places. If either or both inputs are not numeric or numeric strings, calculateChange should return false.',
    'Define a function named isANumber that takes in a value and returns true if the input is numeric, or false if the input is not numeric. Numeric strings should not be considered as numbers in this function, and should return false.',
    'Define a function named increment that takes in an input and adds 1 to it if the input is numeric. If the input is not numeric, then return false.',
    'Define a function named decrement. If the provided input is numeric, the function should subtract 1 and return the result. If the input is not numeric, decrement should return false.',
    'Write a function named getHighestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the highest number. If any of the 3 inputs is missing or non-numeric, then return false.',
    'Define a function named parseNumber that parses (converts) a numeric String and returns its value as a number, the function should be able to decide if it should be parsing an Integer or a Float value.',
    'Write a function named add that takes in two inputs. If both inputs provided are numeric, add will return the sum of both inputs. If one or both inputs is not numeric, add should return false.',
    'Write a function named multiply that takes in two inputs. If both inputs provided are numeric, multiply returns the product of the first input multiplied by the second. If either or both inputs are not numeric, multiply should return false',
    'Define a function named square. If the provided input is numeric, square should return the number multiplied by itself. If the input is not numeric, square, should return false.',
    'Write a function named sumOfSquares that takes in two inputs. If both inputs are numeric, sumOfSquares should square each input and return the sum of them added together. For example, if we pass a and b then we should square a and add it to the square of b. If either or both inputs are not numeric, sumOfSquares should return false.',
    'Write a function named isPalindrome that takes in a single input. If the input is a numeric string, then return false. If the input is a string, then return true if the string is the same forwards as it is backwards. Return false if the string is different forwards from backwards. Ignore capitalization.',
    'Define a function named isBoolean that takes in a value and returns a boolean if the argument provided is a boolean value or not.',
    'Define a function named isString that takes in a value as an input and returns a boolean if the input provided is a string or not. Numeric strings will count as strings and should return true.',
    'Define a function named isNotString that accepts an input and returns true or false based on whether an input is not a string. Numeric strings will count as strings and should return false.',
    'Define a function named isEmptyString that will return true when passed an argument with the value of "", i.e. an empty string. All other arguments should return false.',
    'Define a function named isNotANumber that accepts an input and returns true or false based on whether an input is a non-numeric value or not. Numbers as strings are not a number and should return true.',
    'Define a function named isNegative that accepts a number and returns true or false based on whether the input is less than zero.',
    'Define a function named isPositive that accepts an input and returns true or false based on whether the input is above zero. Any non-numeric input should return false.',
    'Define a function named isZero that will return true when passed an argument of the numeric value 0, and return false for all other arguments.',
    'Define a function named isArray that takes in an input and returns a boolean whether or not that input is an array or not.',
    'Define a function named upperCase that takes in a single input. If the input is not a string, return false. If the input is a non-numeric string, then return it with all the letters capitalized.',
]

// console.log(practiceQuestions[0]);
// console.log(practiceQuestions[1]);
// console.log(practiceQuestions[2]);
// console.log(practiceQuestions[3]);
// console.log(practiceQuestions[4]);
// console.log(practiceQuestions[5]);
// console.log(practiceQuestions[6]);
// console.log(practiceQuestions[7]);
// console.log(practiceQuestions[8]);
// console.log(practiceQuestions[9]);
// console.log(practiceQuestions[10]);
// console.log(practiceQuestions[11]);
// console.log(practiceQuestions[12]);
// console.log(practiceQuestions[13]);
// console.log(practiceQuestions[14]);
// console.log(practiceQuestions[15]);
// console.log(practiceQuestions[16]);
// console.log(practiceQuestions[17]);
// console.log(practiceQuestions[18]);
// console.log(practiceQuestions[19]);
// console.log(practiceQuestions[20]);
// console.log(practiceQuestions[21]);
// console.log(practiceQuestions[22]);
// console.log(practiceQuestions[23]);
// console.log(practiceQuestions[24]);
// console.log(practiceQuestions[25]);
// console.log(practiceQuestions[26]);
// console.log(practiceQuestions[27]);
// console.log(practiceQuestions[28]);
// console.log(practiceQuestions[29]);


console.log(practiceQuestions)

console.log(practiceQuestions[getRandomInt(0, 29)]);


document.write(`The Practice Question is:
      <br><br>
      <P style="font-size: 20px; font-weight: bold;">${practiceQuestions[getRandomInt(0, 29)]}</P>`)



function getRandomInt(min, max) {
    for(let i = 0; i < 10; i++) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let num = (Math.floor(Math.random() * (max - min) + min));
        return num;
    }
}








