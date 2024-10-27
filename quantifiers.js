function every(arr, r) {
    for (var i = 0; i < arr.length; i++) {
        if (!r(arr[i])) return false;
    }
    return true;
}

function some(arr, r) {
    for (var i = 0; i < arr.length; i++) {
        if (r(arr[i])) return true;
    }
    return false;
}

function none(arr, r) {
    return !some(arr, r);
}