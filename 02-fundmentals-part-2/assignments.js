/*
///////////////////////////////////////
// LECTURE: Functions

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const describeUSA = describeCountry('The United States of America', 331, 'Washington, D.C.');
console.log(describeUSA);
const describeDenmark = describeCountry('Denmark', 5, 'Copenhagen');
console.log(describeDenmark);
const describeJapan = describeCountry('Japan', 125, 'Tokyo');
console.log(describeJapan);

///////////////////////////////////////
// LECTURE: Function Declarations vs. Expressions

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentUSA1 = percentageOfWorld1(331);
const percentDenmark1 = percentageOfWorld1(5);
const percentJapan1 = percentageOfWorld1(125);

console.log(percentUSA1, percentDenmark1, percentJapan1);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const percentUSA2 = percentageOfWorld2(331);
const percentDenmark2 = percentageOfWorld2(5);
const percentJapan2 = percentageOfWorld2(125);

console.log(percentUSA2, percentDenmark2, percentJapan2);

///////////////////////////////////////
// LECTURE: Arrow Functions

const percentageOfWorld3 = population => (population / 7900) * 100;
const percentUSA3 = percentageOfWorld3(331);
const percentDenmark3 = percentageOfWorld3(5);
const percentJapan3 = percentageOfWorld3(125);

console.log(percentUSA3, percentDenmark3, percentJapan3);

///////////////////////////////////////
// LECTURE: Functions Calling Other Functions

function percentageOfWorld(population) {
    return (population / 7900) * 100;
}

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld(population);
    const sentence = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
    console.log(sentence);
}

describePopulation('The United States of America', 331);
describePopulation('Denmark', 5);
describePopulation('Japan', 125);

///////////////////////////////////////
// LECTURE: Introduction to Arrays

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

// USA, Japan, China, and Denmark populations
const populations = [331, 125, 1411, 5];
console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];
console.log(percentages);

///////////////////////////////////////
// LECTURE: Basic Array Operations (Methods)

const neighbors = ['Mexico', 'Canada'];
console.log(neighbors);

neighbors.push('Utopia');
console.log(neighbors);

neighbors.pop();
console.log(neighbors);

if (!neighbors.includes('Germany')) {
    console.log('Probably not a central European country')
}

neighbors[neighbors.indexOf('Mexico')] = 'United Mexican States';
console.log(neighbors);

///////////////////////////////////////
// LECTURE: Introduction to Objects

const myCountry = {
    country: 'United States of America',
    capital: 'Washington, D.C.',
    language: 'English',
    population: 328,
    neighbors: ['Mexico', 'Canada']
};

console.log(myCountry);

///////////////////////////////////////
// LECTURE: Dot vs. Bracket Notation

const myCountry = {
    country: 'The United States of America',
    capital: 'Washington, DC',
    language: 'English',
    population: 328,
    neighbors: ['Mexico', 'Canada']
};

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries, and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);

///////////////////////////////////////
// LECTURE: Object Methods

const myCountry = {
    country: 'The United States of America',
    capital: 'Washington, DC',
    language: 'English',
    population: 328,
    neighbors: ['Mexico', 'Canada'],

    describe: function () {
        return `${this.country} has ${this.population} milliom ${this.language}-speaking people, ${this.neighbors.length} neighboring countries, and a capital called ${this.capital}.`
    },

    checkIsland: function () {
        this.isIsland = this.neighbors.length === 0 ? true : false;
    }
};

console.log(myCountry.describe());

///////////////////////////////////////
// LECTURE: Iteration: The for Loop

for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting.`)
}

///////////////////////////////////////
// LECTURE: Looping Arrays, Breaking and Continuing

// Bring back the 'populations' array from previous assignment
const populations = [331, 125, 1411, 5];
const percentages2 = [];

// Use a for loop to compute an array called 'percentages2' containing the
// percentages of the world population for the 4 population values
for (let i = 0; i < populations.length; i++) {
    const percent = percentageOfWorld1(populations[i]);
    percentages2.push(percent);

    // Use the function 'percentageOfWorld1' created earlier
    function percentageOfWorld1(population) {
        return (population / 7900) * 100;
    }
}

console.log(percentages2);
// (4) [4.189873417721519, 1.5822784810126582, 17.860759493670887, 0.06329113924050633]

// Confirm that 'percentages2' contains exactly the same values as the
// 'percentages' array that we created manually in the previous assignment
// console.log(percentages);
// (4) [4.189873417721519, 1.5822784810126582, 17.860759493670887, 0.06329113924050633]

///////////////////////////////////////
// LECTURE: Looping Backwards and Loops in Loops

const listOfNeighbors = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbors.length; i++) {

    for (let j = 0; j < listOfNeighbors[i].length; j++) {
        console.log(`Neighbor: ${listOfNeighbors[i][j]}`);
    }
}

///////////////////////////////////////
// LECTURE: The while Loop

const populations = [331, 125, 1411, 5];

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    const percent = percentageOfWorld1(populations[i]);
    percentages2.push(percent);

    function percentageOfWorld1(population) {
        return (population / 7900) * 100;
    }
}
console.log(percentages2);

const percentages3 = [];
let i = 0;
while (i < populations.length) {
    const percent = percentageOfWorld1(populations[i]);
    percentages3.push(percent);
    i++;
}
console.log(percentages3);
*/