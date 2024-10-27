import { readdir } from 'node:fs/promises';
let arg = process.argv[2]
let dir = await readdir(arg, 'utf8')

console.log(dir.length)
