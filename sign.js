function sign(num){
    if (num > 0) {
        return 1;
    }
    if (num < 0) {
        return -1;
    }
    return 0;
}
function sameSign(num, num1){
    if ((num < 0  && num1 < 0) ||
       (num > 0 && num1 > 0) ||
       (num == 0 && num1 == 0)){
        return true;
    }
    return false;
}