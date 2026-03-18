/* 
Concept 1: Arrays (indexing, copy, mutation vs non-mutation)
A1) Hard copy vs soft copy (proof test)
Task:
Create original = ["a", "b", "c"]
Make:
soft = original
hard1 = [...original]
hard2 = original.slice()
Then do: original.push("z")
Print all 4 arrays and explain in a comment what changed and why.

Rules: no JSON stringify tricks.
*/

let orginal = ["a", "b", "c"];
let soft = orginal;
let hard1 = [...orginal];
let hard2 = orginal.slice();
orginal.push("z");
console.log(orginal);
console.log(soft);
console.log(hard1);
console.log(hard2);

/* 
A2) Insert without mutation
Task: Implement:
function insertAt(arr, index, value) {}
Return a new array with value inserted at index.
Rules: ❌ no splice, ❌ no mutation, ✅ use loops or slicing.
(You already did a version of this idea — now make it bulletproof with edge cases.)
*/

function insertAt(arr, index, value) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === index) {
      result.push(value);
    }
    result.push(arr[i]);
  }
  return result;
}

let codingLanguages = ["java", "python", "rust"];
let result = insertAt(codingLanguages, 2, "js");

console.log(result);
/* Challenge 1: Count items
Write a function that:
Takes an array
Returns how many elements it has
❌ Don’t use .length directly inside console.log */

function countArray(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count++;
  }
  return count;
}
console.log(countArray(codingLanguages));

console.log(codingLanguages.length);

/* 
Challenge 2: Find last element
Write a function that:
Takes an array
Returns the last element
❌ Don’t use pop()
*/
// my solution mutates the array
/* 
function findLastElement(array) {
  let LastElement = array.splice(array.length - 1, 1);
  return LastElement;
  console.log(programmingFrameworks);
}
 */

function findLastElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      return arr[i];
    }
  }
}

console.log(findLastElement(codingLanguages));

/* 

Challenge 3: Print with index
Loop through chaitypes and print like this:
*/

for (let i = 0; i < codingLanguages.length; i++) {
  console.log(`${i}: ${codingLanguages[i]}`);
}

/* 
LEVEL 2 — Logic sharpening (this is where learning happens)
Challenge 4: Remove specific item (no mutation)
*/

function removeitem(arr, item) {
  let newarr = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] !== item) {
      newarr.push(arr[index]);
    }
  }
  return newarr;
}

let removeResult = removeitem(codingLanguages, "rust");
console.log(removeResult);

/*
Challenge 6: Check existence
Write a function that:
Takes an array + value
Returns true if found, else false
❌ No .includes()
*/

function checkValue(array, value) {
  let newarr = [];
  for (const v of array) {
    if (v === value) return true;
  }
  return false;
}

let resultValue = checkValue(codingLanguages, "rusts");
console.log(resultValue);

/* 
LEVEL 3 — Think like a backend dev 🧠
Challenge 7: Validate passwords
Given dummyPasswords, create a new array that:
Excludes passwords shorter than 6 characters
*/

let dummyPasswords = ["qwerty", "superman", "Batman", "Spiderman"];
let newPasswords = [];
for (let index = 0; index < dummyPasswords.length; index++) {
  if (dummyPasswords[index].length > 6) {
    newPasswords.push(dummyPasswords[index]);
  }
}

console.log(newPasswords);

/* 
Challenge 9: Compare arrays
Write a function that:
Takes two arrays
Returns true if they have the same values in same order
*/

let dummyArray = ["batman", "superman", "spiderman1"];
let dummyArray2 = ["batman", "superman", "spiderman"];

function comparingTwoArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }
  return true;
}

let compareResult = comparingTwoArrays(dummyArray, dummyArray2);
console.log(compareResult);

/* 
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`. 
   Store the other cities in a new array named `visitedCities`.
*/

let cities = ["London", "New York", "Paris", "berlin"];
let visitedCities = [];

for (const city of cities) {
  if (city == "Paris") continue;
  visitedCities.push(city);
}

/* 
for (const city of cities) {
  if (city !== "Paris") {
    visitedCities.push(city);
  }
}
*/

console.log(visitedCities);

/* 

3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. 
   Store the numbers before `4` in an array named `smallNumbers`.
   */

let numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
}

/* 
5. Use a `for-in` loop to loop through an object containing city populations. 
   Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.

   let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};
*/

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};

let cityPopulations = {};

for (const city in citiesPopulation) {
  if (city === "Berlin") {
    break;
  }

  cityPopulations[city] = citiesPopulation[city];
}
console.log(cityPopulations);

// individually accessing all the keys in an object
console.log(Object.keys(cityPopulations));
// acccessing all the values
console.log(Object.values(cityPopulations));
// accessing both key-value pairs
console.log(Object.entries(citiesPopulation));
// accessing just the london in two ways
console.log(cityPopulations["London"]);
console.log(citiesPopulation.London);

/*
6. Use a `for-in` loop to loop through an object containing city populations. 
   Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};
*/

let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};

let largeCities = {};

for (const city in worldCities) {
  if (worldCities[city] < 3000000) continue;
  largeCities[city] = worldCities[city];
}

console.log(Object.entries(largeCities));
