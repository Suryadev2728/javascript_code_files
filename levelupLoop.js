let fruits = ["apple", "banana", "mango"];

for (const fruit of fruits) {
  console.log(fruit.toUpperCase());
}

let scores = [10, 20, 30, 40];
let count = 0;

for (const score of scores) {
  if (score > 25) count++;
}

console.log(count);

let numbers = [1, 2, 3, 4, 5];
let result = [];
numbers.forEach((number) => {
  if (number === 3) return;
  result.push(number);
});

console.log(result);

let animals = ["dog", "cat", "bird", "fish"];
let newAnimals = [];
for (const animal of animals) {
  if (animal === "bird") break;
  newAnimals.push(animal);
}

console.log(newAnimals);

/*  
Use for...in
Store only keys whose values are strings into a new object
*/

let user = {
  name: "surya",
  age: 21,
  city: "cambridge",
};
let newObj = {};

for (const i in user) {
  if (typeof user[i] === "string") {
    newObj[i] = user[i];
  }
}

console.log(newObj);

// not possible to only store the keys but lets say if you only want to store the keys on
// an object but not the key-value pair you can push it to the array
let keys = [];
for (const i in user) {
  if (typeof user[i] === "string") {
    keys.push(i);
  }
}
console.log(keys);

/* 
Task:
Use a for loop
Create an array like:
["0-a", "1-b", "2-c", "3-d"]
*/

let letters = ["a", "b", "c", "d"];
let newarr = [];
for (let i = 0; i < letters.length; i++) {
  newarr.push(`${i}-${letters[i]}`);
}

console.log(newarr);

/*
Task:
Use for...of
Check if message contains any banned word
Store true or false
*/

let bannedWords = ["spam", "hack", "scam"];
let message = ["hello", "this", "is", "spam"];
let value;

function check(message, bannedWords) {
  for (const msg of message) {
    for (const word of bannedWords) {
      if (msg === word) {
        return false;
      } else {
        return true;
      }
    }
  }
}

value = check(message, bannedWords);
console.log(value);

/* 
Task:
Use for...in
Create a new object containing only boolean settings
*/

let settings = {
  theme: "dark",
  Notification: true,
  language: "en",
  beta: false,
};

let booleanSettings = {};

for (const i in settings) {
  if (typeof settings[i] === "boolean") {
    booleanSettings[i] = settings[i];
  }
}

console.log(booleanSettings);

/*
Arrow + forEach
Given:

Task:
Use forEach with an arrow function
Add 10 to each price
Store in a new array\
*/
let prices = [100, 200, 300];
let newArr = [];

prices.forEach((value) => {
  newArr.push(value + 10);
});
console.log(newArr);

/* Validate usernames
Given:
Task:
Use for...of
Stop when "root" is found
Store valid usernames beore it */

let usernames = ["admin", "user123", "guest", "root"];
let validUsernames = [];

for (const name of usernames) {
  if (name === "root") break;
  validUsernames.push(name);
}

console.log(validUsernames);

// map(), filter(),

/* 
Challenge 1 — Double numbers
*/

let dnumbers = [1, 2, 3, 4, 5];

const DoubledupNUm = dnumbers.map((n) => n * 2);
console.log(DoubledupNUm);

// map -returns a new array with all the changes

/* 
Challenge 2 — Uppercase strings
*/
let passwordList = ["qwerty", "random", "good code"];

let UppercasePass = passwordList.map((pass) => pass.toUpperCase());
console.log(UppercasePass);

/* 
Challenge 3 — Extract property

*/

let users = [
  { name: "Surya", age: 20 },
  { name: "Alex", age: 25 },
];

let extractedArray = users.map((dumbplaceHolder) => dumbplaceHolder.name);
console.log(extractedArray);

/* 
Challenge 4 — Filter numbers
Given:
Task:
Use filter
Keep only scores >= 50
*/

let scorez = [45, 60, 30, 80, 90];

let filteredNum = scorez.filter((score) => score >= 50);
console.log(filteredNum);

/* 
Task:
Use filter
Keep passwords with length >= 6
*/

let passwords = ["admin", "1234", "securepass", "root"];
let newPasslist = passwords.filter((p) => p.length >= 6);
console.log(newPasslist);

/* Challenge 6 — Filter objects

Given:


Task:
Use filter
Keep products with price > 100 */

let products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 },
  { name: "Phone", price: 700 },
];

let filteredProducts = products.filter((p) => p.price > 100);
console.log(filteredProducts);

/* Challenge 7 — Simple includes

Given:

Task:
Check if "admin" exists
Store result in a variable

*/

let roles = ["user", "editor", "admin"];
let resultA = roles.includes("admin");
console.log(resultA);

/*
Challenge 8 — Validation logic

Given:


Task:
Use includes
Detect if message contains any banned word
Store true or false */

let messages = "this message contains scam";

let bannedwords = ["spam", "hack", "scam"];

/*
for (const words of bannedwords) {
  if (message.includes(words)) {
    break;
    spamResult = true;
    return spamResult;
  }
}

console.log(spamResult);
 */

let spamResult = bannedWords.forEach((m) => messages.includes(m));

console.log(spamResult);

/* 

Task:
Keep only active users
Convert their names to uppercase
Result should be an array of strings

*/

/* 
LEVEL 3 — Objects + arrays (backend flavor)
5️⃣ Sanitize user input

let requestBody = {
  username: "surya",
  password: "",
  email: "test@mail.com",
  isAdmin: false
};
Task:

Create a new object

Copy only fields with non-empty values

Use for...in
*/

let requestBody = {
  username: "surya",
  password: "",
  email: "test@mail.com",
  isAdmin: false,
};

let SanitisedObject = {};

for (let value in requestBody) {
  if (requestBody[value] !== "") {
    SanitisedObject[value] = requestBody[value];
  }
}

console.log(Object.entries(SanitisedObject));
console.log(SanitisedObject);
