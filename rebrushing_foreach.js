let number = [1, 2, 3, 4, 5];

number.forEach(function (element) {
  console.log(element);
});

/* number.forEach(function (value, index, arr) {
  console.log(`${index}:  ${value} ${arr}`);
}); */

// double
number.forEach((v, i, a) => {
  a[i] = v * 2;
});

console.log(number);
