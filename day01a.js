// count the number of times measurement increases from the previous

const readFile = require('fs').readFileSync
const file = readFile('./day01.input', 'utf-8').split('\n').map(num => parseInt(num,10))

const countIncreases = input => {
  let count = 0;

  for(let i = 1; i < input.length; i++){
    if(input[i] > input[i - 1]){
      count++
    }
  }

  return count
}

countIncreases(file) //?