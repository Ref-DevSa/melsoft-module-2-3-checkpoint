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

// You are reviewing a junior developer's financial calculation code and they have written it
// without parentheses, trusting precedence rules. You need to predict exactly what each
// expression produces.
// For each of the 15 expressions, write a comment with your prediction AND the step-by-step
// evaluation order (which operator fires first, second, third). Then log and verify

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