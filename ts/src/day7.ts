import fs from 'fs'
import _ from 'lodash'

const txt = fs.readFileSync('./input', { encoding: 'utf8' })
const rows = txt.split('\n')

let loc: string[] = []
let folders: {path: string, size: number}[] = []
rows.forEach( r  => {

  if(
    r.startsWith('$ ls') ||
    r.startsWith('dir')
  ) {
    return
  }

  if (r.startsWith('$ cd ..')) {
    loc = _.dropRight(loc)
  } else if (r.startsWith('$ cd')) {
    const dirName = r.slice(5)
    loc.push(dirName)

    const path = loc.join('/')
    const f = folders.find( f => f.path === path )
    if(!f) {
      folders.push( { path, size: 0 } )
    }
  } else {
    const [sizeStr] = r.split(' ')
    const size = parseInt(sizeStr, 10)

    folders.forEach( f => {
      const currentPath = loc.join('/')
      if (currentPath.startsWith(f.path)) {
        f.size += size
      }
    })
  }
})

const res = folders.filter( f => f.size <= 100_000 ).reduce( (acc, f) => acc + f.size, 0 )
console.log(res)

// console.log(folders)

const tot = 70_000_000
const wantFree = 30_000_000

const rootSize = folders.find(f => f.path === '/')!.size
const toFree = wantFree - (tot - rootSize)
const folderSorted = folders.sort( (a, b) => a.size - b.size ).find( f => f.size >= toFree)

console.log(folderSorted)