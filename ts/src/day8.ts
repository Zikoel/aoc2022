import fs from 'fs'

const txt = fs.readFileSync('./input', { encoding: 'utf8' })
const rows = txt.split('\n')


type VMap = number[][]

const map: VMap = []

rows.forEach( (r, i) => {
  map[i] = r.split('').map( v => parseInt(v, 10) )
})


let visCount = 0
let maxVisibility = 0
for( let y = 1; y < map.length - 1; y++ ) {
  for( let x = 1; x < map[y].length - 1; x++ ) {
    const [isVisibleU, distanceU] = visibleU(map, y, x)
    const [isVisibleD, distanceD] = visibleD(map, y, x)
    const [isVisibleL, distanceL] = visibleL(map, y, x)
    const [isVisibleR, distanceR] = visibleR(map, y, x)
    if(
      isVisibleU ||
      isVisibleD ||
      isVisibleL ||
      isVisibleR
    ) {
      visCount ++
    }
    maxVisibility = Math.max( maxVisibility, distanceD * distanceL * distanceR * distanceU )
  }

}

console.log(visCount)
console.log(visCount + (map.length*2) + (map[0].length*2) - 4 )

console.log(maxVisibility)

function visibleU(map: VMap, sy: number, sx: number): [boolean, number] {
  const currentTree = map[sy][sx]
  let distance = 0
  for(let y = sy - 1; y >= 0; y--) {
    const nextTree = map[y][sx]

    if (currentTree <= nextTree) {
      return [false, distance + 1]
    }

    distance++
  }

  return [true, distance]
}

function visibleD(map: VMap, sy: number, sx: number): [boolean, number] {
  const currentTree = map[sy][sx]
  let distance = 0
  for(let y = sy + 1; y < map.length; y++) {
    const nextTree = map[y][sx]

    if (currentTree <= nextTree) {
      return [false, distance + 1]
    }
    distance++
  }

  return [true, distance]
}

function visibleR(map: VMap, sy: number, sx: number): [boolean, number] {
  const currentTree = map[sy][sx]
  let distance = 0
  for(let x = sx+1; x < map[sy].length; x++) {
    const nextTree = map[sy][x]

    if (currentTree <= nextTree) {
      return [false, distance + 1]
    }
    distance++
  }

  return [true, distance]
}

function visibleL(map: VMap, sy: number, sx: number): [boolean, number] {
  const currentTree = map[sy][sx]
  let distance = 0
  for(let x = sx-1; x >= 0; x--) {

    const nextTree = map[sy][x]

    if (currentTree <= nextTree) {
      return [false, distance + 1]
    }
    distance++
  }

  return [true, distance]
}
