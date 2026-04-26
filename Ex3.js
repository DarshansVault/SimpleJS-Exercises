console.log("Using for loop:");

for (let i = 1; i <= 30; i++) {
  switch (true) {
    case i % 3 === 0 && i % 5 === 0:
      console.log("FizzBuzz");
      break;
    case i % 3 === 0:
      console.log("Fizz");
      break;
    case i % 5 === 0:
      console.log("Buzz");
      break;
    default:
      console.log(i);
      break;
  }
}

console.log("Using while loop:");
var j = 1;
while (j <= 30) {
  switch (true) {
    case j % 3 === 0 && j % 5 === 0:
      console.log("FizzBuzz");
      break;
    case j % 3 === 0:
      console.log("Fizz");
      break;
    case j % 5 === 0:
      console.log("Buzz");
      break;
    default:
      console.log(j);
      break;
  }
  j++;
}
console.log("Using do...while loop:");
j = 1;
do {
  switch (true) {
    case j % 3 === 0 && j % 5 === 0:
      console.log("FizzBuzz");
      break;
    case j % 3 === 0:
      console.log("Fizz");
      break;
    case j % 5 === 0:
      console.log("Buzz");
      break;
    default:
      console.log(j);
      break;
  }
  j++;
} while (j <= 30);

console.log("Using for...of loop with an array:");
const numbers = Array.from({ length: 30 }, (_, i) => i + 1);
for (let j of numbers) {
  switch (true) {
    case j % 3 === 0 && j % 5 === 0:
      console.log("FizzBuzz");
      break;
    case j % 3 === 0:
      console.log("Fizz");
      break;
    case j % 5 === 0:
      console.log("Buzz");
      break;
    default:
      console.log(j);
      break;
  }
}

console.log("Using for...in loop with an object:");
const obj = {};

for (let i = 1; i <= 30; i++) {
  obj[i] = i;
}
for (let key in obj) {
  const value = obj[key];
  switch (true) {
    case value % 3 === 0 && value % 5 === 0:
      console.log("FizzBuzz");
      break;
    case value % 3 === 0:
      console.log("Fizz");
      break;
    case value % 5 === 0:
      console.log("Buzz");
      break;
    default:
      console.log(value);
      break;
  }
}
