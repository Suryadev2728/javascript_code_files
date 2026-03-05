/* 
🟢 Exercise 1 — Constructor Warm-up (very easy)
Create a constructor called Car that:
takes brand and year
stores them using this
Then create 2 objects:

*/

function Car(brand, year) {
  if (!new.target) {
    throw new Error("forgot to use the new Keyword");
  }
  if (!brand) {
    throw new Error("the brand parameter is empty buddy ");
  }
  this.brand = brand;
  this.year = year;
}
let dreamCar = new Car("BMW M5", "2024");
console.log(dreamCar);
let dreamCar2 = new Car("Audi- Rs7", "2024");

Car.prototype.info = function () {
  return `[${this.brand}- ${this.year}]`;
};
console.log(dreamCar2.info());
console.log(dreamCar.info());

/* 

🟡 Exercise 3 — Validation using throw
Modify the constructor:

if brand is missing:
throw new Error
*/

let dreambike = new Car("Yamaha R1", "2020");
console.log(dreambike.info());

/* 
🟡 Exercise 4 — Filter + Map Practice
Given:
let cars = [
  { brand: "bmw", electric: false },
  { brand: "tesla", electric: true },
  { brand: "audi", electric: false },
  { brand: "rivian", electric: true }
];

Create a new array that:
keeps only electric cars
converts brand names to uppercase
does NOT mutate original array

Expected:

[
  { brand: "TESLA", electric: true },
  { brand: "RIVIAN", electric: true }
]
*/

let cars = [
  { brand: "Audi", electic: false },
  { brand: "Bmw", electic: false },
  { brand: "tesla", electic: true },
  { brand: "BYD", electic: true },
];

let electic_cars = cars
  .filter((c) => c.electic)
  .map((g) => ({
    ...g,
    brand: g.brand.toUpperCase(),
  }));

console.log(electic_cars);

function Account(username) {
  this.username = username;
  this.say = function () {
    return username;
  };
}

let test1 = new Account("drago");
console.log(test1.say());
