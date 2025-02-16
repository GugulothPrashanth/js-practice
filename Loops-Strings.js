// Loops and Strings

//For Loop

// for (let i = 1; i <= 1000; i++) {
//   console.log("prashanth");
// }

// calculate the sum of 1 to n

// let sum = 0;
// let n = 100;

// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// while loop

// let i = 1;
// while (i <= 20) {
//   console.log(i);
//   i++;
// }

//do - while loop

// i = 20;

// do {
//   console.log("hello");
//   i++;
// } while (i <= 10);

// i = 1;

// do {
//   console.log("hello");
//   i++;
// } while (i <= 10);

//for-of loop - strings and arrays

// let str = "Prashanth Guguloth";

// let size = 0;

// for (let i of str) {
//   console.log("i = ", i);
//   size++;
// }
// console.log(size);

// for-in loop

// let student = {
//   fullName: "Prashanth",
//   age: 23,
//   grade: 7.5,
//   isPass: true,
// };

// for (let key in student) {
//   console.log("key =", key, "value =", student[key]);
// }

/* Print all even numbers from 0 to 100 */
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

/* Print all odd numbers from 0 to 100 */
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

// let gameNum = 36;
// let userNum = prompt("Guess the game number: ");

// while (userNum != gameNum) {
//   userNum = prompt("you have entered wrong number. Guess again:");
// }

// console.log("congratulations, you have entered the right number");

// let userName = prompt("Please Enter Your FullName");

// let userFullName = "@" + userName + userName.length;

// console.log(userFullName);

/* Arrays */

// Print all the elements of an array

// let superHeros = [
//   "ironman",
//   "batman",
//   "superman",
//   "antman",
//   "thor",
//   "wanda",
//   "hulk",
//   "spiderman",
//   "shaktiman",
//   "black panther",
// ];

// for (let i = 0; i < superHeros.length; i++) {
//   console.log(superHeros[i]);
// }

// for (let i of superHeros) {
//   console.log(i);
//   i++;
// }

// let students = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for (let val of students) {
//   sum += val;
// }

// avg = sum / students.length;

// console.log(`avg marks of the class is ${avg}`);

// for a given array with prices of 5 items [250, 645, 300, 900, 50] all items have an offer of 10% OFF on them. change the array to store final price after applying offer.
// using for of() loop
/*

let items = [250, 645, 300, 900, 50];

let i = 0;

for (let val of items) {
  offer = val / 10;
  items[i] = items[i] - offer;
  console.log(`val after index ${i} = ${items[i]}`);
  i++;
}
*/

// using for() loop

// let items = [250, 645, 300, 900, 50];

// for (let i = 0; i < items.length; i++) {
//   let offer = items[i] / 10;
//   items[i] -= offer;
// }
// console.log(items);

// create an array to store companies => "Bloomberg","Microsoft", "uber", "Google", "IBM", "Netflix"

// Remove the first company from the array
// Remove Uber & Add Ola in its place
// Add Amazon at the end

// let companies = ["Bloomberg", "Microsoft", "uber", "Google", "IBM", "Netflix"];

// console.log(`before deleting the first company from ${companies}`);
// let deletedCompany = companies.shift();

// console.log("deletedCpmpany", deletedCompany);
// console.log(`after deleting the first company from ${companies}`);

// let addedCompany = companies.splice(2, 1, "ola");

// console.log(addedCompany);
// console.log(companies);

// companies.push("Amazon");

// console.log(companies);

//Functions

// Create a function using "function" keyword that takes a String as n argment & return the number of vowels in the string

// function checkVovals(str) {
//   let count = 0;
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// For a given array of numbers, print the square of the each value using the forEach loop.

// let numArray = [2, 5, 7, 8, 3];

// numArray.forEach((val) => {
//   console.log(val * val);
// });

let n = prompt("enter a number:");

let arr = [];

for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}

console.log(arr);

let sumArray = arr.reduce((prev, curr) => {
  return prev + curr;
});

console.log(sumArray);
