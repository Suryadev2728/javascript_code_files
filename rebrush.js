let firstProgram = "hello World";
let number = 68;
console.log(firstProgram);
console.log(number);

let booleanValue = true;
console.log(booleanValue);

let chaitypes = ["chai", "latte", "mocha", "americano", "espresso"];
console.log(chaitypes[0]);
console.log(chaitypes[4]);

console.log(chaitypes.length);
chaitypes.push("masala chai");
console.log(chaitypes);
chaitypes.pop(); // removes the last element of the array
console.log(chaitypes);
chaitypes.shift(); // removes the first element of the array
console.log(chaitypes);

let dummyPasswords = ["qwerty", "poiuy", "superman", "superhero"];
console.log(dummyPasswords[0]);

/* dummyPasswords.shift(); // removes the first element of the array
console.log(dummyPasswords);

dummyPasswords.pop(); //removes the last element of the array
console.log(dummyPasswords);
 */

let copyArray = [];

for (let i = 0; i < dummyPasswords.length; i++) {
  if (dummyPasswords[i] != "superman") {
    copyArray.push(dummyPasswords[i]);
  }
}

console.log(copyArray);

let differentSoftwares = ["kali", "ubuntu", "windows", "mintos", "archlinux"];
// inserting elements
differentSoftwares.splice(3, 0, "old linux", "mac os");

console.log(differentSoftwares);

// a situation where you dont know the last index of the array and you need to insert something at the end

differentSoftwares.splice(differentSoftwares.length, 0, "cmd lang");
console.log(differentSoftwares);

// removing something at the last element
differentSoftwares.splice(differentSoftwares.length - 1, 1);
console.log(differentSoftwares);

function removelast(array) {
  array.splice(array.length - 1, 1);
}

// removelast(differentSoftwares);

console.log(differentSoftwares);

function createandremovelast(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// just logs the result
/* console.log(createandremovelast(differentSoftwares)); */

//store the new array
let updatedarray = createandremovelast(differentSoftwares);
console.log(updatedarray);

/* 
LEVEL 2 — Logic sharpening (this is where learning happens)
Challenge 4: Remove specific item (no mutation)
*/





``