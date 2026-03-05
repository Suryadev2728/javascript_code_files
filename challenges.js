/* Challenge 1: Count items

Write a function that:

Takes an array

Returns how many elements it has
❌ Don’t use .length directly inside console.log */

let programmingFrameworks = ["react", "angular", "node.js", "tailwind"];
let count = 0;
function countArray(array) {
  for (let i = 0; i < array.length; i++) {
    count++;
  }

  return count;
}

console.log(countArray(programmingFrameworks));

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

function findLastElement(array) {
  return array[array.length - 1];
}

console.log(findLastElement(programmingFrameworks));

/* 
Challenge 3: Print with index

Loop through chaitypes and print like this:

*/

for (let i = 0; i < programmingFrameworks.length; i++) {
  console.log(i, programmingFrameworks[i]);
}

/* 
LEVEL 2 — Logic sharpening (this is where learning happens)
Challenge 4: Remove specific item (no mutation)
*/

function removeitem(array, item) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== item) newArray.push(array[i]);
  }
  return newArray;
}

console.log(removeitem(programmingFrameworks, "tailwind"));

/* 
Challenge 5: Reverse array (manual)
Reverse differentSoftwares without using:
reverse()
Hint: loop from end.
*/
programmingFrameworks = ["react", "angular", "node.js", "tailwind"];
console.log(programmingFrameworks);

function reverseArray(array) {
  let reverseArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
}

console.log(reverseArray(programmingFrameworks));

/* 
Challenge 6: Check existence
Write a function that:
Takes an array + value
Returns true if found, else false
❌ No .includes()
*/

// yeah buddy lets go

function checkExistence(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

console.log(checkExistence(programmingFrameworks, "tailwi"));

/* 
LEVEL 3 — Think like a backend dev 🧠
Challenge 7: Validate passwords
Given dummyPasswords, create a new array that:
Excludes passwords shorter than 6 characters
*/
let dummyPasswords = ["qwerty", "poiuy", "superman", "superhero"];
let validatedArray = [];
for (let index = 0; index < dummyPasswords.length; index++) {
  if (dummyPasswords[index].length > 6) {
    validatedArray.push(dummyPasswords[index]);
  }
}

console.log(validatedArray);

/* 
Challenge 8: Insert at position
Write a function:
function insertAt(array, index, value) {
  // return new array
}
Rules:
No splice
No mutation
*/

dummyPasswords = ["qwerty", "poiuy", "superman", "superhero"];

function insertAt(array, index, value) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i == index) {
      newArray.push(value);
    }
    newArray.push(array[i]);
  }
  return newArray;
}

// console.log(insertAt(dummyPasswords, 4, "dark zied"));

/* 
Challenge 9: Compare arrays
Write a function that:
Takes two arrays
Returns true if they have the same values in same order
*/

dummyPasswords = ["qwerty", "poiuy", "superman", "superhero"];
let newPasswords = ["qwerty", "poiuy", "superman", "superhero"];

function comparingArrays(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  } else {
    for (let i = 0; i < secondArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
    return true;
  }
}

console.log(comparingArrays(dummyPasswords, newPasswords));
