function reverse(arr){
    let res = [];
    let is_string = false;
    if (typeof arr === 'string'){
        arr = arr.split('');
        is_string = true;
    }
    for (let i = arr.length-1; i >= 0;i--){
        res.push(arr[i]);
    }
    // return res;
    if (is_string) {
        return res.join('');
    }else{
        return res;
    }
    // return is_string ? res.join('') : res;
}
// console.log(reverse('azerrr'));