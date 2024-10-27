import {readFile} from 'node:fs/promises';

let filename  = process.argv[2] //process.argv
let content = await readFile(filename, 'utf8')
//
content = content.split(' ');
let res1 = ''
let res2 = ''
let result = [];
let n = 0
for (let i = 0; i < content.length;i++){
	for (let j = 0; j < content[i].length;j++){
		if (content[i].length%2 !== 0) {
			n = 1
		} 
		if (j < (content[i].length/2)-n){						
				res1 += content[i][j]
				n = 0
		}else{
				res2 += content[i][j]
		}
	}
		result.push(res2+res1);
		res1 = ''
		res2 = ''
}
console.log(result.join(' '));
