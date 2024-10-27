import { writeFile } from 'node:fs/promises';

let arg = process.argv[2];
arg = arg.split(' ');

let res1 = '';
let res2 = '';
let result = [];

for (let i = 0; i < arg.length; i++) {
  for (let j = 0; j < arg[i].length; j++) {
    if (j < arg[i].length / 2) {
      res1 += arg[i][j];
    } else {
      res2 += arg[i][j];
    }
  }
  result.push(res2 + res1);
  res1 = '';
  res2 = '';
}
result = result.join(' ');
writeFile('verydisco-forever.txt', result);
