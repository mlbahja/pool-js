
import { readdir } from 'node:fs/promises';
let global = [];
let count = 1;
let arg = process.argv[2]
const files = await readdir(arg);
let word = [];

for (let i = 0;i < files.length;i++){ 
		global.push(files[i].slice(0,-5).split('_'))
}

global.map((element) => {
	word.push(element[1] + ' ' + element[0])
})
word.sort();

word.map((element) => {
	console.log(count+ '. ' + element)
	count++;
})