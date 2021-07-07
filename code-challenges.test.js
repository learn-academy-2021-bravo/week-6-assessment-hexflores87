// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

const { describe } = require("yargs");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// a) Create a test with an expect statement using the variable provided.
describe("testPass", () => {
  test("returns an array with a sentence about each person with their names capitalized", () => {
    expect("testPass"()).toEqual([
      "Ford Prefect is a hitchhiker.",
      "Zaphod Beeblebrox is a president of the galaxy.",
      "Arthus Dent is a radio employee.",
    ]);
  });
});
// Create input array:
var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" },
];
// create a function called testPass
const testPass = (arr) => {
  // declare return array
  let retArr = [];
  // iterate through input array:
  arr.forEach((element) => {
    // store first and last name from name field into variable nameArr:
    let nameArr = element.name.split(" ");
    // store first character from first name into c1 variable.
    let c1 = nameArr[0].charAt(0).toUpperCase();
    // store first character from first name into c1 variable.
    let c2 = nameArr[1].charAt(0).toUpperCase();
    // convert to uppercase first character of first name
    // then concatenate to beginning of first name less first character
    let fname = c1 + nameArr[0].substring(1);
    // convert to uppercase first character of last name
    // then concatenate to beginning of lasst name less first character
    let lname = c2 + nameArr[1].substring(1);
    // construct sentence and store in variable sent.
    let sent = `${fname} ${lname} is a ${element.occupation}`;
    // push into the return array.
    retArr.push(sent);
  });
  // return new array for sentences.
  return retArr;
};
// call testPass storing return array into const newArr
const newArr = testPass(people);
// itereate new array
newArr.forEach((element) => {
  // print each row from the new array.
  console.log(element);
});
// b) Create the function that makes the test pass.


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

 a) Create a test with an expect statement using the variables provided.

describe("remainderThree", () => {
  test("returns an array of only the REMAINDERS of the numbers when divided by 3.", => {
    expect("remainderThree"()).toEqual([2, 0, -1, 0]);
    expect("remainderThree"()).toEqual([2, 1, -1]);
 });
 });

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false];
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true];
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.

// Create a function called remainderThree.
const remainderThree = (data) => {
  // declare return array
  let retArr = [];
  // iterate passed in array:
  data.forEach((num) => {
    // if type of number is number then add to return array.
    if (typeof num == "number") retArr.push(num % 3);
  });
  // return new array.
  return retArr;
};

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
describe("sumCubed", () => {
  test("returns the sum of all the numbers cubed.", () => {
    expect("sumCubed"()).toEqual(99);
    expect("sumCubed"()).toEqual(1125);
  });
});

// b) Create the function that makes the test pass.

var cubeAndSum1 = [2, 3, 4];
// Expected output: 99

// declare function called sumCubed:
const sumCubed = (numbers) => {
  // declare resturn sum.
  let sum = 0;
  // iterate through numbers:
  numbers.forEach((num) => {
    // add to sum the number cubed.
    sum += num * num * num;
  });
  // return cubed sum.
  return sum;
};
