import fs from 'fs'

const txt = fs.readFileSync('./input', { encoding: 'utf8' })

const result = txt.split('\n').reduce((acc, r) => acc + strategy2(r), 0)

console.log(result)

function strategy2(r: string): number {
  const winMap: Record<string, string> = { A: 'Y', B: 'Z', C: 'X' }
  const looseMap: Record<string, string> = { A: 'Z', B: 'X', C: 'Y' }
  const pairMap: Record<string, string> = { A: 'X', B: 'Y', C: 'Z' }
  const pointsMap: Record<string, number> = { X: 1, Y: 2, Z: 3 }

  const opponent = r.at(0)
  const meAction = r.at(2)

  if (!opponent || !meAction) {
    throw Error()
  }

  switch (meAction) {
    case 'X': //lose
      return 0 + pointsMap[looseMap[opponent]]
    case 'Y': // pair
      return 3 + pointsMap[pairMap[opponent]]
    case 'Z': // win
      return 6 + pointsMap[winMap[opponent]]
    default:
      throw Error('a')
  }

  // switch (r) {
  //   case 'A X':
  //     return 3 + 0
  //   case 'A Y':
  //     return 1 + 3
  //   case 'A Z':
  //     return 2 + 6
  //   case 'B X':
  //     return 1 + 0
  //   case 'B Y':
  //     return 2 + 3
  //   case 'B Z':
  //     return 3 + 6
  //   case 'C X':
  //     return 2 + 0
  //   case 'C Y':
  //     return 3 + 3
  //   case 'C Z':
  //     return 1 + 6
  //   default:
  //     throw Error('a')
  // }
}
