// const regex1 = //;
// const regex2 = //;

function sameAmount(str,regex1,regex2){

    const regex11 = new RegExp(regex1.source,regex1.flags.replace(/g?/,'g'));
    const regex22 = new RegExp(regex2.source,regex2.flags.replace(/g?/,'g'));
const cop1 = str.match(regex11) || [];
const cop2 = str.match(regex22) || [];
if (cop1.length === cop2.length){
return true;
}else{
    return false;
}
}
 console.log(sameAmount('test',/q /g, /qqqqqqqq/g));