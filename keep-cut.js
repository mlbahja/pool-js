// function cutFirst(str){
//    res = '';
//    for (let i = 2;i < str.length;i++){
//     res += str[i];
//    }
//     return res;
// }
function keepLast(str){
    if (str.length <= 2) {
        return str;
    }
   let res = '';
    for (let i = str.length-2;i < str.length;i++){
        res += str[i];
    }
    return res;
}
function keepFirst(str){
    if (str.length <= 2){
        return str;
    }
    let res = '';
    for (let i = 0;i < 2;i++){
        res += str[i];
    }
    return res;
}
function cutFirst(str){
    if (str.length <= 2) return ""; 
  let  res = '';
    for (let i = 2;i < str.length;i++){
     res += str[i];
    }
     return res;
 }
 function cutLast(str){
    if (str.length <= 2) return "";
   let  res = '';
     for (let i = 0;i < str.length-2;i++){
         res += str[i];
     }
     return res;
 }
 function cutFirstLast(str){
    if (str.length <= 4) return "";
     let res = '';
     for (let i = 2;i < str.length-2 ;i++){
         res += str[i];
     }
     return res;
 }
function keepFirstLast(str){
    if (str.length <= 4) return str;
  let  res = '';
    for (let i = 0; i < 2;i++){
        res += str[i];
    }
    for (let i = str.length-2;i < str.length;i++){
        res += str[i];
    }
    return res;
}
// console.log(cutFirst("abcdef"));