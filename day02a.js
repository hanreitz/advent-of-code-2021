// horizontal + depth both start at 0
// 'forward' ++ horizontal; there is no backward
// 'down' ++ depth; 'up' -- depth
// goal: find final horizontal * final depth

const readFile = require('fs').readFileSync
const file = readFile('./day02.input', 'utf-8').split('\n')

const horizontalByDepth = input => {
  const directionHash = { 'forward': 0, 'down': 0, 'up': 0 }
  for(let i = 0; i < input.length; i++){
    const direction = input[i].split(' ')[0]
    const amount = input[i].split(' ')[1]
    directionHash[direction] += parseInt(amount)
  }

  return directionHash['forward'] * (directionHash['down'] - directionHash['up'])
}

horizontalByDepth(file)