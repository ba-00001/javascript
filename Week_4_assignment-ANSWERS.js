//--------------- IMPORTANT!!! ---------------

// Use the keyboard shortcut Alt + Z (for PC) or Option + Z (for Mac) to allow word wrap on this document.  Word wrap breaks the lines so you don't have to keep scrolling left and right to read.

//READ THE INFORMATION IN THE BROWSER WINDOW PANEL ON THE RIGHT BEFORE BEGINNING YOUR ASSIGNMENT!!

//---------- OVERVIEW AND INSTRUCTIONS ----------

//----------------------------------
// LESSON 4 ARRAY METHODS
//----------------------------------

//  This is the coding assigment for the fourth week of the Intro to Programming course from Code the Dream. The concepts touched on in this assignment include:

//  - Using Array Methods
//  - Understanding about iterative methods
//  - Learning about callbacks
//  - Creating Higher Order Functions
//  - Using existing Array Higher Order Functions (e.g. forEach(), map(), filter(), etc.)

// In this assignment you will write your own code. Your instructions are listed as "comments", meaning the instructions are grayed out and start with '//' at the beginning of the line of code. Put your answers immediately below the instructions for each question. As mentioned in the Welcome to week 4 information to the right, you'll need to use console logs for all the questions to check your code output. Using a function in a console.log is very similar to how you were using them with variables last week. To invoke/call the function use the syntax:

//  console.log("Q#: ", functionName(anyInput))

// Please be sure to check the output of your called functions and console logs in the Console tab to the bottom right of this screen. If your Console is not showing, click the Inspect Button in the top right (see the Welcome to week 4 information to the right if you need help finding that)  Check to make sure that the output you get in your Console is the expected output.

// ----- Practice JS array methods: forEach -----
//---------- QUESTION 1 ----------
// Create an variable called 'names' and assign it an array of people's names.  Write a function called 'printNames' that uses the forEach array method to log each name in an array to the console.  Remember, since you're using the console.log in the function, you'll just want to call your function and pass it the array of names when testing your code.

// EXAMPLE CALL:
//    let names = ["Juan Marcos", "Aleksandra Ivanov", "Zhang Wei", "Bernice King"];
//    console.log("Q1 printNames:");
//    printNames(names);

// EXAMPLE OUTPUT:
//   Q1 printNames:
//   Juan Marcos
//   Aleksandra Ivanov
//   Zhang Wei
//   Bernice King

// PUT YOUR CODE HERE

//---------- QUESTION 1 ----------
let names = ["Juan Marcos", "Aleksandra Ivanov", "Zhang Wei", "Bernice King"]; // Create an array of names
function printNames(namesArray) {
  namesArray.forEach((name) => console.log(name)); // Iterate over the array with forEach and log each name
}
console.log("Q1 printNames:"); // Log the question heading
printNames(names); // Call the function with the names array

//---------- QUESTION 2 ----------
// Create a variable called 'trees' and assign it an array of 3 objects.  Each object should have a 'type' property and a 'height' property.  You can use 'type' to describe the type of tree (ex. Dogwood, Maple, Oak, Elm, etc.) and give them any height.  Now write a function called 'logTreeType' that uses forEach to log the type of each tree object to the console.

// EXAMPLE CALL:
//   const trees = [
//     { type: "oak", height: "30m" },
//     { type: "elm", height: "25m" },
//     { type: "birch", height: "18m" } ]
//   console.log("Q2 logTreeType:");
//   logTreeType(trees);

// EXAMPLE OUTPUT:
//   Q2 logTreeType:
//   oak
//   elm
//   birch

// PUT YOUR CODE HERE
//---------- QUESTION 2 ----------
const trees = [
  { type: "oak", height: "30m" }, // Define tree objects with 'type' and 'height' properties
  { type: "elm", height: "25m" },
  { type: "birch", height: "18m" },
];
function logTreeType(treesArray) {
  treesArray.forEach((tree) => console.log(tree.type)); // Use forEach to log each tree's 'type' property
}
console.log("Q2 logTreeType:"); // Log the question heading
logTreeType(trees); // Call the function with the array of trees


//---------- QUESTION 3 ----------
// Create a variable called 'myNumbers' and assign it an array of numbers.  Now write a function caled 'totalPoints' that uses forEach to add up all the numbers in that array of numbers.

// EXAMPLE CALL:
//   let myNumbers = [1, 2, 7, 5, 8];
//   console.log (`Q3 totalPoints [${myNumbers}]:`, totalPoints(myNumbers));

// EXAMPLE OUTPUT:
//   Q3 totalPoints [1,2,7,5,8]:  23

// Try a few different input arrays to verify your code is working.

// PUT YOUR CODE HERE
//---------- QUESTION 3 ----------
let myNumbers = [1, 2, 7, 5, 8]; // Create an array of numbers
function totalPoints(numbersArray) {
  let total = 0; // Initialize the total sum variable to 0
  numbersArray.forEach((num) => (total += num)); // Add each number in the array to the total
  return total; // Return the final total
}
console.log(`Q3 totalPoints [${myNumbers}]:`, totalPoints(myNumbers)); // Log the result of the function

//---------- QUESTION 4 ----------
// Create a variable called 'myWords' and assign it an array of words.  Then write a function called 'buildSentence' that takes in an array of words and uses forEach to add the strings together. It should also add a space, " ", after each word.

// EXAMPLE CALL:
//    myWords = ["You","can","if","you","think","you","can","!"];
//    console.log (`Q4 buildSentence [${myWords}]: `, buildSentence(myWords));

// EXAMPLE OUTPUT:
//   Q4 buildSentence [You,can,if,you,think,you,can,!]:  You can if you think you can !

// Note: You should have a space after the ! too
// Try a few different input arrays to verify your code is working.

// PUT YOUR CODE HERE
//---------- QUESTION 4 ----------
let myWords = ["You", "can", "if", "you", "think", "you", "can", "!"]; // Define an array of words
function buildSentence(wordsArray) {
  let sentence = ""; // Initialize an empty string for the sentence
  wordsArray.forEach((word) => (sentence += word + " ")); // Append each word with a space
  return sentence.trim(); // Remove the trailing space and return the sentence
}
console.log(`Q4 buildSentence [${myWords}]:`, buildSentence(myWords)); // Log the resulting sentence


//---------- QUESTION 5 ----------
// Create a variable called 'decimals' and assign it an array of decimal numbers.  Write a function called 'logPercentages' that takes an array of decimal numbers and uses forEach to log each one with the numbers formatted as percentages. That means:
//    Multiply by 100
//    Include the percent symbol (%) at the end of the string

// EXAMPLE CALL:
//   let decimals = [0.75, 0.91, 0.2, 1.34];
//   console.log("Q5 logPercentages:");
//   logPercentages(decimals);

// EXAMPLE OUTPUT:
// Q5 logPercentages:
//   75%
//   91%
//   20%
//   134%

// PUT YOUR CODE HERE
//---------- QUESTION 5 ----------
let decimals = [0.75, 0.91, 0.2, 1.34]; // Define an array of decimal numbers
function logPercentages(decimalArray) {
  decimalArray.forEach((num) =>
    console.log(`${(num * 100).toFixed(0)}%`) // Multiply by 100, round to nearest integer, add %
  );
}
console.log("Q5 logPercentages:"); // Log the question heading
logPercentages(decimals); // Call the function with the decimal array


// ----- Practice JS Array Methods - map -----
// ---------- QUESTION 6 ----------
// Let's practice using the map array method.  Create a variable called 'startingNums' and assign it an array of numbers.  Then write a function called 'addThreeToAll' that uses map to add 3 to each number in an array of numbers.

// EXAMPLE CALL:
//   let startingNums = [4, 41, 832, 72, 89];
//   console.log (`Q6 addThreeToAll [${startingNums}]: `, addThreeToAll(startingNums));

// EXAMPLE OUTPUT:
//   Q6 addThreeToAll [4,41,832,72,89]:  [ 7, 44, 835, 75, 92 ]

// PUT YOUR CODE HERE
//---------- QUESTION 6 ----------
let startingNums = [4, 41, 832, 72, 89]; // Create an array of numbers
function addThreeToAll(numsArray) {
  return numsArray.map((num) => num + 3); // Use map to add 3 to each number
}
console.log(`Q6 addThreeToAll [${startingNums}]:`, addThreeToAll(startingNums)); // Log the result


// ---------- QUESTION 7 ----------
// Create a variable called 'baseNums' and assign it an array of numbers.  Write a function called 'squareAll' that takes in an array of numbers, and uses map to return an array containing the squares of each of the numbers.  Remember, you can square a number by multiplying it by itself, or by using the exponent operator like so:
// let number = 4
// number * number // 16
// number ** 2 // 16
// Note that the caret operator ^ does NOT mean exponent in JavaScript

// EXAMPLE CALL:
//   let baseNums = [4, 41, 832, 72, 89];
//   console.log (`Q7 squareAll [${baseNums}]:`, squareAll(baseNums));

// EXAMPLE OUTPUT:
//   Q7 squareAll [4,41,832,72,89]: [ 16, 1681, 692224, 5184, 7921 ]

// PUT YOUR CODE HERE

//---------- QUESTION 7 ----------
let baseNums = [4, 41, 832, 72, 89]; // Define an array of numbers
function squareAll(numsArray) {
  return numsArray.map((num) => num ** 2); // Use map to square each number
}
console.log(`Q7 squareAll [${baseNums}]:`, squareAll(baseNums)); // Log the result


// ---------- QUESTION 8 ----------
// Write a function called 'allGreetings' that takes an array of names (strings) by using your 'names' variable from question 1. Return an array of greetings (strings). The greetings should each be "Hello, [name], nice to meet you!".  You might find it helpful to use template strings.

// EXAMPLE CALL: (using the names array from question 1)
//   console.log (`Q8 allGreetings [${names}]:`, allGreetings(names));

// EXAMPLE OUTPUT:
// Q8 allGreetings [Juan Marcos,Aleksandra Ivanov,Zhang Wei,Bernice King]: [
//  'Hello, Juan Marcos, nice to meet you!',
//  'Hello, Aleksandra Ivanov, nice to meet you!',
//  'Hello, Zhang Wei, nice to meet you!',
//  'Hello, Bernice King, nice to meet you!'
// ]

// PUT YOUR CODE HERE
//---------- QUESTION 8 ----------
function allGreetings(namesArray) {
  return namesArray.map((name) => `Hello, ${name}, nice to meet you!`); // Use map to create greeting strings
}
console.log(`Q8 allGreetings [${names}]:`, allGreetings(names)); // Log the result


// ---------- QUESTION 9 ----------
// Create a variable called 'users' and assign it an array of objects.  See example on line 153 below.  Write a function called 'getUsernames' that takes in an array of user objects and uses map to return an array of just the usernames.

// EXAMPLE CALL:
//   let users = [
//   {
//     username: "juan.marcos",
//     isAdmin: false,
//   },
//   {
//     username: "aleksandra.ivanov",
//     isAdmin: false,
//   },
//   {
//     username: "zhang.wei",
//     isAdmin: false,
//   },
//   {
//     username: "bernice.king",
//     isAdmin: true,
//   }
//   ];
//
//  console.log (`Q9 getUsernames:`, getUsernames(users));

// EXAMPLE OUTPUT:
//   Q9 getUsernames: [ 'juan.marcos', 'aleksandra.ivanov', 'zhang.wei', 'bernice.king' ]

// PUT YOUR CODE HERE
//---------- QUESTION 9 ----------
let users = [
  { username: "juan.marcos", isAdmin: false }, // Define user objects with username and isAdmin properties
  { username: "aleksandra.ivanov", isAdmin: false },
  { username: "zhang.wei", isAdmin: false },
  { username: "bernice.king", isAdmin: true },
];
function getUsernames(usersArray) {
  return usersArray.map((user) => user.username); // Use map to extract usernames
}
console.log(`Q9 getUsernames:`, getUsernames(users)); // Log the usernames




// ---------- QUESTION 10 ----------
// Write a function called 'pluck' that takes in an array of objects and a string representing a key as parameters, and uses the map method to return an array of the values at that key for each of the objects.  For example, if we used the users array from the last exercise, we could do pluck(users, 'username') to get the same results as the last question.  If any of the objects does not have a value at that key, the array should have undefined in that slot.  Hint: Using the square bracket notation, you can access a property of an object using a variable.

// EXAMPLE CALL: (using the users array from Q9)
//   console.log (`Q10 pluck "isAdmin":`, pluck(users, "isAdmin"));

// EXAMPLE OUTPUT:
//   Q10 pluck "isAdmin": [ false, false, false, true ]

// Try testing with username too!

// PUT YOUR CODE HERE
//---------- QUESTION 10 ----------
function pluck(objectsArray, key) {
  return objectsArray.map((obj) => obj[key]); // Use map to extract the value at the given key
}
console.log(`Q10 pluck "isAdmin":`, pluck(users, "isAdmin")); // Test pluck with the key "isAdmin"
console.log(`Q10 pluck "username":`, pluck(users, "username")); // Test pluck with the key "username"

// ----- Practice JS methods - filter -----
// ---------- QUESTION 11 ----------
// Write a function called 'evenNumbers' that takes an array as an argument and uses the filter method.  Return only the even numbers from the array of numbers.  Remember - you can find out if a number is even by using the % operator (modulus operator) like this:
//  number % 2 === 0   (gives a true boolean result, for even numbers)

// EXAMPLE CALL:
//   let numberArray = [4, 41, 832, 72, 89, 120, 431, 505, 70];
//   console.log (`Q11 evenNumbers [${numberArray}]:`, evenNumbers(numberArray));

// EXAMPLE OUTPUT:
//   Q11 evenNumbers [4,41,832,72,89,120,431,505,70]: [ 4, 832, 72, 120, 70 ]
//
// If there are no even numbers in the array you make and use, return an empty array.

// PUT YOUR CODE HERE
//---------- QUESTION 11 ----------
let numberArray = [4, 41, 832, 72, 89, 120, 431, 505, 70]; // Define an array of numbers
function evenNumbers(numbersArray) {
  return numbersArray.filter((num) => num % 2 === 0); // Use filter to get even numbers
}
console.log(`Q11 evenNumbers [${numberArray}]:`, evenNumbers(numberArray)); // Log the even numbers


// ---------- QUESTION 12 ----------
// Write a function called 'greaterThan100' that takes in an array of numbers and uses the filter method.  Return any items in the array that are greater than 100.

// EXAMPLE CALL:
//   let numArray = [4,41,832,72,89,120,431,505,70];
//   console.log (`Q12 greaterThan100 [${numArray}]:`, greaterThan100(numArray));

// EXAMPLE OUTPUT:
//   Q12 greaterThan100 [4,41,832,72,89,120,431,505,70]: [ 832, 120, 431, 505 ]
//
// If there are no numbers greater than 100, return an empty array.

// PUT YOUR CODE HERE
//---------- QUESTION 12 ----------
let numArray = [4, 41, 832, 72, 89, 120, 431, 505, 70]; // Define an array of numbers
function greaterThan100(numbersArray) {
  return numbersArray.filter((num) => num > 100); // Use filter to find numbers greater than 100
}
console.log(`Q12 greaterThan100 [${numArray}]:`, greaterThan100(numArray)); // Log the result


// ---------- QUESTION 13 ----------
// Write a function called 'nonAdminUsers' that takes in an array of user objects.  The objects should have a username and isAdmin property each like they do in Question 9.  The function should use the filter method to return the users who are not admins.

// EXAMPLE CALL: (using users array from Q9)
//   console.log (`Q13 nonAdminUsers:`, nonAdminUsers(users));

// EXAMPLE OUTPUT:
//   Q13 nonAdminUsers: [
//     { username: 'juan.marcos', isAdmin: false },
//     { username: 'aleksandra.ivanov', isAdmin: false },
//     { username: 'zhang.wei', isAdmin: false }
//   ]

// PUT YOUR CODE HERE
//---------- QUESTION 13 ----------
function nonAdminUsers(usersArray) {
  return usersArray.filter((user) => !user.isAdmin); // Use filter to find non-admin users
}
console.log(`Q13 nonAdminUsers:`, nonAdminUsers(users)); // Log the non-admin users

// ---------- QUESTION 14 ----------
// Write a function called 'countAdminUsers' that uses filter and the length method on the result from filter.  The function should return the number of users that have 'isAdmin: true' as part of their object.
// EXAMPLE CALL: (using users array from Q9)
//   console.log (`Q14 countAdminUsers:`, countAdminUsers(users));

// EXAMPLE OUTPUT:
//   Q14 countAdminUsers: 1

// It should only count Bernice King since she is the only admin in that example.

// PUT YOUR CODE HERE
//---------- QUESTION 14 ----------
function countAdminUsers(usersArray) {
  return usersArray.filter((user) => user.isAdmin).length; // Use filter to count admins
}
console.log(`Q14 countAdminUsers:`, countAdminUsers(users)); // Log the admin count


// ---------- QUESTION 15 ----------
// Write a function called 'shorterThanX' that takes two arguments: an array of strings and an integer.  Use the filter method to return all the strings in the array whose length is shorter than the integer provided as an argument.  If there's no strings in the array that are shorter than the number, return an empty array.

// EXAMPLE ARRAY:
// let strings = [
//   "Four score and seven years ago",
//   "our forefathers brought forth on this continent a new nation",
//   "conceived in liberty",
//   "and dedicated to the proposition that all men are created equal",
//   "Now we are engaged in a great civil war",
//   "testing whether that nation",
//   "or any so conceived and so dedicated",
//   "can long endure.",
// ];

// EXAMPLE CALL1:
//   console.log (`Q15 shorterThanX 20:`, shorterThanX(strings, 20));
// EXAMPLE OUTPUT1:
//   Q15 shorterThanX 20: [ 'can long endure.' ]

// EXAMPLE CALL2:
//   console.log (`Q15 shorterThanX 30:`, shorterThanX(strings, 30));
// EXAMPLE OUTPUT2:
//   Q15 shorterThanX 30: [
//    'conceived in liberty',
//    'testing whether that nation',
//    'can long endure.'
//  ]

// PUT YOUR CODE HERE
//---------- QUESTION 15 ----------
let strings = [
  "Four score and seven years ago", // Define an array of strings
  "our forefathers brought forth on this continent a new nation",
  "conceived in liberty",
  "and dedicated to the proposition that all men are created equal",
  "Now we are engaged in a great civil war",
  "testing whether that nation",
  "or any so conceived and so dedicated",
  "can long endure.",
];
function shorterThanX(stringsArray, maxLength) {
  return stringsArray.filter((str) => str.length < maxLength); // Use filter to find strings shorter than maxLength
}
console.log(`Q15 shorterThanX 20:`, shorterThanX(strings, 20)); // Log strings shorter than 20
console.log(`Q15 shorterThanX 30:`, shorterThanX(strings, 30)); // Log strings shorter than 30


// ---------- QUESTION 16 ----------
// Write a function called 'onlyStrings' that takes an array that has different types of elements (numbers, booleans, strings, etc.) and uses the filter method to return an array of only the strings.

// EXAMPLE CALL:
//   let manyTypes = [4, "4", "four score", 80, {age: 80}, ["nations"], {type: "free"}, "states"];
//   console.log (`Q16 onlyStrings [${manyTypes}]:`, onlyStrings(manyTypes));

// EXAMPLE OUTPUT:
//   Q16 onlyStrings [4,4,four score,80,[object Object],nations,[object Object],states]: [ '4', 'four score', 'states' ]

// PUT YOUR CODE HERE
//---------- QUESTION 16 ----------
let manyTypes = [4, "4", "four score", 80, { age: 80 }, ["nations"], { type: "free" }, "states"]; // Define a mixed array
function onlyStrings(mixedArray) {
  return mixedArray.filter((item) => typeof item === "string"); // Use filter to extract strings
}
console.log(`Q16 onlyStrings [${manyTypes}]:`, onlyStrings(manyTypes)); // Log the strings


// ----- Practice JS methods - find -----
// ---------- QUESTION 17 ----------
// Write a function called 'firstOdd' that takes an array of numbers as an argument.  The function should use the find method to find the first odd number in an array.  Remember - you can find out if a number is odd using the % operator like so:
// number % 2 === 1  (gives a true boolean result, for odd numbers)
// If there are no odd numbers, return undefined.

// EXAMPLE CALL:
//   let array = [4,41,832,72,89,120,431,505,70]
//   console.log (`Q17 firstOdd [${array}]:`, firstOdd(array));

// EXAMPLE OUTPUT:
//   Q17 firstOdd [4,41,832,72,89,120,431,505,70]: 41

// PUT YOUR CODE HERE
//---------- QUESTION 17 ----------
function firstOdd(numbersArray) {
  return numbersArray.find((num) => num % 2 !== 0); // Use find to get the first odd number
}
console.log(`Q17 firstOdd [${numberArray}]:`, firstOdd(numberArray)); // Log the first odd number



// ---------- QUESTION 18 ----------
// Write a function called 'getAdministrator' that takes an array of objects as an argument (like the one used in question 9).  The function should use the find method to return the first object that has 'isAdmin: true' from the array of user objects.

// EXAMPLE CALL: (using users array from Q9)
//   console.log (`Q18 getAdministrator:`, getAdministrator(users));

// EXAMPLE OUTPUT:
//   Q18 getAdministrator: { username: 'bernice.king', isAdmin: true }

// PUT YOUR CODE HERE
//---------- QUESTION 18 ----------
function getAdministrator(usersArray) {
  return usersArray.find((user) => user.isAdmin); // Use find to get the first admin
}
console.log(`Q18 getAdministrator:`, getAdministrator(users)); // Log the first admin user

// ---------- QUESTION 19 ----------
// Write a function called 'divisibleByTen' that takes an array of numbers as an argument.  The function should use the find method to return the first number that is a multiple of 10.  If there are no numbers divisible by 10, return undefined.

// EXAMPLE CALL:
//   let divArray = [4,41,832,72,89,120,431,505,70]
//   console.log (`Q19 divisibleByTen [${divArray}]:`, divisibleByTen(divArray));

// EXAMPLE OUTPUT:
//   Q19 divisibleByTen [4,41,832,72,89,120,431,505,70]: 120

// PUT YOUR CODE HERE
//---------- QUESTION 19 ----------
let divArray = [4, 41, 832, 72, 89, 120, 431, 505, 70]; // Define an array of numbers
function divisibleByTen(numbersArray) {
  return numbersArray.find((num) => num % 10 === 0); // Use find to get the first number divisible by 10
}
console.log(`Q19 divisibleByTen [${divArray}]:`, divisibleByTen(divArray)); // Log the result


// ---------- QUESTION 20 ----------
// Write a function called 'divisibleByX' that takes two arguments: an array and an integer.  The function should use the find method to return the first number in the array that's divisible by the integer that was passed as an argument.  If there are no values that are divisible by the second argument, return undefined.

// EXAMPLE ARRAY:
//    let numbers = [4,41,832,72,89,120,431,70];

// EXAMPLE CALL 1:
//    Qconsole.log (`Q20 divisibleByX ([${divArray}], 10):`, divisibleByX(numbers, 10));
// EXAMPLE OUTPUT 1: (if using the example array above)
//    Q20 divisibleByX ([4,41,832,72,89,120,431,505,70], 10): 120

// EXAMPLE CALL 2:
//    console.log (`Q20 divisibleByX ([${divArray}]. 3):`, divisibleByX(numbers, 3));
// EXAMPLE OUTPUT 2: (if using the example array above)
//    Q20 divisibleByX ([4,41,832,72,89,120,431,505,70]. 3): 72

// EXAMPLE CALL 3:
//    console.log (`Q20 divisibleByX ([${divArray}], 2):`, divisibleByX(numbers, 2));
// EXAMPLE OUTPUT 3: (if using the example array above)
//    Q20 divisibleByX ([4,41,832,72,89,120,431,505,70], 2): 4

// PUT YOUR CODE HERE
//---------- QUESTION 20 ----------
function divisibleByX(numbersArray, x) {
  return numbersArray.find((num) => num % x === 0); // Use find to get the first number divisible by x
}
console.log(`Q20 divisibleByX ([${divArray}], 10):`, divisibleByX(divArray, 10)); // Test with 10
console.log(`Q20 divisibleByX ([${divArray}], 3):`, divisibleByX(divArray, 3)); // Test with 3
console.log(`Q20 divisibleByX ([${divArray}], 2):`, divisibleByX(divArray, 2)); // Test with 2

//---------- QUESTION 21 (Stretch Goal) ----------
function startsWithLetter(stringsArray, letter) {
  if (typeof letter !== "string" || letter.length !== 1) {
    throw new Error("Letter must be a string of length 1"); // Validate the letter argument
  }
  return stringsArray.find((str) => str.startsWith(letter)); // Use find to get the first matching string
}
console.log(`Q21 startsWithLetter T:`, startsWithLetter(strings, "T")); // Test with "T"
console.log(`Q21 startsWithLetter I:`, startsWithLetter(strings, "I")); // Test with "I"
console.log(`Q21 startsWithLetter i:`, startsWithLetter(strings, "i")); // Test with "i"

// ---------- QUESTION 21 ----------
// Write a function called 'startsWithLetter' that takes two arguments: an array of strings and a letter.  The function should use the find method to return the first string in the array that starts with the letter provided as the argument.  If there's no string in the array that starts with that letter, return undefined. The function should leave lowercase and uppercase letters alone.
// STRETCH GOAL: Throw an error "Letter must be a string of length 1" if the second argument is not a string, or if its length is more than 1.

// EXAMPLE ARRAY:
// let jokeStrings =
//   ["Do you want to hear a joke?",
//    "It's about a three-legged dog",
//    "The dog walks into a bar",
//    "The dog says, ",
//    "\"I'm looking for the man who shot my paw\"",
//    "Get it?"]

// EXAMPLE CALL 1:
//    console.log (`Q21 startsWithLetter T:`, startsWithLetter(jokeStrings, "T"));
// EXAMPLE OUTPUT 1: (if using the example array above)
//    Q21 startsWithLetter T: The dog walks into a bar

// EXAMPLE CALL 2:
//    console.log (`Q21 startsWithLetter I:`, startsWithLetter(jokeStrings, "I"));
// EXAMPLE OUTPUT 2: (if using the example array above)
//    Q21 startsWithLetter I: It's about a three-legged dog

// EXAMPLE CALL 3:
//    console.log (`Q21 startsWithLetter i:`, startsWithLetter(jokeStrings, "i"));
// EXAMPLE OUTPUT 3: (if using the example array above)
//    Q21 startsWithLetter i: undefined

// STRETCH GOAL EXAMPLE CALL:
//    console.log (`Q21 startsWithLetter dog:`, startsWithLetter(jokeStrings, "dog"));
// STRETCH GOAL EXAMPLE OUTPUT:
//    Q21 startsWithLetter dog: Error: Letter must be a string of length 1

// PUT YOUR CODE HERE
//---------- QUESTION 21 ----------
function startsWithLetter(stringsArray, letter) {
  // Check if the letter argument is valid (must be a single character string)
  if (typeof letter !== "string" || letter.length !== 1) {
    throw new Error("Letter must be a string of length 1"); // Throw error for invalid input
  }
  // Use the find method to locate the first string starting with the specified letter
  return stringsArray.find((str) => str.startsWith(letter));
}

// Example array of strings for testing
let jokeStrings = [
  "Do you want to hear a joke?",
  "It's about a three-legged dog",
  "The dog walks into a bar",
  "The dog says, ",
  "\"I'm looking for the man who shot my paw\"",
  "Get it?",
];

// Testing the function with various letters
console.log(`Q21 startsWithLetter T:`, startsWithLetter(jokeStrings, "T")); // Test with "T"
console.log(`Q21 startsWithLetter I:`, startsWithLetter(jokeStrings, "I")); // Test with "I"
console.log(`Q21 startsWithLetter i:`, startsWithLetter(jokeStrings, "i")); // Test with "i"
// Uncomment below for a stretch goal test that throws an error
// console.log(`Q21 startsWithLetter dog:`, startsWithLetter(jokeStrings, "dog")); // Test with invalid "dog"


//--------------------------------------------
// STRETCH GOAL ON ALGORITHMS BELOW
//--------------------------------------------

// Algorithms
// This is the coding assigment for the sixth week of the Intro to Programming course from Code the Dream. The concepts touched on in this assignment include:
//  - What is an algortihm?
//  - Properties of a good algorithm
//  - Ideas on how to solve a problem using an algorithm
//  - Practice a few algorithms in JavaScript

// In this assignment you will write your own code. Your instructions are listed as "comments", meaning the instructions are grayed out and start with '//' at the beginning of the line of code. Put your answers immediately below the instructions for each question. As mentioned in the README.md file, you'll need to use console logs for all the questions to check your code output. You can output the return value of a function in a similar way to how you output variable values last week.  To use a function in a console.log you invoke/call the function as part of the console log like this:

//  console.log("Q#: ", functionName(anyInput))

// As always, click the green Run button at the top of the screen to see the output of your called functions in the Console tab to the right of this screen. Check to make sure that the output you get in your Console is the expected output.  To ensure you get comfortable with and learn the syntax well, be sure your AI code completion options are off!  You can find instructions on how to do this in your README.md file under "Instructions".

// NOTE: These problems (aka algortihm questions) have not necessarily been covered in depth in the lessons so far, so please use your resources (mentors, classmates, etc) to help you. You can also use Google to help you.

// FOR ADDITIONAL PRACTICE WE RECOMMEND THE FOLLOWING IN ADDITION TO THIS ASSIGNMENT:
// 1. Navigate to freecodecamp.org and create a free account
// 2. In the Menu, select Curriculum and select JavaScript Algorithms and Data Structures Certifications
// 3. Scroll down to the Basic Algorithms Scripting section
// 4. Work on the first 4 (four) problems.
//     a. Convert Celsius to Fahrenheit
//     b. Reverse a String
//     c. Factorialzie a Number
//     d. Find the Longest Word in a String

// ---------- QUESTION 1 ----------
// Pairs Maker
// Write a function called pairsMaker(array) that takes in an array as an argument. The function should return a 2-Dimensional array (an array of arrays) where the subarrays represent unique pairs of elements from the input array.  The content of the array is limited to integers.  The contents of the input array do not need to be unique, but repeated elements do not create new unique pairs.  Order does matter for unique pairs (e.g. [1, 2] is not the same as [2, 1]). The result should include self pairs (e.g. [1, 1]).

// EXAMPLE CALL:
//   let testArray = [1, 2, 3, 5];
//   console.log (`Q1: input: [${numbersArray}], output:`, pairsMaker(numbersArray));

// EXAMPLE OUTPUT:
//   Q1 pairsMaker: input: [1, 2, 3, 5], output: [
//     [ 1, 1 ], [ 1, 2 ],
//     [ 1, 3 ], [ 1, 5 ],
//     [ 2, 1 ], [ 2, 2 ],
//     [ 2, 3 ], [ 2, 5 ],
//     [ 3, 1 ], [ 3, 2 ],
//     [ 3, 3 ], [ 3, 5 ],
//     [ 5, 1 ], [ 5, 2 ],
//     [ 5, 3 ], [ 5, 5 ]
//   ]

// EXAMPLE CALL 2:
//   testArray = [1, 2, 1, 1, 3, 5, 2];  // Note the 3 1's and 2, 2's)
//   console.log (`Q1: input: [${numbersArray}], output:`, pairsMaker(numbersArray));

// EXAMPLE OUTPUT 2:
//   The output should be the same.
//   Q1 pairsMaker: input: [1,2,1,3,5], output: [
//     [ 1, 1 ], [ 1, 2 ],
//     [ 1, 3 ], [ 1, 5 ],
//     [ 2, 1 ], [ 2, 2 ],
//     [ 2, 3 ], [ 2, 5 ],
//     [ 3, 1 ], [ 3, 2 ],
//     [ 3, 3 ], [ 3, 5 ],
//     [ 5, 1 ], [ 5, 2 ],
//     [ 5, 3 ], [ 5, 5 ]
//   ]

// PUT YOUR CODE HERE
// ---------- QUESTION 1 ----------
function pairsMaker(array) {
  // Initialize an empty array to hold the pairs
  let pairs = [];
  // Nested loop to generate all possible pairs
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      pairs.push([array[i], array[j]]); // Push each pair to the pairs array
    }
  }
  return pairs; // Return the resulting array of pairs
}

// Test cases for pairsMaker
let testArray = [1, 2, 3, 5]; // Example array
console.log(`Q1: input: [${testArray}], output:`, pairsMaker(testArray)); // Log result

testArray = [1, 2, 1, 1, 3, 5, 2]; // Example array with duplicates
console.log(`Q1: input: [${testArray}], output:`, pairsMaker(testArray)); // Log result

// ---------- QUESTION 2 ----------
// Two Sum
// Write a function called twoSum(arr, target) that accepts an array and a // target number as arguments. The function should return a boolean indicating if any two numbers of the array add up to the target value. You can assume that input array contains only unique numbers.

// EXAMPLE CALL:
//  let q2TestArray = [1, 2, 3, 4, 5];
//  console.log (`Q2 twoSum: input: ([${q2TestArray}], 9), output:`, twoSum(q2TestArray, 9));

// EXAMPLE OUTPUT:
//  Q2 twoSum: input: ([1,2,3,4,5], 9), output: true

// PUT YOUR CODE HERE
// ---------- QUESTION 2 ----------
function twoSum(arr, target) {
  // Use a loop to iterate over the array
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true; // Return true if any two numbers sum to the target
      }
    }
  }
  return false; // Return false if no pairs match the target
}

// Test cases for twoSum
let q2TestArray = [1, 2, 3, 4, 5];
console.log(`Q2 twoSum: input: ([${q2TestArray}], 9), output:`, twoSum(q2TestArray, 9)); // Test for true
console.log(`Q2 twoSum: input: ([${q2TestArray}], 10), output:`, twoSum(q2TestArray, 10)); // Test for false

// ---------- QUESTION 3 ----------
// Pair Product
// Write a function called pairProduct(arr, product) that accepts an array of numbers and a product (the result when two numbers were multiplied together) as arguments. The function should return a boolean indicating whether or not a pair of distinct elements in the array result in the product when multiplied together. You may assume that the input array contains unique elements.

// EXAMPLE CALL:
//  let q3TestArray = [4, 6, 3, 4, 5];
//  console.log (`Q3 pairProduct: input: ([${q3TestArray}], 18), output:`, pairProduct(q3TestArray, 18));

// EXAMPLE OUTPUT:
//  Q3 pairProduct: input: ([4,6,3,4,5], 18), output: true

// Write an additional test that results in a false return from pairProduct.

// PUT YOUR CODE HERE
// ---------- QUESTION 3 ----------
function pairProduct(arr, product) {
  // Iterate over all possible pairs in the array
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] * arr[j] === product) {
        return true; // Return true if any pair matches the product
      }
    }
  }
  return false; // Return false if no pairs match the product
}

// Test cases for pairProduct
let q3TestArray = [4, 6, 3, 4, 5];
console.log(`Q3 pairProduct: input: ([${q3TestArray}], 18), output:`, pairProduct(q3TestArray, 18)); // Test for true
console.log(`Q3 pairProduct: input: ([${q3TestArray}], 50), output:`, pairProduct(q3TestArray, 50)); // Test for false

//---------- QUESTION 4 ----------
// Strange Sums
// Write a function called strangeSums(arr) that accepts an array of numbers as an argument. The method should return a count of the number of distinct pairs of elements that have a sum of zero. You may assume that the input array contains unique elements.

// EXAMPLE CALL:
//  let q4TestArray = [2, -3, 3, 4, -2];
//  console.log (`Q4: input: [${q4TestArray}], output:`, strangeSums(q4TestArray));

// EXAMPLE OUTPUT:
//  Q4: input: [2,-3,3,4,-2], output: 2

// PUT YOUR CODE HERE

// ---------- QUESTION 4 ----------
function strangeSums(arr) {
  // Initialize a counter for the number of pairs
  let count = 0;
  // Iterate over all possible pairs in the array
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        count++; // Increment the counter if a pair sums to zero
      }
    }
  }
  return count; // Return the total count of such pairs
}

// Test cases for strangeSums
let q4TestArray = [2, -3, 3, 4, -2];
console.log(`Q4: input: [${q4TestArray}], output:`, strangeSums(q4TestArray)); // Log result


// Mindset Assignment: Curiosity to Learn

// 1. In your own words, what does it mean to be curious about something?
// To be curious about something means having a genuine desire to explore, understand, and question.
// It’s about wanting to go beyond surface-level knowledge and diving deeper into how and why things work.
// Curiosity drives us to seek answers, experiment, and remain open to discovering new perspectives, 
// whether it’s about solving a problem or learning something entirely new.

// 2. What’s one thing that you were curious to learn more about recently (this doesn’t need to be coding-related)? 
// How did you learn more about it?
// Recently, I became curious about sustainable living practices and how small daily habits could reduce environmental impact.
// To learn more, I started by researching online, reading articles, and watching documentaries about eco-friendly 
// alternatives and their benefits. I also joined local community discussions on sustainability and experimented by 
// incorporating practices like composting and using reusable products into my routine. 
// By actively trying these practices, I gained a deeper understanding of their impact and feasibility.

// 3. What’s one best practice you’ve learned in your first few weeks at CTD that you don’t know “the why” behind? 
// How can you find out “the why”?
// One best practice I’ve learned is using higher-order functions like `map`, `filter`, and `reduce` instead of traditional loops in JavaScript.
// While I understand how they work and their ability to make code cleaner and more expressive, I’m curious about the deeper “why”
// —such as their performance implications and why they are considered more "functional programming"-oriented. 
// To find out, I can:
// - Research articles and documentation about JavaScript engine optimization and functional programming principles.
// - Experiment by comparing the performance of higher-order functions versus traditional loops in various scenarios.
// - Discuss with mentors or peers to gain insights into their experiences and reasoning behind adopting these practices.

