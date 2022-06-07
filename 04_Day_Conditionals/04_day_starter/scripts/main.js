// this is your main.js script
alert('Open the browser console whenever you work on JavaScript')


// let myAge = 26;
// let yourAge = prompt("Enter your age: ");

// console.log(`I am ${myAge} years old. You are ${yourAge} years old.`);

// Exercise 1.1
// if (yourAge >= 18) {
//     console.log("You are old enough to drive.");
// } else {
//     console.log(`You are left with ${18 - yourAge} years to drive.`);
// }

// Exercise 1.2
// if (myAge > yourAge) {
//     console.log(`I am ${myAge - yourAge} years older than you.`);
// } else if (yourAge > myAge) {
//     console.log(`You are ${yourAge - myAge} years older than me.`);
// } else {
//     console.log("We are the same age.");
// }

// Exercise 1.3
// let a = 5;
// let b = 12;

// if (a > b) {
//     console.log(`${a} is greater than ${b}.`);
// } else if (b > a) {
//     console.log(`${b} is greater than ${a}.`);
// } else {
//     console.log(`${b} is equal to ${a}.`);
// }

// Ternary Operator
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// let result = (a > b) ? `${a} is greater than ${b}.` : `${b} is greater than ${a}.`;
// console.log(result);


// Exercise 1.4
// let num = 50;
// if (num % 2 === 0) {
//     console.log(`${num} is even.`);
// } else {
//     console.log(`${num} is odd.`);
// }


// Exercise 2.1
// let grade = 2;

// if (grade >= 80) {
//     console.log("Grade: A");
// } else if (grade >= 70) {
//     console.log("Grade: B");    
// } else if (grade >= 60) {
//     console.log("Grade: C");        
// } else if (grade >= 50) {
//     console.log("Grade: D");    
// } else {
//     console.log("Grade: F");
// }

// Exercise 2.2
// let dayOfWeek = prompt("What is the day today? ");
// dayOfWeek = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1).toLowerCase()

// if (dayOfWeek == 'Saturday' || dayOfWeek == 'Sunday') {
//     console.log(`${dayOfWeek} is a weekend.`);
// } else {
//     console.log(`${dayOfWeek} is a working day.`);
// } 

// Exercise 2.3
let month = prompt("Enter a month: ");
let daysInMonth = 0;

if (month == 'January') { daysInMonth = new Date(2022, 1, 0).getDate(); } 
else if (month == 'February') { daysInMonth = new Date(2022, 2, 0).getDate(); }
else if (month == 'March') { daysInMonth = new Date(2022, 3, 0).getDate(); }
else if (month == 'April') { daysInMonth = new Date(2022, 4, 0).getDate(); }
else if (month == 'May') { daysInMonth = new Date(2022, 5, 0).getDate(); }
else if (month == 'June') { daysInMonth = new Date(2022, 6, 0).getDate(); }
else if (month == 'July') { daysInMonth = new Date(2022, 7, 0).getDate(); }
else if (month == 'August') { daysInMonth = new Date(2022, 8, 0).getDate(); }
else if (month == 'September') { daysInMonth = new Date(2022, 9, 0).getDate(); }
else if (month == 'October') { daysInMonth = new Date(2022, 10, 0).getDate(); }
else if (month == 'November') { daysInMonth = new Date(2022, 11, 0).getDate(); }
else if (month == 'December') { daysInMonth = new Date(2022, 12, 0).getDate(); }

console.log(`${month} has ${daysInMonth} days.`);