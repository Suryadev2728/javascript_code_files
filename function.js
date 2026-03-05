/* 
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/
function makeTea(typeOfTea) {
  return `making ${typeOfTea}`;
}

let teaOrder = makeTea("green tea");
console.log(teaOrder);

/* 
2. Create a function named `orderTea` that takes one parameter, `teteaType`. 
Inside this function, create another function named `confirmOrder` 
that returns a message like `"Order confirmed for chai"`. 
Call `confirmOrder` from within `orderTea` and return the result.
*/
function orderTea(teaType) {
  return function confirmOrder() {
    return `order confirmed for ${teaType}`;
  };
}
let order = orderTea("chai");
console.log(order());

/* 
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`.
*/

let calculateTotal = (price, quantity) => {
  return price * quantity;
};

let totalCost = calculateTotal(200, 2);
console.log(totalCost);

/* 
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument 
`"earl grey"`. 
Return the result of calling `makeTea`.

*/
function makeTea(typeOfTea) {
  return `make tea: ${typeOfTea}`;
}

function processTeaOrder(teafn) {
  return teafn("earl grey");
}

let earlorder = processTeaOrder(makeTea);
console.log(earlorder);

/* 
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, 
and return a message like `"Making green tea"`. 
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/

function createTeaMaker(name) {
  return function (teatype) {
    return `making ${teatype} for ${name}`;
  };
}

let teaMaker = createTeaMaker("surya");
console.log(teaMaker("green tea"));

/* 
🧩 Question 1 — Internship Source Processor (callbacks)
Scenario

Your website collects internships from different sources (LinkedIn, company sites, APIs).
Each source formats data differently.

Task
Write a function called processInternships that:
Takes another function called fetchSource as a parameter
Calls fetchSource with the argument "software intern"
Returns the result
You are given one source function:

function linkedinSource(role) {
  return `LinkedIn internships for ${role}`;
}
👉 Call processInternships using linkedinSource and store the result.

*/
function fetchSource(src) {
  return `linkedin internship for ${src}`;
}

function processInternships(fetchfn) {
  return fetchfn("Backend engineer");
}

let result = processInternships(fetchSource);
console.log(result);

/* 
🧩 Question 2 — Filter Active Internship Listings (arrays + objects)
Scenario
Your site stores internship listings like this:
let internships = [
  { company: "Google", role: "SWE Intern", open: true },
  { company: "StartupX", role: "Frontend Intern", open: false },
  { company: "Amazon", role: "Backend Intern", open: true }
];
Task
Create a new array that:
Keeps only open internships
Converts company names to uppercase
Result should be an array of strings
Example output:
["GOOGLE", "AMAZON"]

*/

let internships = [
  { company: "Google", role: "SWE Intern", open: true },
  { company: "StartupX", role: "Frontend Intern", open: false },
  { company: "Amazon", role: "Backend Intern", open: true },
];

let openInternships = internships
  .filter((j) => {
    return j.open === true;
  })
  .map((j) => {
    return {
      ...j,
      company: j.company.toUpperCase(),
    };
  });

console.log(openInternships);

/* 
for (const job of internships) {
  if (job.open === true) {
    job.company = job.company.toUpperCase();
    openInternships.push(job);
  }
}
console.log(openInternships);
 */
