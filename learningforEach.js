let numbers = [1, 2, 3, 4, 5];

function display(element /* index, array */) {
  console.log(element /* index, array */);
}

// double
function double(value, index, array) {
  array[index] = value * 2;
}

// numbers.forEach(double);
// numbers.forEach(triple);
numbers.forEach(cube);
numbers.forEach(display);

// triple

function triple(value, index, array) {
  array[index] = value * 3;
}
// cube
function cube(value, index, array) {
  array[index] = Math.pow(value, 3);
}

// arrow function

// function sayhello() {
//   console.log("hello");
// }

// how we write this in arrow function

const sayhello = (name, age) => {
  console.log(`hello ${name}`);
  console.log(`i am  ${age} old`);
};

sayhello("surya", 21);
