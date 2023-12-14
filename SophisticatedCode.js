/* 
   Filename: SophisticatedCode.js
   Content: Complex JavaScript code showcasing various concepts and techniques
*/

// Importing external JavaScript libraries
const _ = require('lodash');
const moment = require('moment');

// Declaring global variables/constants
const MAX_ATTEMPTS = 100;
let userLoggedIn = false;

// Defining a class for creating User objects
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  greet() {
    console.log(`Hello ${this.name}!`);
  }
}

// Creating an instance of the User class
const user = new User('John', 25, 'john@example.com');
user.greet();

// Performing mathematical operations using lodash library
const numbers = [1, 2, 3, 4, 5];
const sum = _.sum(numbers);
console.log(`Sum of numbers: ${sum}`);

// Demonstrating async/await with Promises
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function asyncFunction() {
  console.log('Async function started');
  await delay(2000);
  console.log('Async function completed');
}

asyncFunction();

// Implementing a complex algorithm
function findLargestPrimeNumber(limit) {
  const primes = [];
  let num = 2;

  while (primes.length < limit) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(num);
    }

    num++;
  }

  return primes[primes.length - 1];
}

const largestPrime = findLargestPrimeNumber(10);
console.log(`Largest prime number: ${largestPrime}`);

// Handling errors with try-catch block
try {
  // Accessing a non-existing object property to intentionally throw an error
  console.log(nonExistingProperty);
} catch (error) {
  console.error('An error occurred:', error.message);
}

// Performing date/time operations using moment library
const today = moment();
console.log(`Today's date: ${today.format('YYYY-MM-DD')}`);

// Complex conditional statements and loops
let attempts = 0;

while (attempts < MAX_ATTEMPTS) {
  if (attempts % 2 === 0) {
    console.log(`Attempt ${attempts} is even`);
  } else {
    console.log(`Attempt ${attempts} is odd`);
  }

  attempts++;
}

// Demonstrating higher-order functions
function multiplyBy(factor) {
  return (num) => num * factor;
}

const multiplyByTwo = multiplyBy(2);
console.log(`Multiplication result: ${multiplyByTwo(5)}`);

// Event handling with anonymous function
document.getElementById('button').addEventListener('click', function () {
  console.log('Button clicked');
});

// Complex data manipulation using arrays
const fruits = ['apple', 'banana', 'grape', 'orange'];
const uppercaseFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log('Uppercase fruits:', uppercaseFruits);

// Exporting a module for use in other files
module.exports = {
  userLoggedIn,
};

// ... More code (at least 200 lines) ...
// Include advanced concepts like closures, currying, recursion, etc.