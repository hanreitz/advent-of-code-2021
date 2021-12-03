// count increases using three-measurement windows

const readFile = require('fs').readFileSync
const file = readFile('./day01.input', 'utf-8').split('\n').map(num => parseInt(num,10))

const countIncreases = input => {
  let count = 0;
  let prevSum = input[0] + input[1] + input[2]

  for(let i = 1; i < input.length - 2; i++){
    let currSum = prevSum - input[i - 1] + input[i + 2]
    if(currSum > prevSum) {
      count++
    }
    prevSum = currSum
  }

  return count
}

countIncreases(file) //?