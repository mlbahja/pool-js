function round(num) {
    let neg = false;
    if (num < 0) {
        neg = true;
        num = -num;
    }
    let counter = 0;
        while (!(num < 1 && num > -1)) {
        num -= 1;
        counter++;
        console.log(num, counter);
    }
    if (num < 0.5) {
        if (neg) {
            return -counter;
        } else {
            return counter;
        }
    } else {
        if (neg) {
            return -counter - 1;
        } else {
            return counter + 1;
        }
    }
}
console.log(round(1));
function floor(num) {
    let neg = false;
    if (num < 0) {
        neg = true;
        num = -num;
    }
    let intCopy = num;
    let counter = 0;
    while (!(intCopy < 1 && intCopy > -1)) {
        intCopy -= 1;
        counter++;
    }
    if (neg) {
        return -counter - 1;
    } else {
        return counter;
    }
}

function ceil(num) {
    if (!num) return 0;
    let neg = false;
    if (num < 0) {
        neg = true;
        num = -num;
    }
    let intCopy = num;
    let counter = 0;
    while (!(intCopy < 1 && intCopy >= 0)) {
        intCopy -= 1;
        counter++;
    }
    if (neg) {
        return -counter;
    } else {
        return counter + 1;
    }
}

function trunc(num) {
    let counter = 0;
    if (num > 0xfffffffff) {
        num -= 0xfffffffff;
        counter += 0xfffffffff;
    }
    let neg = false;
    if (num < 0) {
        neg = true;
        num = -num;
    }
    let intCopy = num;
    while (!(intCopy < 1 && intCopy > -1)) {
        intCopy -= 1;
        counter++;
    }
    if (neg) {
        return -counter;
    }
    return counter;
}