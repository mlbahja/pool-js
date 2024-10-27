function pyramid(str, num) {
    let res = '';
    let space = ""
    for (let i = 0; i < str.length; i++) {
        space += " "
    }
    for (let i = 1; i <= num; i++) {
        for (let j = 0; j < (num - i); j++) {
            res += space;
        }
        for (let y = 0; y < (2 * i - 1); y++) {
            res += str;
        }
        if (i < num) {
            res += '\n';
        }
    }
    return res;
}
// console.log(pyramid('{}',12));