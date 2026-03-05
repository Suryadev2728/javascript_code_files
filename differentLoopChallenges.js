/* 
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. 
   Store all teas before `"chai"` in a new array named `selectedTeas`.
*/
let teaTypes = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let i = 0; i < teaTypes.length; i++) {
  if (teaTypes[i] === "chai") {
    break;
  }
  selectedTeas.push(teaTypes[i]);
}
console.log(selectedTeas);

/* 
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`. 
   Store the other cities in a new array named `visitedCities`.
*/

let cities = ["london", "New york", "Paris", "Berlin"];
let visitedCities = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris") continue;
  visitedCities.push(cities[i]);
}
console.log(visitedCities);

/* 
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. 
   Store the numbers before `4` in an array named `smallNumbers`.
*/
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const i of numbers) {
  if (i === 4) {
    break;
  }
  smallNumbers.push(i);
}
console.log(smallNumbers);

/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`. 
   Store the other teas in an array named `preferredTeas`.
*/

let teaMenu = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];
for (const i of teaMenu) {
  if (i === "herbal tea") continue;
  preferredTeas.push(i);
}
console.log(preferredTeas);

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

// for in loops are used for objects
let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
let cityPopulations = {};

/* // individually accessing all the keys in an object
console.log(Object.keys(citiesPopulation));
// individually accessing all the values in an object
console.log(Object.values(citiesPopulation));
// accessing both key value pairs
console.log(Object.entries(citiesPopulation));


console.log(citiesPopulation.Berlin);
console.log(citiesPopulation["New York"]);

citiesPopulation["cambridge"] = 4500000;
console.log(citiesPopulation); */

for (const city in citiesPopulation) {
  if (city === "berlin") break;

  // javascript always evaluvates the right side first
  // citypopulation[london] = citiespopulation[london]; // london = 8900000, so it goes to city population
  cityPopulations[city] = citiesPopulation[city];
}
console.log(cityPopulations);

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

for (const cities in worldCities) {
  if (worldCities[cities] < 3000000) continue;
  largeCities[cities] = worldCities[cities];
}

console.log(Object.entries(largeCities));

/*`



7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`. 
   Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/

let varietyOfTeas = ["earl grey", "green tea", "chai", "oolong tea"];

let availableTeas = [];
/* varietyOfTeas.forEach(function (tea) {
  if (tea === "chai") return;
  availableTeas.push(tea);
}); */

for (const tea of varietyOfTeas) {
  if (tea === "chai") {
    break;
  }
  availableTeas.push(tea);
}

console.log(availableTeas);
/* 

8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
   Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/

let favoriteCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];
/* favoriteCities.forEach(function (cities) {
  if (cities === "Sydney") return;
  traveledCities.push(cities);
}); */

favoriteCities.forEach((cities) => {
  if (cities === "Sydney") return;
  traveledCities.push(cities);
});
console.log(traveledCities);

/* 
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
   Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/
let favNumbers = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < favNumbers.length; i++) {
  if (favNumbers[i] === 7) continue;
  doubledNumbers.push(favNumbers[i] * 2);
}

console.log(doubledNumbers);

/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` 
    and stop when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named `shortTeas`.
*/

let shortTeas = [];
let chaitypes = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
for (const chai of chaitypes) {
  if (chai.length > 10) break;
  shortTeas.push(chai);
}

console.log(shortTeas);
