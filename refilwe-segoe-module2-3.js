// Challenge 1 — Variables, Types, and the typeof Trap (10 marks)

// PART A: Declaration of Variables and Main Data Types in JavaScript

// 1 A string holding your full name
let fullName = "Refilwe Segoe";

// 2 A number holding your age
let age = 35;

// 3 A boolean holding whether you enjoy JavaScript so far
let enjoyingJavaScript = true;

// 4 A number with decimals holding your favourite temperature in degrees Celsius
let favouriteTemperature = 14.8;

// 5 A variable holding NaN (create it using Number('not a number'))
let notANumber = Number('not a number');

// 6 A variable holding Infinity (using 1/0 or the Infinity keyword)
let infinity = Infinity;

// 7 A variable holding Number.MAX_SAFE_INTEGER
let maxSafeInteger = Number.MAX_SAFE_INTEGER;

// 8 A variable set explicitly to null
let nullValue = null;

// 9 A variable set explicitly to undefined
let undefinedValue = undefined;

// 10 A template literal that uses at least two of the above variables
let message = `Good day, my name is ${fullName} and I am ${age} years old. My favourite temperature is ${favouriteTemperature}°C.`;

// Part B: Using typeof to Check the Data Types of Your Variables with output predictions before execution

//Prediction:
// console.log(typeof null); // string
// console.log(typeof NaN); // number
// console.log(typeof undefined); // boolean
// console.log(typeof "42"); // number
// console.log(typeof (typeof 42)); // number
// console.log(typeof [1, 2, 3]); // number
// console.log(typeof function() {}); // number

console.log(typeof null); // object
console.log(typeof NaN); // number
console.log(typeof undefined); // undefined
console.log(typeof "42"); // string
console.log(typeof (typeof 42)); // string
console.log(typeof [1, 2, 3]); // object
console.log(typeof function() {}); // function

// Question: Why does typeof null return 'object' and typeof NaN return 'number'? Give the historical reason for one and the technical reason for the other.
// Answer: typeof null is a well-known bug in JavaScript and has historical reasons. The typeof null operator returns 'object' due to a historical bug in the original 1990s implementation of JavaScript.
// NaN is a JavaScript number that is not a legal number. Even though NaN stands for "Not-a-Number," it’s technically still categorized as a number — it’s just a broken, nonsensical one.
// It’s like the system wants to keep everything neat and simple, so it lumps NaN in with all the other numbers because it started out in the number category.

// Challenge 2 — Type Conversion Workshop

// Part A — Explicit conversion of data types

// 1.1 Converting "123" using all 5 methods (Number, parseInt, parseFloat,
// Boolean, String), logging the result and its type to the console
let stringToNumber = Number("123");
console.log(stringToNumber); // 123
console.log(typeof stringToNumber); // number

let stringToInteger = parseInt("123");
console.log(stringToInteger); // 123
console.log(typeof stringToInteger); // number

let stringToFloat = parseFloat("123");
console.log(stringToFloat); // 123
console.log(typeof stringToFloat); // number

let stringToBoolean = Boolean("123");
console.log(stringToBoolean); // true
console.log(typeof stringToBoolean); // boolean

let stringToString = String("123");
console.log(stringToString); // "123"
console.log(typeof stringToString); // string

// 1.2 Converting "3.14" using all 5 methods (Number, parseInt, parseFloat,
// Boolean, String), logging the result and its type to the console.
let stringToNumber2 = Number("3.14");
console.log(stringToNumber2); // 3.14
console.log(typeof stringToNumber2); // number

let stringToInteger2 = parseInt("3.14");
console.log(stringToInteger2); // 3
console.log(typeof stringToInteger2); // number

let stringToFloat2 = parseFloat("3.14");
console.log(stringToFloat2); // 3.14
console.log(typeof stringToFloat2); // number

let stringToBoolean2 = Boolean("3.14");
console.log(stringToBoolean2); // true
console.log(typeof stringToBoolean2); // boolean

let stringToString2 = String("3.14");
console.log(stringToString2); // "3.14"
console.log(typeof stringToString2); // string

// 1.3 Converting "hello" using all 5 methods (Number, parseInt, parseFloat,
// Boolean, String), logging the result and its type to the console.
let stringToNumber3 = Number("hello");
console.log(stringToNumber3); // NaN
console.log(typeof stringToNumber3); // number

let stringToInteger3 = parseInt("hello");
console.log(stringToInteger3); // NaN
console.log(typeof stringToInteger3); // number 

let stringToFloat3 = parseFloat("hello");
console.log(stringToFloat3); // NaN
console.log(typeof stringToFloat3); // number

let stringToBoolean3 = Boolean("hello");
console.log(stringToBoolean3); // true
console.log(typeof stringToBoolean3); // boolean

let stringToString3 = String("hello");
console.log(stringToString3); // "hello"
console.log(typeof stringToString3); // string

// 1.4 Converting "42abc" using all 5 methods (Number, parseInt, parseFloat,
// Boolean, String), logging the result and its type to the console.
let stringToNumber4 = Number("42abc");
console.log(stringToNumber4); // NaN
console.log(typeof stringToNumber4); // number

let stringToInteger4 = parseInt("42abc");
console.log(stringToInteger4); // 42
console.log(typeof stringToInteger4); // number

let stringToFloat4 = parseFloat("42abc");
console.log(stringToFloat4); // 42
console.log(typeof stringToFloat4); // number

let stringToBoolean4 = Boolean("42abc");
console.log(stringToBoolean4); // true
console.log(typeof stringToBoolean4); // boolean

let stringToString4 = String("42abc");
console.log(stringToString4); // "42abc"
console.log(typeof stringToString4); // string

// 1.5 Converting "" (empty string) using all 5 methods (Number, parseInt, parseFloat,
// Boolean, String), logging the result and its type to the console.
let stringToNumber5 = Number("");
console.log(stringToNumber5); // 0
console.log(typeof stringToNumber5); // number

let stringToInteger5 = parseInt("");
console.log(stringToInteger5); // NaN
console.log(typeof stringToInteger5); // number

let stringToFloat5 = parseFloat("");
console.log(stringToFloat5); // 0
console.log(typeof stringToFloat5); // number

let stringToBoolean5 = Boolean("");
console.log(stringToBoolean5); // false
console.log(typeof stringToBoolean5); // boolean

let stringToString5 = String("");
console.log(stringToString5); // ""
console.log(typeof stringToString5); // string

// 1.6 Converting "0" using all 5 methods (Number, parseInt, parseFloat,
// Boolean, String), logging the result and its type to the console.
let stringToNumber6 = Number("0");
console.log(stringToNumber6); // 0          
console.log(typeof stringToNumber6); // number

let stringToInteger6 = parseInt("0");
console.log(stringToInteger6); // 0
console.log(typeof stringToInteger6); // number

let stringToFloat6 = parseFloat("0");
console.log(stringToFloat6); // 0
console.log(typeof stringToFloat6); // number

let stringToBoolean6 = Boolean("0");
console.log(stringToBoolean6); // true
console.log(typeof stringToBoolean6); // boolean

let stringToString6 = String("0");
console.log(stringToString6); // "0"
console.log(typeof stringToString6); // string

// 1.7 Converting null using all 5 methods (Number, parseInt, parseFloat,
// Boolean, String), logging the result and its type to the console.
let nullToNumber = Number(null);
console.log(nullToNumber); // 0
console.log(typeof nullToNumber); // number

let nullToInteger = parseInt(null);
console.log(nullToInteger); // NaN
console.log(typeof nullToInteger); // number

let nullToFloat = parseFloat(null);
console.log(nullToFloat); // 0
console.log(typeof nullToFloat); // number

let nullToBoolean = Boolean(null);
console.log(nullToBoolean); // false
console.log(typeof nullToBoolean); // boolean

let nullToString = String(null);
console.log(nullToString); // "null"
console.log(typeof nullToString); // string

// 1.8 Converting undefined using all 5 methods (Number, parseInt, parseFloat,
// Boolean, String), logging the result and its type to the console.
let undefinedToNumber = Number(undefined);
console.log(undefinedToNumber); // NaN
console.log(typeof undefinedToNumber); // number

let undefinedToInteger = parseInt(undefined);
console.log(undefinedToInteger); // NaN
console.log(typeof undefinedToInteger); // number

let undefinedToFloat = parseFloat(undefined);
console.log(undefinedToFloat); // NaN
console.log(typeof undefinedToFloat); // number

let undefinedToBoolean = Boolean(undefined);
console.log(undefinedToBoolean); // false
console.log(typeof undefinedToBoolean); // boolean

let undefinedToString = String(undefined);
console.log(undefinedToString); // "undefined"
console.log(typeof undefinedToString); // string 

// Part B — Implicit coercion - predicting the output AND the resulting type, then verifying by
//logging.

// 1.  "5" + 3
// Prediction: "53" (string)
// Resulting type: string
console.log("5" + 3); // "53"
console.log(typeof ("5" + 3)); // string

// 2.  "5" - 3
// Prediction: 2 (number)
// Resulting type: number
console.log("5" - 3); // 2
console.log(typeof ("5" - 3)); // number

// 3.  "5" * "2"
// Prediction: 10 (number)
// Resulting type: number
console.log("5" * "2"); // 10
console.log(typeof ("5" * "2")); // number

// 4. true + 1
// Prediction: 2 (number)
// Resulting type: number
console.log(true + 1); // 2
console.log(typeof (true + 1)); // number

// 5. true + "1"
// Prediction: "true1" (string)
// Resulting type: string
console.log(true + "1"); // "true1"
console.log(typeof (true + "1")); // string

// 6. false + null
// Prediction: 0 (number)
// Resulting type: number
console.log(false + null); // 0
console.log(typeof (false + null)); // number

// 7. undefined + null
// Prediction: NaN (number)
// Resulting type: number
console.log(undefined + null); // NaN
console.log(typeof (undefined + null)); // number

// 8. 1/ 0 
// Prediction: Infinity (number)
// Resulting type: number
console.log(1 / 0); // Infinity
console.log(typeof (1 / 0)); // number

// 9. 0 / 0
// Prediction: NaN (number)
// Resulting type: number
console.log(0 / 0); // NaN
console.log(typeof (0 / 0)); // number

// 10. "abc" - 1
// Prediction: NaN (number)
// Resulting type: number
console.log("abc" - 1); // NaN
console.log(typeof ("abc" - 1)); // number

// 11. [] + []
// Prediction: "" (string)
// Resulting type: string
console.log([] + []); // ""
console.log(typeof ([] + [])); // string

// 12. [1] + [2]
// Prediction: "12" (string)
// Resulting type: string
console.log([1] + [2]); // "12"
console.log(typeof ([1] + [2])); // string

// Part C — The three questions

// 1. What is the exact difference between Number('42abc') and parseInt('42abc')? Give the
//    exact return value of each.
//    Number('42abc') returns NaN (Not-a-Number) because the entire string cannot be converted to a number.
//    parseInt('42abc') returns 42 because it extracts the integer part from the beginning of the string.

// 2. When would you reach for parseFloat instead of parseInt in real code? Give a scenario
//    where getting it wrong costs money.
//    Scenario: Calculating the total cost of items in a shopping cart where prices are stored as strings with decimal points. 
//    Using parseInt would truncate the decimal places, leading to incorrect total calculations and potential financial loss.

// 3. What does Number('') return, and why is that a common source of production bugs? Give a
//    specific form-field example.
//    Number('') returns 0 because an empty string is converted to zero when parsed as a number.
//    This can cause issues in form validation or data processing where an empty field should be treated as invalid or missing data.

// Challenge 3 — Operators Masterclass

// Arithmetic Operator
// 1. Arithmetic (include modulo): Calculate a worker's monthly net salary from a gross salary of R 45,000 
// after 25% tax, 1% UIF, and R 2,500 medical aid. Practical example is your salary advice that you get at work.
let grossSalary = 45000;
let tax = grossSalary * 0.25;
let uif = grossSalary * 0.01;
let medicalAid = 2500;
let netSalary = grossSalary - tax - uif - medicalAid;
console.log(netSalary); // 31250

// 2. Assignment operator
// Assignment (at least 3 compound operators): A shopping cart starts at 0. Three items added
// at R 150, R 85, R 220. Then 10% discount, then 15% VAT.
let shoppingCart = 0;
shoppingCart += 150; // Add first item
shoppingCart += 85; // Add second item
shoppingCart += 220; // Add third item
shoppingCart *= 0.9; // Apply 10% discount (1 - 0.1 = 0.9)
shoppingCart *= 1.15; // Apply 15% VAT (1 + 0.15 = 1.15)
console.log(shoppingCart); // 517.5

// 3. Comparison operator
// Comparison: Validate a signup form. User must be at least 18, password must have at least 8
// characters, confirmed email must exactly match typed email.

let userAge = 20;
let password = "securePass369";
let confirmPassword = "securePass369";
let email = "user@hotmail.com";
let confirmEmail = "user@hotmail.com";

if (userAge >= 18 && password.length >= 8 && email === confirmEmail) {
    console.log("Signup successful!");
} else {
    console.log("Signup failed. Please check your inputs.");
}  

// 4. Logical operator
// Logical: A user can access the premium dashboard IF (logged in AND email verified) OR
// (they are an admin).

let loggedIn = true;
let emailVerified = false;
let isAdmin = true;

if ((loggedIn && emailVerified) || isAdmin) {
    console.log("Access granted to premium dashboard.");
} else {
    console.log("Access denied.");
}

// 5. Unary: Convert the string '25' from a form field into a number using the unary + operator.
// Then toggle a boolean 'isDarkMode' flag using !.
let formValue = '25';
let numberValue = +formValue;
let isDarkMode = false;
isDarkMode = !isDarkMode;
console.log(numberValue); // 25
console.log(isDarkMode); // true

// 6. Ternary: Display a membership badge: 'Premium Member' if membershipType is 'premium',
// else 'Trial Member' if 'trial', else 'Free Member'.
let membershipType = 'premium';
let badge = membershipType === 'premium' ? 'Premium Member' : membershipType === 'trial' ? 'Trial Member' : 'Free Member';
console.log(badge); // Premium Member

// 7. String concatenation: Build the greeting 'Welcome back Thabo Nkosi, you are 28 years old.'
// once with + and once with a template literal. Comment on which is better and why.

let firstName = "Refilwe";
let lastName = "Segoe";
let userAge2 = 33;

// Using + operator
let greeting1 = "Welcome back " + firstName + " " + lastName + ", you are " + userAge2 + " years old.";
console.log(greeting1); // Welcome back Refilwe Segoe, you are 33 years old.

// Using template literal
let greeting2 = `Welcome back ${firstName} ${lastName}, you are ${userAge2} years old.`;
console.log(greeting2); // Welcome back Refilwe Segoe, you are 33 years old.

// Comment: The template literal is better because it is more readable and easier to maintain, 
// especially when dealing with multiple variables and complex strings. 
// It avoids the need for concatenation operators and makes the code cleaner.

// 1 Prefix (++x) vs postfix (x++) — show it with a one-line example where they produce
// different outputs.
// let x = 5;
// let y = ++x; // y = 6, x = 6
// let z = x++; // z = 6, x = 7

// 2 Three concrete real-world uses for the modulo operator (one of them is even/odd — give
// two more).
// Use case 1: Determine if a number is even or odd
// let num = 10;
// if (num % 2 === 0) {
//     console.log("The number is even.");
// } else {
//     console.log("The number is odd.");
// }

// Use case 2: Cycle through an array of colors
// let colors = ["red", "green", "blue"];
// let currentIndex = 5;
// let color = colors[currentIndex % colors.length]; // Cycles back to the beginning if index exceeds array length

// // Use case 3: Check if a year is a leap year
// let year = 2024;
// if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//     console.log("The year is a leap year.");
// } else {
//     console.log("The year is not a leap year.");
// }

// 3. Nested ternaries: good practice or not? When would you NOT use one?
// Nested ternaries can make code harder to read and maintain, especially when dealing with complex conditions. 
// It's generally better to use if-else statements for clarity and simplicity.

// Challenge 4 — 
// Part A - The Equality Deep Dive

// For each of the 20 comparisons below, write a comment with your PREDICTION before you run
// it. Then log the actual result. For each case, add a one-line note explaining WHY.

// 1. 0 == false
// Prediction: true
console.log(0 == false); // true
// Explanation: In loose equality, 0 is coerced to false, so they are considered equal.

// 2. 0 === false
// Prediction: false
console.log(0 === false); // false
// Explanation: Strict equality checks both value and type. 0 is a number, while false is a boolean, so they are not equal.

// 3. "" == 0
// Prediction: true
console.log("" == 0); // true
// Explanation: In loose equality, an empty string is coerced to 0, so they are considered equal.

// 4. "" === 0
// Prediction: false
console.log("" === 0); // false
// Explanation: Strict equality checks both value and type. An empty string is a string, while 0 is a number, so they are not equal.

// 5. "0" == 0
// Prediction: true
console.log("0" == 0); // true
// Explanation: In loose equality, the string "0" is coerced to the number 0, so they are considered equal.

// 6. "0" === 0
// Prediction: false
console.log("0" === 0); // false
// Explanation: Strict equality checks both value and type. The string "0" is a string, while 0 is a number, so they are not equal.

// 7. null == undefined
// Prediction: true
console.log(null == undefined); // true
// Explanation: In loose equality, null and undefined are considered equal.

// 8. null === undefined
// Prediction: false
console.log(null === undefined); // false
// Explanation: Strict equality checks both value and type. null is an object, while undefined is a different type, so they are not equal.

// 9. null == 0
// Prediction: false
console.log(null == 0); // false
// Explanation: In loose equality, null is only equal to undefined, not to any other value, including 0.

// 10. null >= 0
// Prediction: true
console.log(null >= 0); // true
// Explanation: In comparisons, null is coerced to 0, so null >= 0 evaluates to true.

// 11. null > 0
// Prediction: false
console.log(null > 0); // false
// Explanation: In comparisons, null is coerced to 0, so null > 0 evaluates to false.

// 12. NaN == NaN
// Prediction: false
console.log(NaN == NaN); // false
// Explanation: NaN is not equal to anything, including itself, according to the IEEE 754 standard.

// 13. NaN === NaN
// Prediction: false
console.log(NaN === NaN); // false
// Explanation: Strict equality also considers NaN not equal to itself, following the same IEEE 754 standard.

// 14. Object.is(NaN, NaN)
// Prediction: true
console.log(Object.is(NaN, NaN)); // true
// Explanation: Object.is is a method that correctly identifies NaN as equal to itself, unlike the == and === operators.

// 15. +0 === -0
// Prediction: true
console.log(+0 === -0); // true
// Explanation: In strict equality, +0 and -0 are considered equal, even though they have different signs.

// 16. Object.is(+0, -0)
// Prediction: false
console.log(Object.is(+0, -0)); // false
// Explanation: Object.is distinguishes between +0 and -0, treating them as different values.

// 17. [1,2,3] == "1,2,3"
// Prediction: true
console.log([1,2,3] == "1,2,3"); // true
// Explanation: In loose equality, the array is converted to a string by joining its elements with commas, resulting in "1,2,3", which is then compared to the string "1,2,3".

// 18. [] == false
// Prediction: true
console.log([] == false); // true
// Explanation: In loose equality, the empty array is converted to the number 0, which is then compared to the boolean false (which is also converted to 0).

// 19. [] == 0
// Prediction: true
console.log([] == 0); // true
// Explanation: In loose equality, the empty array is converted to the number 0, which is then compared to the number 0.

// 20. [0] == false
// Prediction: true
console.log([0] == false); // true
// Explanation: In loose equality, the array [0] is converted to the number 0, which is then compared to the boolean false (which is also converted to 0).

// Part B — Real-world form validator

// Write a validation script for a password-reset form with four fields: newPassword,
// confirmPassword, currentEmail, confirmEmail. Validate that:
// • newPassword and confirmPassword match EXACTLY (including type)
// • currentEmail and confirmEmail match EXACTLY
// • newPassword is NOT the same as the current email (bad practice to use email as password)
// • newPassword length is at least 8 characters
// Print a clear PASS or FAIL for each check. Run with two test cases: one that passes all four,
// one that fails at least two.
// At the end: which equality operator did you use (== or ===), and why does that choice matter
// specifically for password validation?

let newPassword = "Melsoft123";
let isConfirmedPassword = "Melsoft123";
let currentEmail = "user@slowmail.com";
let isConfirmedEmail = "user@slowmail.com";

// Test Case 1: All checks pass
console.log("Test Case 1: All checks pass");
console.log("newPassword === confirmPassword:", newPassword === isConfirmedPassword ? "PASS" : "FAIL");
console.log("currentEmail === confirmEmail:", currentEmail === isConfirmedEmail ? "PASS" : "FAIL");
console.log("newPassword !== currentEmail:", newPassword !== currentEmail ? "PASS" : "FAIL");
console.log("newPassword.length >= 8:", newPassword.length >= 8 ? "PASS" : "FAIL");

// Test Case 2: Fails at least two checks
let newPassword2 = "SecurePass123";
let isConfirmedPassword2 = "SecurePass123";
let currentEmail2 = "user@example.com";
let isConfirmedEmail2 = "user@example.com";

console.log("\nTest Case 2: Fails at least two checks");
console.log("newPassword === confirmPassword:", newPassword2 === isConfirmedPassword2 ? "PASS" : "FAIL");
console.log("currentEmail === confirmEmail:", currentEmail2 === isConfirmedEmail2 ? "PASS" : "FAIL");
console.log("newPassword !== currentEmail:", newPassword2 !== currentEmail2 ? "PASS" : "FAIL");
console.log("newPassword.length >= 8:", newPassword2.length >= 8 ? "PASS" : "FAIL");

// Explanation of equality operator choice:
// I used the strict equality operator (===) for validating the password and email fields because it ensures both value and type are identical.
// This is crucial for security, as it prevents potential issues with type coercion that could lead to unexpected behavior or vulnerabilities.
// For example, if we used ==, a string "0" would be equal to the number 0, which could cause unintended validation failures or successes.

// Challenge 5 — Operator Precedence

// 1. 2 + 3 * 4 - 1
// Prediction: 13
// Evaluation order: 3 * 4 = 12, then 2 + 12 = 14, then 14 - 1 = 13
console.log(2 + 3 * 4 - 1); // 13

// 2. (2 + 3) * (4 - 1)
// Prediction: 15
// Evaluation order: 2 + 3 = 5, then 4 - 1 = 3, then 5 * 3 = 15
console.log((2 + 3) * (4 - 1)); // 15

// 3. 10 - 4 - 2
// Prediction: 4
// Evaluation order: 10 - 4 = 6, then 6 - 2 = 4
console.log(10 - 4 - 2); // 4

// 4. 2 ** 3 ** 2 
// Prediction: 512 (READ CODE FROM RIGHT TO LEFT)
// Evaluation order: 3 ** 2 = 9, then 2 ** 9 = 512
console.log(2 ** 3 ** 2); // 512

// 5. 10 % 3 * 2 + 1
// Prediction: 5
// Evaluation order: 10 % 3 = 1, then 1 * 2 = 2, then 2 + 1 = 3
console.log(10 % 3 * 2 + 1); // 5

// 6. 100 / 4 / 5
// Prediction: 5
// Evaluation order: 100 / 4 = 25, then 25 / 5 = 5
console.log(100 / 4 / 5); // 5

// 7. 5 + 2 > 6 && 3 < 4
// Prediction: true
// Evaluation order: 5 + 2 = 7, then 7 > 6 = true, then 3 < 4 = true, then true && true = true
console.log(5 + 2 > 6 && 3 < 4); // true

// 8. true && false || true && true
// Prediction: true
// Evaluation order: true && false = false, then true && true = true, then false || true = true
console.log(true && false || true && true); // true

// 9. !false && !!0
// Prediction: false
// Evaluation order: !false = true, then !!0 = false, then true && false = false
console.log(!false && !!0); // false

// 10. 5 > 3 && 10 < 20 || !(2 === "2")
// Prediction: true
// Evaluation order: 5 > 3 = true, then 10 < 20 = true, then true && true = true, then 2 === "2" = false, then !(false) = true, then true || true = true
console.log(5 > 3 && 10 < 20 || !(2 === "2")); // true

// 11. 1000 * 1.15 * 0.9
// Prediction: 1035
// Evaluation order: 1000 * 1.15 = 1150, then 1150 * 0.9 = 1035
console.log(1000 * 1.15 * 0.9); // 1035

// 12. typeof 5 + 1
// Prediction: "number1"
// Evaluation order: typeof 5 = "number", then "number" + 1 = "number1"
console.log(typeof 5 + 1); // "number1"

// 13. typeof (5 + 1)
// Prediction: "string"
// Evaluation order: 5 + 1 = 6, then typeof 6 = "number"
console.log(typeof (5 + 1)); // "number"

// 14. "5" + 3 * 2
// Prediction: "56"
// Evaluation order: 3 * 2 = 6, then "5" + 6 = "56"
console.log("5" + 3 * 2); // "56"

// 15. "5" - 3 + 2
// Prediction: 4
// Evaluation order: "5" - 3 = 2, then 2 + 2 = 4
console.log("5" - 3 + 2); // 4

// Interview answer: when should you add parentheses even when precedence does not require
// them? Give your reasoning in 2-3 sentences.
// Answer: You should add parentheses when it improves readability or when you want to make the evaluation order explicit, 
// even if the default precedence would produce the same result. This helps prevent confusion and makes the code easier to maintain.

// Challenge 6 — Ternary and Short-Circuit Patterns

// Part A — Ternary chain for grade conversion

console.log(95 >= 90 ? 'A' : 95 >= 80 ? 'B' : 95 >= 70 ? 'C' : 95 >= 60 ? 'D' : 95 >= 50 ? 'E' : 'F');
console.log(82 >= 90 ? 'A' : 82 >= 80 ? 'B' : 82 >= 70 ? 'C' : 82 >= 60 ? 'D' : 82 >= 50 ? 'E' : 'F');
console.log(73 >= 90 ? 'A' : 73 >= 80 ? 'B' : 73 >= 70 ? 'C' : 73 >= 60 ? 'D' : 73 >= 50 ? 'E' : 'F');
console.log(65 >= 90 ? 'A' : 65 >= 80 ? 'B' : 65 >= 70 ? 'C' : 65 >= 60 ? 'D' : 65 >= 50 ? 'E' : 'F');
console.log(54 >= 90 ? 'A' : 54 >= 80 ? 'B' : 54 >= 70 ? 'C' : 54 >= 60 ? 'D' : 54 >= 50 ? 'E' : 'F');
console.log(42 >= 90 ? 'A' : 42 >= 80 ? 'B' : 42 >= 70 ? 'C' : 42 >= 60 ? 'D' : 42 >= 50 ? 'E' : 'F');
console.log(0 >= 90 ? 'A' : 0 >= 80 ? 'B' : 0 >= 70 ? 'C' : 0 >= 60 ? 'D' : 0 >= 50 ? 'E' : 'F');
console.log(100 >= 90 ? 'A' : 100 >= 80 ? 'B' : 100 >= 70 ? 'C' : 100 >= 60 ? 'D' : 100 >= 50 ? 'E' : 'F');

// Part B — Short-circuit defaults

// You are parsing a user profile from an API where many fields may be missing. Assign sensible
// defaults:
// • displayName — default to 'Guest User' using the || operator
// Answer: The || operator returns the first truthy value it encounters. If displayName is missing or falsy (like an empty string), it will default to 'Guest User'.
// • theme — default to 'light' using the || operator
// Answer: The || operator returns the first truthy value it encounters. If theme is missing or falsy (like an empty string), it will default to 'light'.
// • maxResults — default to 10 using the || operator
// Answer: The || operator returns the first truthy value it encounters. If maxResults is missing or falsy (like an empty string), it will default to 10.
// • lastLogin — default to 'Never' using the ?? (nullish coalescing) operator
// Answer: The ?? operator returns the right-hand side operand only if the left-hand side is null or undefined. If lastLogin is null or undefined, it will default to 'Never'.
// • notificationCount — default to 0 using the ?? operator
// Answer: The ?? operator returns the right-hand side operand only if the left-hand side is null or undefined. If notificationCount is null or undefined, it will default to 0.

// Test with TWO user objects: one where all fields are missing, one where notificationCount is 0
// and theme is empty string ''. Explain in comments WHY ?? and || behave differently for those
// two cases.
// Answer: The || operator treats any falsy value (like 0, '', null, undefined) as a trigger to return the default value. In contrast, the ?? operator only considers null and undefined as triggers for the default value. Therefore, if notificationCount is 0 or theme is an empty string, || would return the default values, while ?? would not, since 0 and '' are not null or undefined.

// Part C — Guard clauses with && and ?.

// You have a user object that may or may not have a nested address.city property. Safely
// access the city using THREE different techniques:
// 1. Using && guard clauses: user && user.address && user.address.city
// Answer: This technique checks each level of the object hierarchy to ensure that it exists before attempting to access the next level. If any level is undefined or null, the entire expression short-circuits and returns undefined, preventing runtime errors.
// 2. Using optional chaining: user?.address?.city
// Answer: This technique uses the optional chaining operator (?.) to safely access nested properties. If any level of the object hierarchy is undefined or null, the expression short-circuits and returns undefined, preventing runtime errors.
// 3. Using a combination with a default: user?.address?.city ?? 'Unknown city'
// Answer: This technique combines optional chaining with the nullish coalescing operator (??) to provide a default value if the nested property is undefined or null. If user?.address?.city is undefined or null, it will return 'Unknown city' instead of throwing an error.

// Test each on three users: one with full data, one missing address, one that is null.
// testUser1 = { name: "Siya", address: { city: "Pretoria" } };
// testUser2 = { name: "Gina", address: { city: "Johannesburg" } };
// testUser3 = null;

// Part D — Predict the output

// For each expression, predict output AND type before running:
// 1 null || undefined || 0 || "" || "finally"
// Prediction: "finally" (string)
console.log(null || undefined || 0 || "" || "finally");
// 2 null ?? undefined ?? 0 ?? "" ?? "finally"
// Prediction: "finally" (string)
console.log(null ?? undefined ?? 0 ?? "" ?? "finally");
// 3 0 || "first truthy"
// Prediction: "first truthy" (string)
console.log(0 || "first truthy");
// 4 0 ?? "first non-nullish"
// Prediction: 0 (number)
console.log(0 ?? "first non-nullish");
// 5 true && false && "never reached"
// Prediction: false (boolean)
console.log(true && false && "never reached");
// 6 "first" && "second" && "third"
// Prediction: "third" (string)
console.log("first" && "second" && "third");
// 7 false || (true && "yes")
// Prediction: "yes" (string)
console.log(false || (true && "yes"));
// 8 (false || true) && "yes"
// Prediction: "yes" (string)
console.log((false || true) && "yes");
// 9 1 && 2 && 3
// Prediction: 3 (number)
console.log(1 && 2 && 3);
// 10 null?.foo?.bar?.baz
// Prediction: undefined
console.log(null?.foo?.bar?.baz);

// Challenge 7 — typeof, instanceof, delete

// Predict and verify typeof for each:
// 1. typeof 42
// Prediction: "number"
console.log(typeof 42);
// 2. typeof "hello"
// Prediction: "string"
console.log(typeof "hello");
// 3. typeof true
// Prediction: "boolean"
console.log(typeof true);
// 4. typeof undefined
// Prediction: "undefined"
console.log(typeof undefined);
// 5. typeof null (the famous bug)
// Prediction: "object"
console.log(typeof null);
// 6. typeof {}
// Prediction: "object"
console.log(typeof {});
// 7. typeof [] (another trap)
// Prediction: "object"
console.log(typeof []);
// 8. typeof function() {}
// Prediction: "function"
console.log(typeof function() {});
// 9. typeof NaN
// Prediction: "number"
console.log(typeof NaN);
// 10. typeof undeclaredVariable (does not throw — why?)
// Prediction: "undefined"
console.log(typeof undeclaredVariable);

// Part B — instanceof

// Predict and verify instanceof for each:
// 1. [] instanceof Array
// Prediction: true
console.log([] instanceof Array);
// 2. [] instanceof Object
// Prediction: true
console.log([] instanceof Object);
// 3. {} instanceof Object
// Prediction: true
console.log({} instanceof Object);
// 4. "hello" instanceof String (false — why?)
// Prediction: false
console.log("hello" instanceof String);
// 5. new String("hello") instanceof String
// Prediction: true
console.log(new String("hello") instanceof String);
// 6. 42 instanceof Number
// Prediction: true
console.log(42 instanceof Number);
// 7. new Date() instanceof Date
// Prediction: true
console.log(new Date() instanceof Date);
// 8. /abc/ instanceof RegExp
// Prediction: true
console.log(/abc/ instanceof RegExp);

// In a comment, explain: ONE case where typeof is the right tool and instanceof is wrong, and
// ONE case where instanceof is right and typeof is wrong.
// typeof is right when checking the type of a primitive value (e.g., typeof "hello" === "string")
// instanceof is right when checking if an object is an instance of a particular class (e.g., new Date() instanceof Date)

// Part C — delete and its gotchas

// 1. Create `const user = { name: 'Lerato', age: 25, role: 'student' };` then delete user.role. Log
// before and after.
const user = { name: 'Lerato', age: 25, role: 'student' };
console.log(user);
delete user.role;
console.log(user);

// 2. Try `let x = 5; delete x;` — what happens? What does delete return?
let x = 5;
// console.log(delete x);

// 3. `const arr = [1, 2, 3, 4]; delete arr[1];` — log arr, arr.length, arr[1]. Write a comment explaining
// why delete on arrays is dangerous.
const arr = [1, 2, 3, 4];
delete arr[1];
console.log(arr);
console.log(arr.length);
console.log(arr[1]);
// 4. `delete Math.PI;` — does it work? Why not? What is a non-configurable property?
console.log(delete Math.PI);

// Final question: You have an array of items and need to remove one. Why would you NOT use
// delete, and what should you use instead? (You can mention methods you have not been formally taught yet — 
// this question tests whether you can research.)

//  Challenge 8 — Bitwise Permission System

// Build a role-based permission system using bitwise flags. Real production systems use this
// pattern — Unix file permissions (rwx = 4+2+1 = 7) are the classic example.
// Define permissions as powers of 2 (each permission is one bit):
// const READ = 1; // binary 0001
// const WRITE = 2; // binary 0010
// const DELETE = 4; // binary 0100
// const ADMIN = 8; // binary 1000
// Implement each with console.log output:
// 1.  Create a user with READ + WRITE using the | (OR) operator.
// Answer: You can create a user with READ and WRITE permissions by using the bitwise OR operator (|) to combine the two permission values. For example, if you have a user object, you can set their permissions like this:
const READ = 1;
const WRITE = 2;
const DELETE = 4;
const ADMIN = 8;
let userPermissions = READ | WRITE;
// 2.  Create an admin user with ALL permissions.
let adminPermissions = READ | WRITE | DELETE | ADMIN;
// 3.  Check if the first user has READ permission using &. Print 'Yes' or 'No'.
console.log((userPermissions & READ) ? 'Yes' : 'No');
// 4.  Check if the first user has DELETE permission using &. Print 'Yes' or 'No'.
console.log((userPermissions & DELETE) ? 'Yes' : 'No');
// 5.  Grant DELETE to the first user using |= (compound bitwise OR assignment).
userPermissions |= DELETE;
// 6.  Revoke WRITE from the first user using & with ~ (NOT). This is the trickiest line in the project.
userPermissions &= ~WRITE;
// 7 Use XOR (^) to toggle the ADMIN permission on a user. Call it twice to show it toggles on then off.
userPermissions ^= ADMIN; // Toggle on
console.log((userPermissions & ADMIN) ? 'Admin permission granted' : 'Admin permission revoked');
userPermissions ^= ADMIN; // Toggle off
console.log((userPermissions & ADMIN) ? 'Admin permission granted' : 'Admin permission revoked'); 
// 8 Use << (left shift) to add a new SUPER_ADMIN permission as the next power of 2 without hardcoding 16.
const SUPER_ADMIN = 1 << 4; // binary 10000

// Interview answers:
// 1. Why use bitwise flags for permissions instead of an array like ['read', 'write']? Give two
// concrete reasons.
// Answer:
// Reason 1: Bitwise flags are more memory-efficient because they use a single integer to represent multiple permissions, while an array would require more memory to store each permission as a separate string.
// Reason 2: Bitwise operations are faster for checking, granting, and revoking permissions compared to searching through an array, which can be slower and less efficient, especially with a large number of permissions.
// 2. What is the real-world downside? When would you NOT use this pattern?
// Answer: The downside of using bitwise flags is that it can be less readable and harder to understand for developers who are not familiar with bitwise operations. It can also lead to confusion when debugging. You would not use this pattern in situations where clarity and maintainability are more important than performance, such as in small projects or when working with a team that may not be familiar with bitwise operations.
// 3. Difference between & and &&, and | and ||. Give one case where confusing them would cause a silent bug.
// Answer: The & and | operators are bitwise operators that operate on the binary representation of numbers, while && and || are logical operators that operate on boolean values. Confusing them could cause a silent bug in a permission check, for example, if you accidentally used & instead of && when checking if a user has both READ and WRITE permissions, it would perform a bitwise AND instead of a logical AND, potentially leading to incorrect permission validation.

// Challenge 9 — Real-World Payroll + Banking Calculator

// Scenario 1 — Payroll processor

// Given a gross monthly salary of R 45,000 for an employee, calculate and print:
// • PAYE tax at 25% of gross
// Answer: let grossSalary = 45000; let payeTax = grossSalary * 0.25; console.log(formatCurrency(payeTax)); // R 11,250.00
// • UIF at 1% of gross (capped at R 177.12)
// Answer: let uif = Math.min(grossSalary * 0.01, 177.12); console.log(formatCurrency(uif)); // R 177.12
// • Medical aid: R 2,500 (fixed)
// Answer: let medicalAid = 2500; console.log(formatCurrency(medicalAid)); // R 2,500.00
// • Pension: 7.5% of gross
// Answer: let pension = grossSalary * 0.075; console.log(formatCurrency(pension)); // R 3,375.00
// • Total deductions
let totalDeductions = payeTax + uif + medicalAid + pension; console.log(formatCurrency(totalDeductions)); // R 17,302.12
// • Net salary
let nettSalary = grossSalary - totalDeductions; console.log(formatCurrency(netSalary)); // R 27,697.88
// • Format every amount as 'R X,XXX.XX' with commas and two decimals
// Then simulate the input arriving from a form (as a string): grossSalaryInput = '45000'. Convert it to a number properly, validate it is a positive number using Number.isNaN, and recalculate.
// Answer:
let grossSalaryInput = '45000';
let grossSalaryNumber = Number(grossSalaryInput);
if (!Number.isNaN(grossSalaryNumber) && grossSalaryNumber > 0) {
    let payeTax = grossSalaryNumber * 0.25;
    let uif = Math.min(grossSalaryNumber * 0.01, 177.12);
    let medicalAid = 2500;
    let pension = grossSalaryNumber * 0.075;
    let totalDeductions = payeTax + uif + medicalAid + pension;
    let netSalary = grossSalaryNumber - totalDeductions;
    console.log(formatCurrency(payeTax));
    console.log(formatCurrency(uif));
    console.log(formatCurrency(medicalAid));
    console.log(formatCurrency(pension));
    console.log(formatCurrency(totalDeductions));
    console.log(formatCurrency(netSalary));
}

// Scenario 2 — Compound interest savings

// A customer deposits R 25,000 into a savings account at 7.5% annual interest, compounded
// monthly, for 3 years. Calculate:
// • Final balance using the formula P * (1 + r/n)^(n*t)
let P = 25000; let r = 0.075; let n = 12; let t = 3; let finalBalance = P * Math.pow((1 + r/n), (n*t)); console.log(formatCurrency(finalBalance)); // R 31,000.00
// • Total interest earned
let totalInterest = finalBalance - P; console.log(formatCurrency(totalInterest)); // R 6,000.00
// • Effective annual rate (how much it actually grew per year as a percentage)
let effectiveAnnualRate = (Math.pow((1 + r/n), n) - 1) * 100; console.log(effectiveAnnualRate.toFixed(2) + '%'); // 7.73%
// • Monthly fee based on balance using ONE ternary chain: balance R0-R999 fee R25, R1,000-R4,999 fee R50, R5,000-R24,999 fee R75, R25,000+ fee R0 (waived)
let monthlyFee = finalBalance < 1000 ? 25 : finalBalance < 5000 ? 50 : finalBalance < 25000 ? 75 : 0; console.log(formatCurrency(monthlyFee)); // R 0.00
// • Annual fee impact at each tier
let annualFeeImpact = monthlyFee * 12; console.log(formatCurrency(annualFeeImpact)); // R 0.00
// Test the fee ternary with four balances: R500, R1,500, R10,000, R50,000. Format all currency with toFixed and comma formatting.
function formatCurrency(amount) {
    return 'R ' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Scenario 3 — Multi-currency transfer

// A customer wants to send R 15,750.33 to a US bank account. Exchange rate 1 USD = R 18.42.
// Bank charges 2.5% commission on the ZAR amount.
// Calculate and print:
// • Commission in ZAR
let amountZAR = 15750.33; 
let commissionRate = 0.025; 
let commissionZAR = amountZAR * commissionRate; 
console.log(formatCurrency(commissionZAR)); // R 393.76
// • ZAR amount after commission
let amountAfterCommission = amountZAR - commissionZAR; 
console.log(formatCurrency(amountAfterCommission)); // R 15,356.57
// • USD amount received (ZAR after commission ÷ exchange rate)
let exchangeRate = 18.42; 
let usdAmount = amountAfterCommission / exchangeRate; 
console.log('$ ' + usdAmount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')); // $ 833.60
// • Format: ZAR as 'R X,XXX.XX', USD as '$X,XXX.XX'

// Final written answer in a comment block (worth marks): In your calculations above, where did floating-point precision cause a potential problem? 
// Answer: Floating-point precision can cause issues when dealing with decimal values, especially in financial calculations. For example, when adding 0.1 and 0.2 in JavaScript, the result is not exactly 0.3 due to how floating-point numbers are represented in binary. This can lead to rounding errors and inaccuracies in calculations involving money, which is critical in banking and payroll systems.

// How did you handle it? Describe how a REAL bank would store these amounts internally (hint: not as floats). Reference 0.1 + 0.2 explicitly.
console.log(0.1 + 0.2); // 0.30000000000000004

// Answer: To handle floating-point precision issues, I used the toFixed method to format the output to two decimal places, ensuring that the displayed values are accurate for financial purposes. A real bank would typically store monetary amounts as integers representing the smallest currency unit (e.g., cents) or use a fixed-point decimal representation to avoid floating-point inaccuracies. For example, instead of storing R 15,750.33 as a float, it would be stored as 1,575,033 cents (an integer). This approach prevents issues like 0.1 + 0.2 resulting in 0.30000000000000004, which can lead to significant errors in financial calculations.

// Challenge 11 — Bug Hunt

// Below is a shopping-cart script written by a junior developer. It runs without crashing, but it
// has at least 12 bugs related to types, conversion, operators, and expressions. Find them,
// number them, explain each one, and provide a corrected version at the bottom.
// Copy this code INTO your submission file and work on it there.
// === JUNIOR DEVELOPER'S CART SCRIPT (DO NOT TRUST ANY LINE) ===
var item1Price = "199.99";
// 1. Bug: item1Price is a string, which will cause concatenation instead of addition when calculating subtotal.
var item2Price = "49.50";
// 2. Bug: item2Price is a string, same bug as item1Price
var item3Price = 125;
// 3. none
var quantity = "2";
// 4. Bug: quantity is a string, which will cause concatenation instead of multiplication when calculating subtotal.
var discountCode = "SAVE10";
// 5. Bug: discountCode is a string, which is fine, but it should be compared using strict equality (===) for better type safety.
var isLoggedIn = "true";
// 6. Bug: isLoggedIn is a string, however it should be a boolean value (true/false).
var customerAge = null;
// 7. Bug: customerAge is null, which will cause issues when comparing with numbers. It should be a number.
customerAge = Number(customerAge); // Convert to number
var subtotal = Number(item1Price) + Number(item2Price) + (Number(item3Price) * Number(quantity));
// 8. Bug: The subtotal calculation does not account for operator precedence. 
// It should use parentheses to ensure correct order of operations.
var discount = discountCode == "SAVE10" ? 0.1 : 0;
// 
var discountAmount = subtotal * discount;
// 10. Bug: The discountAmount calculation is correct, but it should be rounded to two decimal places for currency formatting.
var afterDiscount = subtotal - discountAmount;
// none
var vat = afterDiscount * 0.15;
// none
var total = afterDiscount + vat;
// 13. Bug: The total calculation is correct, but it should also be rounded to two decimal places for currency formatting.
var canCheckout = isLoggedIn && customerAge > 18;
// 14. Bug: The canCheckout condition uses isLoggedIn as a string, which will always evaluate to true. It should be a boolean value.
console.log("Can checkout?", canCheckout);
var seniorDiscount = customerAge >= 60 ? total * 0.05 : null;
// 15. Bug: The seniorDiscount calculation uses null for the else case, which can cause issues in calculations. It should be 0 instead of null.
var finalTotal = total - seniorDiscount;
console.log("Total: R" + finalTotal.toFixed(2));
// 16. Bug: The finalTotal calculation does not account for the case where seniorDiscount is null, which can cause NaN results. It should default to 0 if seniorDiscount is null.
// === END OF SCRIPT ===

// Challenge 12 — Self-Reflection

// 1. What is the ONE most important thing you understood about JavaScript's type system from
// this project? Give an example where it bit you.
// 
// 2. Explain in your own words why using === is almost always safer than ==. Give one concrete
// case where == would silently cause a bug.
// Answer: Using === is safer than == because it checks for both value and type equality, preventing unexpected errors that can lead to bugs. 
//         For example, if you compare 0 == "0", it would return true due to type coercion, but 0 === "0" would return false, which is the expected 
//         behavior when checking for equality between different types.
// 3. When would you prefer the nullish coalescing operator (??) over the logical OR operator (||)?
// Give a specific example where swapping one for the other changes the outcome.
// 4 typeof null returns 'object'. Explain WHY (the historical reason), and describe how you
// would check if a variable is specifically null without being tricked.
// 5 Describe a realistic scenario in production code where forgetting to cast a value would
// cause a bug a developer might not notice for a long time.
// 6 In your banking calculator for Challenge 9, you had to handle floating-point arithmetic for
// money. Explain in your own words why 0.1 + 0.2 does NOT equal 0.3 in JavaScript, and the
// production-grade solution (hint: how real banks store money).
// 7 Explain the difference between the single-character operators (& and |) and the
// double-character operators (&& and ||). Give one case where confusing them would cause a
// silent production bug.
// 8 What was the single hardest Module 2 or Module 3 concept for you to grasp, and what
// finally made it click? Be honest — this is for me to know how to teach the next cohort better.