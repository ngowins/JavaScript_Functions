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

//Exercise 3 Section
console.log("EXERCISE 3:\n==========");

let x = prompt("Enter your 'X' coordinate");
let y = prompt("Enter your 'Y' coordinate");

function quadrant(x, y) {
  if (x == 0 && y == 0) {
    console.log("Your coordinate is not in a quadrant.");
  } else {
    if (x >= 0 && y >= 0) {
      console.log("Your coodinate lies in quadrant 1.");
    } else if (x < 0 && y >= 0) {
      console.log("Your coodinate lies in quadrant 2.");
    } else if (x < 0 && y < 0) {
      console.log("Your coodinate lies in quadrant 3.");
    } else {
      console.log("Your coodinate lies in quadrant 4.");
    }
  }
}

quadrant(x, y);

// Exercise 4 Sectionp
console.log("EXERCISE 4:\n==========");

let side1 = prompt("Enter length of the first side of the triangle.");
let side2 = prompt("Enter length of the second side of the triangle.");
let side3 = prompt("Enter length of the third side of the triangle.");

function triangleType(side1, side2, side3) {
  if (side1 == side2 && side1 == side3) {
    console.log("This is an equilateral triangle.");
  } else if (side3 <= side1 + side2) {
    console.log("This is not a valid triangle");
  } else if (side1 == side2 || side1 == side3) {
    console.log("This is an isosceles Triangle");
  } else {
    console.log("This is a regular triangle.");
  }
}

triangleType(side1, side2, side3);
