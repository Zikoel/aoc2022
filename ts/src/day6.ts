import fs from 'fs'
import _ from 'lodash'

const txt = fs.readFileSync('./input', { encoding: 'utf8' })
const chss = txt.split('')

console.log(indexOfUniquesCharacters(chss, 4))
console.log(indexOfUniquesCharacters(chss, 14))

function indexOfUniquesCharacters(chs: string[], len: number): number {

  const areUnique = (chs: string[]): boolean => {
    if(chs.length < len) {
      return false
    }

    const un = _.uniq(chs)
    return un.length === chs.length
  }

  let window: string[] = []
  let count = 0
  for (const ch of chs) {
    if(areUnique(window)) {
      break
    }

    window.push(ch)
    count ++

    if(window.length > len) {
      window = window.slice(1)
    }
  }

  return count
}