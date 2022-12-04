import fs from 'fs'
import _ from 'lodash'

type Group = {
  from: number
  to: number
}

const txt = fs.readFileSync('./input', { encoding: 'utf8' })

const rows = txt.split('\n')

const val = rows
  .map( r => checkOverlap(r, overlap))
  .reduce( (acc, overlap) => acc + (overlap ? 1 : 0), 0)
console.log(val)

const val2 = rows
  .map(r => checkOverlap(r, overlapAll))
  .reduce( (acc, overlap) => acc + (overlap ? 1 : 0), 0)
console.log(val2)

function toGroup( g: string ): Group {
  const [val1, val2] = g.split('-')

  if(!val1 || !val2) {
    throw Error()
  }

  return {
    from: parseInt(val1, 10),
    to: parseInt(val2, 10)
  }
}

function checkOverlap(str: string, overlapFn: (a: Group, b: Group) => boolean): boolean{
  const [g1str, g2str] = str.split(',')

  const g1 = toGroup(g1str)
  const g2 = toGroup(g2str)

  return overlapFn(g1, g2)
}

function overlap(a: Group, b: Group): boolean {

  const aInB = b.to >= a.to && b.from <= a.from
  const bInA = a.to >= b.to && a.from <= b.from

  return aInB || bInA
}

function overlapAll(a: Group, b: Group): boolean {
  const avals = _.range(a.from, a.to+1)
  const bvals = _.range(b.from, b.to+1)
  return _.intersection(avals, bvals).length !== 0
}


