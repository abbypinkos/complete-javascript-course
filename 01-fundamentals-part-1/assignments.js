/*
////////////////////////////////////
// LECTURE: Values and Variables
let country = 'United States of America';
let continent = 'North America';
let population = '332';

console.log(country);
console.log(continent);
console.log(population);

////////////////////////////////////
// LECTURE: Data Types
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

////////////////////////////////////
// LECTURE: let, const and var
language = 'English';
const country = 'United States of America';
// Const cannot be reassinged; causes an error
// country = 'Mexico'
let population = '332';

////////////////////////////////////
// LECTURE: Basic Operators
const country = 'The United States of America';
const continent = 'North America';
let population = '332';
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population > 33);
const language = 'English';
const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description);

////////////////////////////////////
// LECTURE: Strings and Template Literals
const country = 'The United States of America';
const continent = 'North America';
let population = '333';
const language = 'English';
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);

////////////////////////////////////
// LECTURE: Taking Decisions: if / else Statements

const country = 'The United States of America';
let population = '333';

if(population > 33) {
    console.log(`${country}'s population is above average.`)
} else {
    console.log(`${country}'s population is ${33 - population} million below average.`)
}

////////////////////////////////////
// LECTURE: Type Conversion and Coercion

console.log('9' - '5') // 4
console.log('19' - '13' + '17') // '617'
// minus operator converts '19' and '13' to numbers; 19 - 13 = 6
// 6 converted to '6' by plus operator; '6' + '17' = '617'
console.log('19' - '13' + 17) // 23
console.log('123' < 57) // false
console.log(5 + 6 + '4' + 9 - 4 - 2) // 1143
// 11 converted to '11' by plus operator; '11' + '4' is '114'
// '114' + '9' (9 is converted by plus operator) is '1149'
// '1149' converted to 1149 by minus operator; 1149 - 4 = 1145
// 1145 - 2 = 1143

////////////////////////////////////
// LECTURE: Equality Operators: == vs. ===

const numNeighbors = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbors === 1) {
    console.log('Only 1 border!');
} else if (numNeighbors > 1) {
    console.log('More than 1 border.');
} else {
    console.log('No borders.')
}

////////////////////////////////////
// LECTURE: Logical Operators

const country = 'The United States of America'
const language = 'English';
let population = 333;
isIsland = false;

if (language === 'English' && population < 50 && !isIsland) {
console.log(`You should live in ${country}. :)`);
} else {
console.log(`${country} does not meet your criteria. :(`);
}

////////////////////////////////////
// LECTURE: The switch Statement

const language = 'English';

switch(language) {
    case 'Chinese':
    case 'Mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'Spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'English':
        console.log('3rd place');
        break;
    case 'Hindi':
        console.log('Number 4');
        break;
    case 'Arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

////////////////////////////////////
// LECTURE: The Conditional (Ternary) Operator

const country = 'The United States of America'
const population = 333;
console.log(population);

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average.`);
*/