// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//const x = '23';
//if (x === 23) console.log(23);
//console.log('larissa eh linda d+');

// more professional way of using something like the extension live server is
// the NODE.JS that is a JavaScript runtime we can install on our computers

//const calcAge = (birthYear) => 2037 - birthYear;
//console.log(calcAge(1991));

//const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//const calcTempAmplitude = function (temps) {
//let max = temps[0];
//let min = temps[0];

//for (let i = 0; i < temps.length; i++) {
//const curTemp = temps[i];
//if (typeof curTemp !== 'number') continue; // means that the rest of iteration will not be executed

//if (curTemp > max) max = curTemp;
//if (curTemp < min) min = curTemp;
//}
//console.log(max, min);
//return max - min;
//};

//calcTempAmplitude([3, 7, 23, 1]);
//const amplitude = calcTempAmplitude(temperatures);
//console.log(amplitude);

// Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures
// Create a function 'printForecast'which takes in an array 'arr' and logs a string to the console

// Example: [17, 21, 23] will print "... 17ºC in 1 days... 21ºC in 2 days...23ºC in 3 days"

// TEST DATA 1: [17, 21, 23]
// TEST DATA 2: [12, 5, -5, 0, 4]

// Loop over the array to print the temps
// Loop inside the loop to count the days
// ^^^^^^^ WRONG STEPS TO SOLVE THE PROBLEM!!

// 1- UNDERSTANDING THE PROBLEM:
// - ARRAY TRANSFORMED TO STRIING SEPARATED BY ...
// - WHAT IS THE X DAYS? INDEX + 1!!!!

// 2- BREAKING UP INTO SUB-PROBLEMS:
// - TRANSFORM ARRAY INTO STRING;
// - TRANSFORM EACH ELEMENT TO STRING WITH ºC
// - STRING NEED TO CONTAIN DAY (INDEX + 1);
// - ADD ... BETWEEN ELEMENTS
// - LOG STRING TO CONSOLE

const data = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `... ${arr[i]}ºC in ${i + 1} days `;
  } // arr[i] eh o proprio elemento no array, enquanto i eh apenas index
  console.log(str);
};

printForecast(data);
printForecast(data2);
