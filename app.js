console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let n = prompt("Enter a number to start counting!");

function printOdds(n) {
  for (let i = 1; i <= n; i++) {
    if (i <= n) {
      console.log(i);
    } else {
      console.log("Finished!");
    }
  }
}

printOdds(n);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let userName = prompt("Enter username: ");
let age = prompt("Enter your age: ");

function checkAge(userName, age) {
  let aboveSixteen = `Congrats ${userName}, you can drive!`;
  let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
  if (age >= 16) {
    console.log(aboveSixteen);
  } else {
    console.log(belowSixteen);
  }
}

checkAge(userName, age);
