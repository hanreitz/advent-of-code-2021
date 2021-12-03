// aim also starts at 0
// down X ++ aim by X; up X -- aim by X
// forward X ++ horizontal by X AND ++ depth by aim*X

const readFile = require('fs').readFileSync
const file = readFile('./day02.input', 'utf-8').split('\n')

const horizontalByDepthWithAim = input => {
  const directionHash = { 'horizontal': 0, 'aim': 0, 'depth': 0 }
  for(let i = 0; i < input.length; i++){
    const direction = input[i].split(' ')[0] 
    const amount = parseInt(input[i].split(' ')[1])
    if(direction === 'forward'){
      directionHash['horizontal'] += amount
      directionHash['depth'] += directionHash['aim'] * amount
    } else if (direction === 'down'){
      directionHash['aim'] += amount
    } else {
      directionHash['aim'] -= amount
    }
  }

  return directionHash['horizontal'] * directionHash['depth']
}

horizontalByDepthWithAim(file) //?