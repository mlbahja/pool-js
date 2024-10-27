function multiply(a, b) {
    if (a === 0 || b === 0) {
        return 0;
    }
    let result = 0;
    for (let i = 0; i < Math.abs(b); i++) {
        result += a;
    }
    if (b < 0) {
        result = -result;
    }
    return result;
}

function divide(a, b) {
    console.log("this is a :",a, "this is b",b);
    if (b === 0) {
        return -Infinity;
    }
    if (a === 0) {
        return 0;
    }
    let e = 0; 
    let isNegative = false;
    if (a < 0) {
        a = -a;
        isNegative = !isNegative;
    }
    if (b < 0) {
        b = -b;
        isNegative = !isNegative;
    }
    while (a >= b) {
        a -= b;
        e++;
    }
    return isNegative ? -e : e;
}

function modulo(a, b) {
    if (b === 0) {
        return NaN;
    }
    let isNegative = false; 
    if (a < 0) {
        a = -a;
        isNegative = true;
    }
    if (b < 0) {
        b = -b;
    }
    while (a >= b) {
        a -= b;
    }
    if (isNegative) {
        return -a;
    }
    return a;
}
console.log(multiply(-3,2))