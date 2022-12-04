import fs from 'fs'
import _ from 'lodash'

const txt = fs.readFileSync('./input', { encoding: 'utf8' })

const rows = txt.split('\n')

const val = rows.map( r => checkOverlap(r, overlap)).reduce( (acc, overlap) => acc + (overlap ? 1 : 0), 0)
console.log(val)

const val2 = rows.map(r => checkOverlap(r, overlapAll)).reduce( (acc, overlap) => acc + (overlap ? 1 : 0), 0)
console.log(val2)

function toGroup( g: string ): [number, number] {
  const [val1, val2] = g.split('-')

  if(!val1 || !val2) {
    throw Error()
  }

  return [parseInt(val1, 10), parseInt(val2, 10)]
}

function checkOverlap(str: string, overlapFn: (a: [number, number], b: [number, number]) => boolean): boolean{
  const [g1str, g2str] = str.split(',')

  const g1 = toGroup(g1str)
  const g2 = toGroup(g2str)

  return overlapFn(g1, g2)
}

function overlap(a: [number, number], b: [number, number]): boolean {

  const aInB = b[1] >= a[1] && b[0] <= a[0]
  const bInA = a[1] >= b[1] && a[0] <= b[0]

  return aInB || bInA
}

function overlapAll(a: [number, number], b: [number, number]): boolean {
  const avals = _.range(a[0], a[1]+1)
  const bvals = _.range(b[0], b[1]+1)
  return _.intersection(avals, bvals).length !== 0
}


