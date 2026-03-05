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

/*
Challenge 6: Check existence
Write a function that:
Takes an array + value
Returns true if found, else false
❌ No .includes()
*/
