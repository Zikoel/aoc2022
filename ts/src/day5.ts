import fs from 'fs'
import _ from 'lodash'

type Command = {
  from: number
  to: number
  qt: number
}

const txt = fs.readFileSync('./input', { encoding: 'utf8' })

const staks: string[][] = [
  ['W', 'R', 'F'],
  ['T','H','M','C','D','V','W','P'],
  ['P', 'M', 'Z', 'N', 'L'],
  ['J', 'C', 'H', 'R'],
  ['C', 'P', 'G', 'H', 'Q', 'T', 'B'],
  ['G', 'C', 'W', 'L', 'F', 'Z'],
  ['W', 'V', 'L', 'Q', 'Z', 'J', 'G', 'C'],
  ['P', 'N', 'R', 'F', 'W', 'T', 'V', 'C'],
  ['J', 'W', 'H', 'G', 'R', 'S', 'V']
]

// const staks: string[][] = [
//   ['Z', 'N'],
//   ['M','C','D'],
//   ['P'],
// ]

const staks2 = _.cloneDeep(staks)

txt.split('\n').map(parseCommand)
  .forEach( ({qt, from, to}) => {
    moveOnStaks(staks, qt, from, to, '9000')
  })
const val1 = staks.reduce( (acc, s) => `${acc}${_.last(s)}`, '')
console.log(val1)

txt.split('\n').map(parseCommand)
  .forEach( ({qt, from, to}) => {
    moveOnStaks(staks2, qt, from, to, '9001')
  })
const val2 = staks2.reduce( (acc, s) => `${acc}${_.last(s)}`, '')
console.log(val2)

export function moveOnStaks(staks: string[][], qt: number, from: number, to: number, model: '9000' | '9001') {
  const elements = _.takeRight(staks[from], qt)
  staks[from] = _.dropRight(staks[from], qt)
  staks[to].push(...(model === '9000' ? elements.reverse() : elements))
}

function parseCommand(str:string): Command {
  const rx = /move (\d+) from (\d+) to (\d+)/gm

  const matches = str.matchAll(rx)

  const [_, qtStr, fromStr, toStr] = matches.next().value

  const qt = parseInt(qtStr, 10)
  const from = parseInt(fromStr, 10) -1
  const to = parseInt(toStr, 10) -1

  if(isNaN(qt) || isNaN(from) || isNaN(to)) {
    throw Error('parsing')
  }

  return {
    from,
    to,
    qt
  }

}