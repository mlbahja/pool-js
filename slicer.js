//parametr of the function is non
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
