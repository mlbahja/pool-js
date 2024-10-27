function indexOf(arry,value,index = 0){
    console.log("this is index > :",index)
    for (let i = index;i < arry.length;i++){
        if (arry[i] === value){
            return i;
        }
   }
    return(-1);
}
function lastIndexOf(arry, value, last = arry.length-1){
    for (let i = last;i >= 0;i--){
        if (arry[i] === value){
            return (i);
        }
    }
    return (-1)
}
function includes(arry, value){
    for (let i = 0; i < arry.length;i++){
        if (arry[i] === value) {
            return true;
        }
    }
    return false;
}
console.log(indexOf(["teste1","test2","teste1"], "teste1",3,f,1,2));