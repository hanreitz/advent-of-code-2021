// finding the power consumption
// given list of binary numbers
// gamma is the most common bit at each position (12 pos)
// epsilon is the opposite of gamma (each bit flipped)
// power consumption is integer of epsilon * gamma

const readFile = require('fs').readFileSync
const file = readFile('./day03.input', 'utf-8').split('\n')

export const gamma = function(input) {
  const ones = new Array(input[0].length).fill(0)
  for(let i = 0; i < input.length; i++){
    for(let j = 0; j < input[i].length; j++){
      if(input[i][j] === '1') ones[j]++
    }
  }

  return ones.map(num => num > input.length/2 ? 1 : 0)
}

export const epsilon = function(input){
  return gamma(input).map(num => num === 1 ? 0 : 1)
}

const powerConsumption = function(input){
  return (parseInt(gamma(input).join(''), 2)) * (parseInt(epsilon(input).join(''), 2))
}

powerConsumption(file)