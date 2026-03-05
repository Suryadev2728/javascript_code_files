// constructor function
// should follow the naming convention while using the Constructor Function - the first letter
// be in upper Case

function User(username, password) {
  this.username = username;
  this.password = password;
}

let firstUser = new User("Drago", "Dragon");
console.log(firstUser);

console.log(typeof firstUser);

function InternSource(src, info) {
  this.source = src;
  this.information = info;
}

let oppurtunity1 = new InternSource("Google", "found a SWE Intern role");
console.log(oppurtunity1);

function StudentList(name, uni) {
  this.name = name;
  ((this.university = uni),
    (this.info = function (id) {
      return `this ${this.name} is from ${this.university} and student id: ${id}`;
    }));
}

let studentinfo = new StudentList("surya", "Aru");
console.log(studentinfo);
console.log(studentinfo.info("241"));

function SortJobList(job, jtype, corporate) {
  this.corporate = corporate;
  this.job_type = jtype;
  this.job = job;

  this.info = function () {
    return `${this.corporate} launched a ${this.job_type} position for ${this.job}`;
  };
}
let newJobList = new SortJobList("SWE", "Intern", "Google");
console.log(newJobList);

console.log(newJobList.info());

function DifferentUsers(usr) {
  this.username = usr;
}

DifferentUsers.prototype.password = function () {
  return `Username : ${this.username}`;
};

let newUser = new DifferentUsers("drago");
console.log(newUser);

console.log(newUser.password());

/* 
LEVEL 1 — Foundation (confidence)
1️⃣ Car constructor

Create a constructor Car with:
brand
model
year
Create 2 car objects and log them.

*/

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.getdetails = function () {
    return `${(this.brand, this.model, this.year)} is lit`;
  };
}
let dreamCar = new Car("BMW", "M5-Competetion", "2023");
let dreamCar2 = new Car("Ford", "Mustang", "1969");

console.log(dreamCar, dreamCar2);

Car.prototype.getage = function (currentYear) {
  return `this is ${currentYear} old`;
};

/* 

2️⃣ Instance method vs prototype method

Add:
an instance method getDetails()
a prototype method getAge(currentYear)
👉 Observe:
which one exists on the object
which one exists on __proto__
*/

console.log(dreamCar.hasOwnProperty("getdetails"));
console.log(dreamCar.hasOwnProperty("getage"));
console.log(Car.prototype.hasOwnProperty("getage"));

/*
LEVEL 2 — Real reasoning
3️⃣ User login system

Create a constructor Account:
username
password
Add a prototype method:
checkPassword(inputPassword)

It should:
return "Login successful" if matched
else "Invalid password"

 */

function Account(usr, pswd) {
  this.username = usr;
  this.password = pswd;
}

Account.prototype.checkPassword = function (inputPassword) {
  if (inputPassword === this.password) {
    return `login Successfull`;
  } else {
    return `login Failed`;
  }
};

let testAccount = new Account("drago", "superman");
console.log(testAccount.checkPassword("supermaan"));

/* Shared behavior test (IMPORTANT)
Create 3 users from Account.
Check:
user1.checkPassword === user2.checkPassword

👉 Why is it true?
Explain it in words. */

let testAccount2 = new Account("diago", "qwerty");
console.log(testAccount.checkPassword === testAccount2.checkPassword);

/* 
Create a constructor function called User that:

takes username and role

stores them on the object using this

Create two users and log them

*/

function User(username, role) {
  this.username = username;
  this.role = role;
}

let admin = new User("admin@1323", "admin");
let guest = new User("guest@134", "guest");

console.log(admin);
console.log(typeof admin);

/* 

🟢 Challenge 2 — Method on Prototype (memory-friendly)
Task
Add a method called getInfo to User.prototype that returns:
"username (role)"

Example output:
"drago (admin)"

Call it on both users.
*/

User.prototype.info = function () {
  console.log(`${this.username} (
  ${this.role})`);
};

admin.info();

/* 
🟡 Challenge 3 — Internship Source Aggregator (callbacks)
Task

Write a function processSource that:
takes a function sourceFn
calls it with "backend intern
returns the result
Create two source functions:
linkedinSource
companySiteSource
Use processSource with both.

*/

function processSource(sourcefn) {
  return sourcefn("backend intern");
}

function linkedinSource(role) {
  return `found a ${role} at Linkedin`;
}

function companySiteSource(role) {
  return `found a ${role} at Corporate Website`;
}

let job = processSource(linkedinSource);
let job2 = processSource(companySiteSource);

console.log(job);
console.log(job2);

/* 
🟡 Challenge 4 — Data Transformation (no mutation)
Given:
let internships = [
  { company: "Google", open: true },
  { company: "StartupX", open: false },
  { company: "Amazon", open: true }
];

Task

Create a new array that:
keeps only open: true
uppercases company names
does NOT mutate the original array
result should be an array of objects

*/

let internships = [
  { company: "Google", open: true },
  { company: "SpaceX", open: false },
  { company: "twitter", open: true },
];

/* 
let openInternships = internships.map((g) => {
 
  if (g.open === true) {
    g.company = g.company.toUpperCase();
    return g;
  }
});

console.log(openInternships);
console.log(internships);
 */

let openInternships = internships
  .filter((g) => g.open)
  .map((g) => ({
    ...g,
    company: g.company.toUpperCase(),
  }));

console.log(openInternships);
console.log(internships);

function Student(name) {
  this.name = name;
}

Student.prototype.introduce = function () {
  return `hi, i am ${this.name}`;
};

let student1 = new Student("drago");
let student2 = new Student("diago");
let student3 = new Student("tara");

console.log(student1, student2, student3);
/* 
function divison(a, b) {
  if (b === 0) {
    throw new Error("cannot divide by 0");
  }
}

let exp1 = divison(10, 2);
let exp2 = divison(10, 0); */

function Authentication(user, password) {
  this.username = user;
  this.password = password;

  if (!new.target) {
    throw new Error("dumbass call it with new keyword");
  }
}

let account1 = new Authentication("drago", "diago");
let account2 = Authentication("pile", "boss");

console.log(account1);
