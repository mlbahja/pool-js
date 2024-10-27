function chunk(arr,n) {
    let res = [];
    for (let i =0;i < arr.length; i+=n) {
        let end = i+n
        if (i+n > arr.length) {
            end = arr.length;
        }
        res.push(arr.slice(i,end));
    }
    return res;
}
console.log(chunk([1,2,3,4,5,6,7,8,9,10,11],2))