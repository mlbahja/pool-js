function join(arr, separator) {
    if (separator === null) {
        separator = ',';
    }
    var result = arr[0]+'';
    for (var i = 1; i < arr.length; i++) {
        result += separator + arr[i];
    }
    return result;
}

function split(ARR, separator) {
    if (separator === null) {
        separator = ",";
    }
    var result = [];
    if (separator === "") {
        for (var i = 0; i < ARR.length; i++) {
            result.push(ARR[i]);
        }
        return result;
    }
    var end = ARR.indexOf(separator);
    while (end > -1) {
        end = ARR.indexOf(separator);
        if (end === -1) {
            break;
        }
        result.push(ARR.slice(0, end));
        ARR = ARR.slice(end + separator.length);
    }
    result.push(ARR);
    return result;
}
function slice(arry, start, end) {
    if (end === undefined) {
      end = arry.length;
    }
    if (start < 0){
      start = arry.length + start;
    }
    if (end < 0){
      end = arry.length + end;
    }
    let res;
    if (typeof arry === "string"){
      res = "";
      for (let i = start;i < end;i++){
        res += arry[i];
      }
    }else if (typeof arry === "object" && arry.length !== undefined) {
      res = [];
      for (i = start; i < end;i++){
        res.push(arry[i]);
      }
    }
    return res;
}
function indexOf(arry,value,index = 0){
    console.log("this is index > :",index)
    for (let i = index;i < arry.length;i++){
        if (arry[i] === value){
            return i;
        }
   }
    return(-1);
}
// function join(arr, seprateur){
//     if (sep === null){
//         seprateur = ',';
//     }
//     var res = arr[0]+'';
//     for (var i = 1; i < arr.length;i++){
//         res += seprateur + arr[i];
//     }
//     return res;
// }
// const str = 'The quick brown fox jumps over the lazy dog.';
// for (let i := )
// console.log(str.split(' '));













