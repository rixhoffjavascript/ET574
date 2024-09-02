// solution.js

// Problem 1: Reverse a String
// Write a function that takes a string as input and returns the string reversed.

function reverseString(str) {
  return str.split('').reverse().join('');
}

// Test case
console.log(reverseString("hello")); // Output: "olleh"

// Problem 2: Sum of Array
// Write a function that takes an array of numbers and returns the sum of all the numbers.

function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// Test case
console.log(sumArray([1, 2, 3, 4])); // Output: 10

// Problem 3: FizzBuzz
// Write a function that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// Call the function to see the result
fizzBuzz();

// Problem 4: Find the largest number in an array
// Write a function that takes an array of numbers and returns the largest number.

function findLargestNumber(arr) {
  return Math.max(...arr);
}

// Test case
console.log(findLargestNumber([1, 2, 3, 4, 5])); // Output: 5

// Problem 5: Palindrome Checker
// Write a function that checks if a given string is a palindrome.

function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

// Test case
console.log(isPalindrome("race car")); // Output: true
console.log(isPalindrome("hello"));   // Output: false

