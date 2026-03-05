let mygoals = [
  "programmer",
  "software Engineer",
  "Network Engineer",
  "Cybersecurity analyst",
];

console.log(mygoals[3]);
mygoals.pop(); //removes the last element array
console.log(mygoals);
mygoals.shift();
console.log(mygoals);
let newArray = [];

for (let i = 0; i < mygoals.length; i++) {
  newArray.push(mygoals[i]);
}

console.log(newArray);

newArray.splice(0, 0, "programmer");
newArray.splice(4, 0, "cybersecurity analayst");
console.log(newArray);
