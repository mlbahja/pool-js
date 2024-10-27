function letterSpaceNumber(str){
const regexmatches = /[a-zA-Z] \d(?!\d|[a-zA-Z])/g;
    return str.match(regexmatches) || [];
}
function letter(str){
    const regex = /[a-zA-Z] \d/
    return str.match(regex);
}
console.log(letter('test 12esr hgd 546@ hg@ @'))
//  console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'))
//  console.log(letterSpaceNumber('example 1, example 20'))
/*
[a-aA-Z] >> matches any letter (upercase or tolowercase)
" " matches espace.
(?!\d[a-zA-Z]) negative lookahead to ensure the digit is not followed by anotherdigit
to avoid multi-digits 
*/