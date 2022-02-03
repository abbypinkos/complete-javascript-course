'use strict';

/*
///////////////////////////////////////
// Activating Strict Mode

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive!');

// const interface = 'Audio';
// const private = 534;

///////////////////////////////////////
// Functions

function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);

///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

///////////////////////////////////////
// Arrow functions

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

///////////////////////////////////////
// Functions Calling Other Functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

///////////////////////////////////////
// Reviewing Functions

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`)
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

///////////////////////////////////////
// Coding Challenge #1

// Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Use the function to calculate the average for both teams
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(85, 54, 41);

// Create a function 'checkWinner' that takes the average score of each team as parameters ...
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        // ... and then logs the winner to the console, together with the victory points
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins');
    }
}

// Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2
// DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
checkWinner(scoreDolphins, scoreKoalas);

// DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);

///////////////////////////////////////
// Introduction to Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice'];

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

///////////////////////////////////////
// Basic Array Operations (Methods)

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay'); // Adds the element at the end of the array
console.log(friends);
console.log(newLength);

friends.unshift('John'); // Adds the element at the start of the array
console.log(friends);

// Remove elements
friends.pop(); // Removes the element at the end of the array
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // Removes the element at the start of the array
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend named Steven');
}

///////////////////////////////////////
// Coding Challenge #2

const calcTip = bill => bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];

console.log(bills, tips, totals);

///////////////////////////////////////
// Introduction to Objects

const jonasarray = [
    'Jonas',
    'Schemdtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

///////////////////////////////////////
// Dot vs. Bracket Notation

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends.');

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends.')
// }

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// "Jonas has 3 friends and his best friend is named Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is named ${jonas.friends[0]}.`)

///////////////////////////////////////
// Object Methods

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year-old teacher, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


// Challenge
// "Jonas is a 46 year-old teacher, and he has a driver's license."

console.log(jonas.getSummary());

///////////////////////////////////////
// Coding Challenge #3

// For each, create an object with properties for full name, mass, and height
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    // Create a 'calcBMI' method on each object to calculate BMI
    // BMI = mass / height ** 2
    calcBMI() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();

// Log to the console who has the higher BMI, together with full name and respective BMI
// Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
}

// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

///////////////////////////////////////
// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋');
// console.log('Lifting weights repetition 2 🏋');
// console.log('Lifting weights repetition 3 🏋');
// console.log('Lifting weights repetition 4 🏋');
// console.log('Lifting weights repetition 5 🏋');
// console.log('Lifting weights repetition 6 🏋');
// console.log('Lifting weights repetition 7 🏋');
// console.log('Lifting weights repetition 8 🏋');
// console.log('Lifting weights repetition 9 🏋');
// console.log('Lifting weights repetition 10 🏋');

// for loop keeps running while condition is TRUE
for (let rep = 5; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋`);
}

///////////////////////////////////////
// Looping Arrays, Breaking and Continuing

const jonas = [
    'Jonas',
    'Schemdtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}

///////////////////////////////////////
// Looping Backwards and Loops in Loops

const jonas = [
    'Jonas',
    'Schemdtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋`)
    }
}

///////////////////////////////////////
// The while Loop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋`);
// }

let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep} 🏋`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled  a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}

///////////////////////////////////////
// Coding Challenge #4

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// Create an array 'bills' containing all 10 test bill values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// Create empty arrays for the tips and the totals
const tips = [];
const totals = [];

// Use a for loop to perform the 10 calculations
for (let i = 0; i < bills.length; i++) {
    // Use the 'calcTip' function to calculate tips and total values
    // (bill + tip) for every bill value in the bills array
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/