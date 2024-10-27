function first(arr){
    for (let a = 0;a < arr.length;a++){
        return arr[0];
    }
}
function last(arr){
    return arr[arr.length - 1];
}
function kiss(arr){
        return [last(arr),first(arr)];
}