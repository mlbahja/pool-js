const vowels = /[aeiou || AEIOU]/g;
function vowelDots(str){
    if (str === ''){
        return ''
    } 
    return str.replace(vowels,'$&.') || [];
}
// console.log(vowelDots(''))