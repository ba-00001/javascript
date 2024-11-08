//Section 1.2	Oct 23	Oct 29	JavaScript Loops and Arrays

// 1. Have you ever used any AI tools?
// Yes, I've used several AI tools, like ChatGPT, Grammarly, and DALL-E. I've used ChatGPT mainly to help clarify coding concepts, answer questions on complex topics, and get assistance with programming tasks. Grammarly has been helpful for improving my writing, especially in formal settings, and DALL-E has been fun to use for creating unique visuals for projects.

// 2. What did you think about your interaction with AI?
// My experience with AI has generally been positive. AI tools can provide quick, personalized responses and resources that help me understand concepts in a more interactive way. I like how they can act almost like a tutor, always ready to answer questions or provide guidance on a specific topic.

// 3. What are ways you think AI can help you as you learn content throughout this class?
// AI can be a valuable resource for reinforcing new programming concepts, providing examples, and troubleshooting issues. AI tools like ChatGPT can help me understand different approaches to solving a problem, while tools like Grammarly can help ensure my written communication is clear and concise when documenting my code or collaborating with others.

// 4. What are ways that AI can cause frustration or negatively impact your learning?
// Sometimes, AI responses can be too broad or overly complicated, which can lead to confusion instead of clarity. It can also be frustrating if an AI provides an answer that feels generic or doesn’t fully address a specific issue. Relying too much on AI could also lead to missing out on learning the fundamentals deeply, as it's easy to let the tool do the heavy lifting instead of fully processing the problem myself.

//--------------- IMPORTANT!!! ---------------

// Use the keyboard shortcut Alt + Z (for PC) or Option + Z (for Mac) to allow word wrap on this document.  Word wrap breaks the lines so you don't have to keep scrolling left and right to read.

//READ THE INFORMATION IN THE BROWSER WINDOW PANEL ON THE RIGHT BEFORE BEGINNING YOUR ASSIGNMENT!!

//---------- OVERVIEW AND INSTRUCTIONS ----------

//----------------------------------
// LESSON 2 LOOPS AND ARRAYS
//----------------------------------

//# JavaScript Loops and Arrays
// This is the coding assigment for the second week of the Intro to Programming course from Code the Dream. The concepts touched on in this assignment include:
//   - Simplify Repetitive Tasks with Loops
//   - Working with ‘for’ Loops
//   - Understanding Arrays

// In this assignment you will write your own code. Your instructions are listed as "comments", meaning the instructions are grayed out and start with '//' at the beginning of the line of code. Put your answers immediately below the instructions for each question. As mentioned in the Welcome to week 2 information to the right, you'll need to use console logs for all the questions to check your code output. Using a function in a console.log is very similar to how you were using them with variables last week. To invoke/call the function use the syntax:

//  console.log("Q#: ", functionName(anyInput))

// Please be sure to check the output of your called functions and console logs in the Console tab to the bottom right of this screen. If your Console is not showing, click the Inspect Button in the top right (see the Welcome to week 2 information to the right if you need help finding that)  Check to make sure that the output you get in your Console is the expected output.

// ---------- QUESTION 1 ----------
// Write a function called 'repeat' that takes 1 integer parameter and, using a for or while loop, prints out the string "Hello World!" to the console the same number of times as the parameter. NOTE: for this question, since your console log should be inside your function, you only need to call/invoke the function after you write it rather than call/invoke it inside of a console.log.

// EXAMPLE "LOG":
//    repeat(3);
// EXAMPLE OUTPUT:
//    Hello World!
//    Hello World!
//    Hello World!

// PUT YOUR CODE HERE
// ---------- QUESTION 1 ----------
function repeat(num) {
  // Loop to print "Hello World!" num times
  for (let i = 0; i < num; i++) {
    console.log("Hello World!");
  }
}
// Example call
repeat(3);
// ---------- QUESTION 2 ----------
// Write a function called 'pyramidCounting' that takes 1 integer parameter and returns the sum of all of the numbers between 0 and the parameter.

// EXAMPLE LOG:
//    console.log("Q2: ", pyramidCounting(4));
// EXAMPLE OUTPUT:
//    Q2: 10
// The mathematical explanation of this is 0+1+2+3+4 = 10.

//PUT YOUR CODE HERE
function pyramidCounting(num) {
  // Initialize sum
  let sum = 0;
  // Loop from 0 to num, adding each value to sum
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}
// Example call
console.log("Q2: ", pyramidCounting(4));
// ---------- QUESTION 3 ----------
// Write a function called 'noVowels' that take a string parameter and removes vowels from that string using a loop.

// EXAMPLE LOG:
//    console.log("Q3: ", noVowels(adventurous));
// EXAMPLE OUTPUT:
//    Q3: dvntrs

// PUT YOUR CODE HERE
function noVowels(str) {
  // Initialize result string
  let result = "";
  // Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
    // Check if character is not a vowel
    if (!"aeiouAEIOU".includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}
// ---------- QUESTION 4 ----------
// Write a function called 'vowelCount' that takes 1 string parameter and returns the number of vowels in that string.

// EXAMPLE LOG:
//    console.log("Q4: ", vowelCount('I love to code.'));
// EXAMPLE OUTPUT:
//    Q4: 6

// PUT YOUR CODE HERE
function vowelCount(str) {
  // Initialize count of vowels
  let count = 0;
  // Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
    // Check if character is a vowel
    if ("aeiouAEIOU".includes(str[i])) {
      count++;
    }
  }
  return count;
}
// Example call
console.log("Q4: ", vowelCount("I love to code."));
// ---------- QUESTION 5 ----------
// Write a function called 'numOfOdds' that takes 1 integer parameter and returns the number of odd numbers between 0 and that number, including the number if it's odd. (Hint: Use the modulo operator)

// EXAMPLE LOG:
//    console.log("Q5: ", numOfOdds(15));
// EXAMPLE OUTPUT:
//    Q5: 8

// PUT YOUR CODE HERE
function numOfOdds(num) {
  // Initialize count of odd numbers
  let count = 0;
  // Loop from 0 to num, counting odd numbers
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      count++;
    }
  }
  return count;
}
// Example call
console.log("Q5: ", numOfOdds(15));
// ---------- QUESTION 6 ----------
// Create two variables named 'empty' and 'full'.  Assign an empty array to the 'empty' variable and any array of strings or numbers to the 'full' variable.  Write a function called 'arrayChecker' that returns true if the array passed as a parameter is empty and false if not.  Check both the 'empty' and 'full' variables to make sure they are returning the expected values.

// EXAMPLE LOGS:
//    console.log("Q6 empty: ", arrayChecker(empty));
//    console.log("Q6 not empty: ", arrayChecker(full));
// EXAMPLE OUTPUTS:
//    Q6 empty: true
//    Q6 not empty: false

// PUT YOUR CODE HERE
let empty = [];
let full = ["dream", 19, "code", 24, 180];

function arrayChecker(arr) {
  // Check if array length is 0
  return arr.length === 0;
}
// Example calls
console.log("Q6 empty: ", arrayChecker(empty));
console.log("Q6 not empty: ", arrayChecker(full));
// ---------- QUESTION 7 ----------
// Write a function called 'getElementAt' that takes an array parameter and an integer parameter.  The function should return the element in the array at the given number index or 'null' if it doesn't exist.  Use your 'full' variable from Question 6 to test.

// EXAMPLE LOGS:
//    console.log("Q7: ", getElementAt(full, 2));
//    console.log("Q7: ", getElementAt(full, 7));
// EXAMPLE OUTPUT: (if the array assigned to variable 'full' is ["dream", 19, "code", 24, 180])
//    Q7: code
//    Q7: null
function getElementAt(arr, index) {
  // Return element at given index or null if it doesn't exist
  return arr[index] !== undefined ? arr[index] : null;
}
// Example calls
console.log("Q7: ", getElementAt(full, 2));
console.log("Q7: ", getElementAt(full, 7));
// ---------- QUESTION 8 ----------
// Write a function called 'insertInArray' that takes an array parameter, makes a NEW array with the value '0' inserted at the second position in the NEW array.  The function should return the NEW array.  Use your 'full' variable from Question 6 to test.  NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array.  To make a copy you can use the slice() method as in this example:
// let newArray = originalArray.slice()
// LEARNING MOMENT: Also console log the variable 'full' to compare the new array to the original.

// EXAMPLE LOG:
//    console.log("Q8: ", insertInArray(full));
//    console.log("original array: ", full);
// EXAMPLE OUTPUT: (if the array assigned to variable 'full' is ["dream", 19, "code", 24, 180])
//    Q8: ["dream", 0, 19, "code", 24, 180]
//    original array: ["dream", 19, "code", 24, 180]

// PUT YOUR CODE HERE
function insertInArray(arr) {
  // Make a copy of arr and insert 0 at the second position
  let newArray = arr.slice();
  newArray.splice(1, 0, 0);
  return newArray;
}
// Example call
console.log("Q8: ", insertInArray(full));
console.log("original array: ", full);
// ---------- QUESTION 9 ----------
// Write a function called 'compareArrays' that takes two Array parameters (containing numbers or strings only) and returns true if they are equal, false if not.  The purpose of this function should be to look at each element of the two arrays and compare them, returning false when they either hit two items that don't match, or returning false if the two arrays themselves are different lengths. You can test this with the 'empty' and 'full' variables from Question 6, and/or you can create a variable called 'compare' and assign it an array identical to 'full' to compare those.  To further test your function's accuracy, create a new variable called 'part' that is a partial copy of the 'full' variable and test that as well.

// REMEMBER: In JavaScript, 1 === '1' is false, but 1 == '1' is true. You'll need to use the triple equals operator which is more strict because it compares data type.

// EXAMPLE LOG:
//    console.log("Q9 same: ", compareArrays(full, compare));
// EXAMPLE OUTPUT: (if both arrays assigned to variable 'full' and 'compare' are ["dream", 19, "code", 24])
//    Q9 same: true

// EXAMPLE LOG:
//    console.log("Q9 different: ", compareArrays(full, empty));
// EXAMPLE OUTPUT: (if using variables from Question 6)
//    Q9 different: false

// EXAMPLE LOG:
//    console.log("Q9 partial: ", compareArrays(full, part));
// EXAMPLE OUTPUT: (if 'full' variable is ["dream", 19, "code", 24] and if 'part' variable is ["dream", 19, "code"])
//    Q9 different: false

// PUT YOUR CODE HERE
function compareArrays(arr1, arr2) {
  // Check if arrays are different lengths
  if (arr1.length !== arr2.length) return false;
  // Loop to compare each element
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
// Example calls
let compare = ["dream", 19, "code", 24, 180];
let part = ["dream", 19, "code"];
console.log("Q9 same: ", compareArrays(full, compare));
console.log("Q9 different: ", compareArrays(full, empty));
console.log("Q9 partial: ", compareArrays(full, part));
// ---------- QUESTION 10 ----------
// Create a variable called 'numbers' and assign it an array with at least 3 numbers as elements (example: [10, 3, 4]).  Write a function called 'calculateTotal' that takes one array parameter and loops through the array in order to return the sum of all the array elements.
// STRETCH GOAL: use the `reduce()` method

// EXAMPLE LOG:
//    console.log("Q10: ", calculateTotal(numbers));
// EXAMPLE OUTPUT: (if the array assigned to variable 'numbers' is [3, 4, 2 ,8])
//    Q10: 17

// PUT YOUR CODE HERE
let numbers = [3, 4, 2, 8];

function calculateTotal(arr) {
  // Loop to calculate sum of array elements
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Stretch goal using reduce method
function calculateTotalWithReduce(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// Example calls
console.log("Q10: ", calculateTotal(numbers));
console.log("Q10 with reduce: ", calculateTotalWithReduce(numbers));
// ---------- QUESTION 11 ----------
// Write two functions called 'findEvens' and 'findOdds' that each take one array parameter and each returns a NEW Array of all the even or odd numbers as indicated.  NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array.  To make a copy you can use the slice() method as in this example:
// let newArray = originalArray.slice()
// STRETCH GOAL: use the `filter()` method

// EXAMPLE LOG:
//    console.log("Q11 evens: ", findEvens([10,2,3,19,7,6,93]));
//    console.log("Q11 odds: ", findOdds([10,2,3,19,7,6,93]));
// EXAMPLE OUTPUT:
//    Q11 evens: [10,2,6]
//    Q11 odds: [3,19,7,93]

// PUT YOUR CODE HERE
function findEvens(arr) {
  // Create new array for even numbers
  let evens = arr.slice().filter((num) => num % 2 === 0);
  return evens;
}

function findOdds(arr) {
  // Create new array for odd numbers
  let odds = arr.slice().filter((num) => num % 2 !== 0);
  return odds;
}

// Example calls
console.log("Q11 evens: ", findEvens([10, 2, 3, 19, 7, 6, 93]));
console.log("Q11 odds: ", findOdds([10, 2, 3, 19, 7, 6, 93]));
// ---------- QUESTION 12 ----------
// Write a function called 'makeSquares' that takes one array parameter and returns a NEW Array with the squared values of each of the numbers.  NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array.  To make a copy you can use the slice() method as in this example:
// let newArray = originalArray.slice()
// STRETCH GOAL: use the `map()` method

// EXAMPLE LOG:
//    console.log("Q12: ", makeSquares([2,5,8]));
// EXAMPLE OUTPUT:
//    Q12: [4,25,64]

// PUT YOUR CODE HERE
function makeSquares(arr) {
  // Create new array with squares of each element
  return arr.slice().map((num) => num * num);
}

// Example call
console.log("Q12: ", makeSquares([2, 5, 8]));

// ---------- BONUS QUESTION / STRETCH GOAL ----------
// Back in the old days, the early 2000s, this was a famous technical interview question. Write a function definition that takes NO parameters. The function will loop from 1 to 15 and return an array of numbers. While looping, the function will check if the current value in the loop is divisible by 3, by 5, or by both. If the current value in the loop is divisible by 3, the function will add the string "fizz" to an array. If the current value in the loop is divisible by 5, the function will add the string "buzz" to the array. If the current value in the loop is divisible by both, the function will add the value "fizzbuzz" to the array. If the number isn't divisible by 3, 5, OR both, it will add the number to the array.  The function will return the array of values.

// EXAMPLE LOG:
//    console.log("BONUS: ", fizzBuzz();
// EXAMPLE OUTPUT:
//    BONUS: [1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz',11,'fizz',13,14,'fizzbuzz']

// PUT YOUR CODE HERE
function fizzBuzz() {
  let result = [];
  // Loop from 1 to 15
  for (let i = 1; i <= 15; i++) {
    // Check divisibility by 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("fizzbuzz");
    } else if (i % 3 === 0) {
      result.push("fizz");
    } else if (i % 5 === 0) {
      result.push("buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

// Example call
console.log("BONUS: ", fizzBuzz());
