console.log(countries)
alert('Open the browser console whenever you work on JavaScript')
alert('Open the console and check if the countries has been loaded')

// 1. Declare an empty array;
// 2. Declare an array with more than 5 number of elements
// 3. Find the length of your array
const myArray = ['red','blue','orange','purple','green'];
console.log(`Your array: ${myArray}`);
console.log(`Length of array: ${myArray.length}`);

// 4. Get the first item, the middle item and the last item of the array
console.log(`First Element: ${myArray[0]}`);
console.log(`Middle Element: ${myArray[Math.floor(myArray.length/2)]}`);
console.log(`Last Element: ${myArray[myArray.length-1]}`);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array.
// The array size should be greater than 5

let mixedDataTypes = ['car', 3.14, 53, 'Emma', -5, 'computer', 'vacation'];
console.log(`Length: ${mixedDataTypes.length}`);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// 7. Print the array using console.log()
// 8. Print the number of companies in the array
// 9. Print the first company, middle and last company
// 10. Print out each company
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(`First Element: ${itCompanies[0]}`);
console.log(`Middle Element: ${itCompanies[Math.floor(itCompanies.length/2)]}`);
console.log(`Last Element: ${itCompanies[itCompanies.length-1]}`);

for (let index=0; index < itCompanies.length; index++) {
    console.log(itCompanies[index]);
}

// 11. Change each company name to uppercase one by one and print them out
for (let index=0; index < itCompanies.length; index++) {
    console.log(itCompanies[index].toUpperCase());
}

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if (itCompanies.includes('Workday')) {
    console.log("Amazon");
} else {
    console.log("Not Found");
}

// 15. Sort the array using sort() method
console.log(`${itCompanies.sort()}`);
// 16. Reverse the array using reverse() method
console.log(`${itCompanies.reverse()}`);

// Slice out the first 3 companies from the array
console.log(`${itCompanies.slice(3,itCompanies.length)}`);
// Slice out the last 3 companies from the array
console.log(`${itCompanies.slice(0,4)}`);

// Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies);

// Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

