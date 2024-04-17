"use strict";
//1. Hello Variable
let greeting = "Hello, World!";
console.log(greeting);
// 2. Basic Math
let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
console.log("Sum=", sum);
console.log("Difference=", difference);
console.log("Product=", product);
console.log("Quotient=", quotient);
// 3. Swapping Values
let a = 1, b = 2;
console.log("Before swapping:");
console.log("a =", a);
console.log("b =", b);
[a, b] = [b, a];
console.log("\nAfter swapping:");
console.log("a =", a);
console.log("b =", b);
// 4. Type Annotation (TypeScript)
let message;
// Attempting to assign a number to a string variable
//message = 007; // This will raise a TypeScript error
// 5. Modulus Operator
let num3 = 10;
let num4 = 3;
// Finding the remainder using the modulus operator
let remainder = num3 % num4;
console.log(`The remainder of ${num3} divided by ${num4} is ${remainder}`);
// 6. Increment Challenge
let counter = 0;
// Using the addition operator (+=)
counter += 1;
console.log("After incrementing using the addition operator:", counter);
// Reset counter for the second method
counter = 0;
// Using the increment operator (++)
counter++;
console.log("After incrementing using the increment operator:", counter);
// 7. Logical Gates
let A = true;
let B = false;
let C = true;
// AND gate
let ANDgate = A && B;
console.log("AND gate result:", ANDgate);
// OR gate
let ORgate = A || B;
console.log("OR gate result:", ORgate);
// NOT gate (using variable C)
let NOTgate = !C;
console.log("NOT gate result:", NOTgate);
// 8. Compound Assignment
let num = 10;
// Using compound assignment operators
num += 5; // Equivalent to: num = num + 5;
console.log("After +=:", num);
num -= 3;
console.log("After -=:", num);
num *= 2;
console.log("After *=:", num);
num /= 4;
console.log("After /=:", num);
// 9. Even or Odd
let Num = 7;
if (Num % 2 === 0) {
    console.log(`${Num} is even.`);
}
else {
    console.log(`${Num} is odd.`);
}
// 10. Voting Eligibility
let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote.");
}
else {
    console.log("You are not eligible to vote yet.");
}
// 11. Grading System
let score = 93;
let grade;
if (score >= 90) {
    grade = 'A';
}
else if (score >= 80) {
    grade = 'B';
}
else if (score >= 70) {
    grade = 'C';
}
else if (score >= 60) {
    grade = 'D';
}
else {
    grade = 'F';
}
console.log(`According to score ${score}, your grade is ${grade}.`);
// 12. Max of Three
let x = 10;
let y = 25;
let z = 15;
let max;
if (x >= y && x >= z) {
    max = x;
}
else if (y >= x && y >= z) {
    max = y;
}
else {
    max = z;
}
console.log(`The maximum of ${x}, ${y}, and ${z} is ${max}.`);
// 13. Leap Year Checker
let year = 2024;
let isLeapYear;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    isLeapYear = true;
}
else {
    isLeapYear = false;
}
if (isLeapYear) {
    console.log(`${year} is a leap year.`);
}
else {
    console.log(`${year} is not a leap year.`);
}
// 14. Fahrenheit to Celsius Converter
let fahrenheit = 32;
// Convert Fahrenheit to Celsius using the formula: (Fahrenheit - 32) * 5/9
let celsius = (fahrenheit - 32) * 5 / 9;
console.log(`${fahrenheit} degrees Fahrenheit is equal to ${celsius.toFixed(2)} degrees Celsius.`);
// 15. Positive, Negative, or Zero
let number = 42;
if (number > 0) {
    console.log("The number is positive.");
}
else if (number < 0) {
    console.log("The number is negative.");
}
else {
    console.log("The number is zero.");
}
// 16. Multiplication Table
let number1 = 7;
console.log(`Multiplication table for ${number1}:`);
console.log(`${number1} * 1 = ${number1 * 1}`);
console.log(`${number1} * 2 = ${number1 * 2}`);
console.log(`${number1} * 3 = ${number1 * 3}`);
console.log(`${number1} * 4 = ${number1 * 4}`);
console.log(`${number1} * 5 = ${number1 * 5}`);
console.log(`${number1} * 6 = ${number1 * 6}`);
console.log(`${number1} * 7 = ${number1 * 7}`);
console.log(`${number1} * 8 = ${number1 * 8}`);
console.log(`${number1} * 9 = ${number1 * 9}`);
console.log(`${number1} * 10 = ${number1 * 10}`);
