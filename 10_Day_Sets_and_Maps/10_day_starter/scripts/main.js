console.log(countries)
alert('Open the console and check if the countries has been loaded')

const numbers = new Set();
console.log(numbers);

for(let index = 0; index <= 10; index++) {
    numbers.add(index);
}

console.log(numbers.size);
console.log(numbers);

numbers.delete(5);
console.log(numbers.size);
console.log(numbers);

numbers.clear();
console.log(numbers.size);
console.log(numbers);

const fruits = ['apple', 'watermelon', 'peach', 'mango', 'strawberry'];
const setOfFruits = new Set(fruits);
console.log(setOfFruits.size);
console.log(setOfFruits);

