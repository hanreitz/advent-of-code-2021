// oxygen generator rating
// keep only numbers with the most common bit in that position
// if 0 and 1 are equally common, keep the 1s ones
// if only one number is left, that is the o-gen rating
// otherwise, move to the second digit

import { epsilon, gamma } from './day03a';

const readFile = require('fs').readFileSync
const file = readFile('./day03.input', 'utf-8').split('\n')
const g = gamma(file) //?
const e = epsilon(file)

const getRating = (data, co2 = false, i = 0) => {
  while (data.length > 1) {
    const commonVal = (
      data.reduce(
        (total, currVal) => currVal[i] === '1' ? total + 1 : total, 
        0 // initial value of total
      ) < data.length / 2
    ) ? "0" : "1";
    const checkVal = co2 ? commonVal : String(1 - commonVal);
    data = data.filter(s => s[i] === checkVal);
    i++;
  }
  return data[0];
};


const createLifeSupportRating = (data) => {
  const oxygenRating = getRating(data);
  const co2Rating = getRating(data, true);
  return parseInt(oxygenRating, 2) * parseInt(co2Rating, 2);
};

createLifeSupportRating(file) //?

// const rating = function(input, choice){
//   let current = [...input]

//   if(choice === 'O'){
//     for(let i = 0; i < input[0].length && current.length > 1; i++){
//       current = current.filter(num => parseInt(num[i]) === g[i])
//     }
//   } else if (choice === 'CO2'){
//     for(let i = 0; i < input[0].length && current.length > 1; i++){
//       current = current.filter(num => parseInt(num[i]) === e[i])
//     }
//   }

//   return current.join('')
// }

// const oxygenGeneratorRating = parseInt(rating(file, 'O'), 2) //?
// const co2ScrubberRating = parseInt(rating(file, 'CO2'), 2) //?

// const lifeSupportRating = oxygenGeneratorRating * co2ScrubberRating //?