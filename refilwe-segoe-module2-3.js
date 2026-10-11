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

console.log(typeof null); // string
console.log(typeof NaN); // number
console.log(typeof undefined); // boolean
console.log(typeof "42"); // number
console.log(typeof (typeof 42)); // number
console.log(typeof [1, 2, 3]); // number
console.log(typeof function() {}); // number

// Why does typeof null return 'object' = This is a well-known bug in JavaScript and has historical reasons.
// and typeof NaN return 'number'? = NaN is a JavaScript number that is not a legal number. Even though NaN stands for "Not-a-Number," it’s technically still categorized as a number — it’s just a broken, nonsensical one.
// It’s like the system wants to keep everything neat and simple, so it lumps NaN in with all the other numbers because it started out in the number category.

// Give the historical reason for one and the technical reason for the other.