// Basic Math Operations
let a = 7;
let b = 3;

console.log("7 + 3 =", a + b);
console.log("7 - 3 =", a - b);
console.log("7 * 3 =", a * b);
console.log("7 / 3 =", a / b);

// Create a program that checks if a number is even or odd.

let num = 7;

if (num % 2 === 0) {
  console.log(num, "is even");
} else {
  console.log(num, "is odd");
}

// Swapping Two Variables
// Swap two variables without using a third variable.

let x = 10,
  y = 5;

console.log("Before Swap: x = ", x, "y = ", y);

x = x + y;
y = x - y;
x = x - y;

console.log("After Swap: x = ", x, "y = ", y);

// Intermediate Challenges
// Simple Calculator
// Create a calculator that takes two numbers and an operator (+, -, *, /) as input and returns the result.

let num1 = 10;
let num2 = 8;
let operator = "/";
let result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  result = num1 / num2;
} else {
  result = "invalid operator";
}

console.log("result", result);

// Grade Calculator
// Given a student's marks, determine their grade.

let marks = 87;
let grade;

if (marks >= 90 && marks <= 100) {
  grade = "A";
} else if (marks >= 80 && marks <= 89) {
  grade = "B";
} else if (marks >= 70 && marks <= 79) {
  grade = "C";
} else if (marks >= 60 && marks <= 69) {
  grade = "D";
} else {
  grade = "F";
}

console.log("According to your marks:", marks, "your Grade is", grade);

// FizzBuzz Problem
// Print numbers from 1 to 20.
// If a number is divisible by 3, print "Fizz".
// If a number is divisible by 5, print "Buzz".
// If divisible by both, print "FizzBuzz".

for (i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBizz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Leap Year Checker
// Check if a year is a leap year.
// A year is a leap year if it's divisible by 4, but not by 100, unless also divisible by 400.

let year = 2024;

if ((year % 4 === 0 && !year % 100 === 0) || year % 400 === 0) {
  console.log(year, "is a leap year");
} else {
  console.log(year, "is a not leap year");
}
