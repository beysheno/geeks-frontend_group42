// variables and data types
// 1. String
// 2. Number
// 3. Boolean
// 4. Underfined
// 5. Null
// 6. Object


let countryName = 'Kyrgystan';
let countryPopulation = 6_100_125;
let countryInAsia = true;
let countryArea;

// console.log(countryArea);

let countryPhoneCode = null;

// console.log(countryPhoneCode);

let country = {
    name:'Kyrgyzstan',
    code2:'KG',
    code3: 'KGZ',
    population: 6_100_125,
    hasArmy: true,
    hasMarineBoard: false,
    cryptoCurrency: undefined,
    goldStorage: null,
    //key(property, field): value
    president: {
        name: "Sadyr",
        surname: "Japarov",
        age: 45
    }

}//ассоциотивный массив
console.log("My motherland is " + country.name);
console.log("Our president is " + country.president);

countryArea = 25_452_431;

let populationDensity = countryPopulation / countryArea

console.log(populationDensity + " people per km^2");

//operators:
// 1. String
// 2. Number
// 3. Boolean
// 4. Underfined
// 5. Null
// 6. Object